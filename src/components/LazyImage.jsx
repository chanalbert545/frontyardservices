export default function LazyImage({ priority = false, alt = '', className, ...props }) {
  return (
    <img
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      {...props}
    />
  )
}
