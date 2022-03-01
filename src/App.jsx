import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Housing from './pages/Housing'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import SkipToContent from './components/SkipToContent'

function App() {
  return (
    <div className="app">
      <SkipToContent />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
