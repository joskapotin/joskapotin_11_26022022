import { HousingContextProvider } from './contexts/HousingContext'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SkipToContent from './components/SkipToContent/SkipToContent'
import './App.css'
import Router from './Router'

function App() {
  return (
    <div className="app">
      <SkipToContent />
      <Header />

      <HousingContextProvider>
        <Router />
      </HousingContextProvider>

      <Footer />
    </div>
  )
}

export default App
