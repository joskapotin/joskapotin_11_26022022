import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import SkipToContent from './components/SkipToContent'
import Spinner from './components/Spinner'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Housing = lazy(() => import('./pages/Housing'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <div className="app">
      <SkipToContent />
      <Header />

      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  )
}

export default App
