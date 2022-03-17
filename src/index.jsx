import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/joskapotin_11_26022022">
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
