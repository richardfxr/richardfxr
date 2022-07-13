import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { SettingsProvider } from './context/Settings'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </React.StrictMode>
)
