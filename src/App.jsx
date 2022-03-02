import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SkipToContent from './components/SkipToContent/SkipToContent'
import Spinner from './components/Spinner/Spinner'

const Home = lazy(() => import('./pages/Home/Home'))
const About = lazy(() => import('./pages/About/About'))
const Housing = lazy(() => import('./pages/Housing/Housing'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))

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
