import { Outlet, useLocation } from 'react-router-dom'
import { useState } from 'react'
import TopBar from './TopBar'
import Header from './Header'
import Footer from './Footer'
import CallbackModal from './CallbackModal'

export default function Layout() {
  const [callbackOpen, setCallbackOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <>
      <TopBar onRequestCallback={() => setCallbackOpen(true)} />
      <Header onRequestCallback={() => setCallbackOpen(true)} />
      <main className="page-route">
        <div key={pathname} className="page-motion">
          <Outlet context={{ openCallback: () => setCallbackOpen(true) }} />
        </div>
      </main>
      <Footer />
      <CallbackModal isOpen={callbackOpen} onClose={() => setCallbackOpen(false)} />
    </>
  )
}
