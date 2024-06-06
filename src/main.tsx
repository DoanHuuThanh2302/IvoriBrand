import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
