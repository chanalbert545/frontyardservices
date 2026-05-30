/**
 * Compress WebP and PNG images under src/assets (recursive).
 *
 * Usage:
 *   npm run compress-images           # compress in place (only if smaller)
 *   npm run compress-images -- --dry-run
 *   npm run compress-images -- --backup   # copy originals to src/assets/_originals first
 */

import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ASSETS_DIR = path.join(__dirname, '../src/assets')
const BACKUP_DIR = path.join(ASSETS_DIR, '_originals')

const MAX_WIDTH = 1920
const WEBP_QUALITY = 82
const PNG_QUALITY = 90
const SMALL_PNG_MAX = 512
const EXTENSIONS = new Set(['.webp', '.png', '.jpg', '.jpeg', '.JPG', '.JPEG', '.PNG', '.WEBP'])

const dryRun = process.argv.includes('--dry-run')
const backup = process.argv.includes('--backup')

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.name === '_originals') continue

    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)))
    } else if (EXTENSIONS.has(path.extname(entry.name))) {
      files.push(fullPath)
    }
  }

  return files
}

async function backupFile(file) {
  const relative = path.relative(ASSETS_DIR, file)
  const dest = path.join(BACKUP_DIR, relative)
  await fs.mkdir(path.dirname(dest), { recursive: true })
  await fs.copyFile(file, dest)
}

async function compressFile(file) {
  const ext = path.extname(file).toLowerCase()
  const before = (await fs.stat(file)).size
  const meta = await sharp(file).metadata()

  let pipeline = sharp(file).rotate()

  const isSmallLogo = ext === '.png' && meta.width <= SMALL_PNG_MAX && meta.height <= SMALL_PNG_MAX
  if (!isSmallLogo && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true })
  }

  if (ext === '.webp') {
    pipeline = pipeline.webp({ quality: WEBP_QUALITY, effort: 6 })
  } else if (ext === '.png') {
    pipeline = pipeline.png({ compressionLevel: 9, quality: PNG_QUALITY, palette: isSmallLogo })
  } else {
    pipeline = pipeline.jpeg({ quality: 82, mozjpeg: true })
  }

  const buffer = await pipeline.toBuffer()
  const after = buffer.length

  if (after >= before) {
    return { file, before, after: before, skipped: true }
  }

  if (!dryRun) {
    if (backup) await backupFile(file)
    await fs.writeFile(file, buffer)
  }

  return { file, before, after, skipped: false }
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

async function main() {
  console.log(`\nCompressing images in ${ASSETS_DIR}`)
  if (dryRun) console.log('(dry run — no files will be changed)\n')
  if (backup && !dryRun) console.log(`Backups → ${BACKUP_DIR}\n`)

  const files = await walk(ASSETS_DIR)
  if (files.length === 0) {
    console.log('No images found.')
    return
  }

  let totalBefore = 0
  let totalAfter = 0
  let compressed = 0
  let skipped = 0

  for (const file of files) {
    const result = await compressFile(file)
    const relative = path.relative(ASSETS_DIR, result.file)
    totalBefore += result.before
    totalAfter += result.skipped ? result.before : result.after

    if (result.skipped) {
      skipped++
      console.log(`  skip  ${relative} (already optimal)`)
    } else {
      compressed++
      const pct = (((result.before - result.after) / result.before) * 100).toFixed(0)
      console.log(
        `  ok    ${relative}: ${formatBytes(result.before)} → ${formatBytes(result.after)} (−${pct}%)`
      )
    }
  }

  const saved = totalBefore - totalAfter
  const pct = totalBefore > 0 ? ((saved / totalBefore) * 100).toFixed(1) : 0

  console.log('\n---')
  console.log(`Files: ${files.length} (${compressed} compressed, ${skipped} skipped)`)
  console.log(`Total: ${formatBytes(totalBefore)} → ${formatBytes(totalAfter)} (saved ${formatBytes(saved)}, ${pct}%)`)

  if (dryRun) {
    console.log('\nRun without --dry-run to apply changes.')
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
