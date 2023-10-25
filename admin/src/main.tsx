import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@style/index.css'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { store, persistor } from './stores/store.tsx';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
