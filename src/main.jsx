import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the provider to PROVIDE state from the store to the entire application.
import { Provider } from 'react-redux'

// Import the store to pass it from the provider to the rest of the application.
import store from './redux/store.js'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
