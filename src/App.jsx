import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToHashCenter from './components/ScrollToHashCenter'

const HomePage = lazy(() => import('./pages/HomePage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

function PageFallback() {
  return <div className="route-loading" aria-live="polite" aria-busy="true" />
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHashCenter />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="testimonials" element={<TestimonialsPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
