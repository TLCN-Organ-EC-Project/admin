import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { store, persistor } from './stores/store.tsx';
import { PersistGate } from 'redux-persist/integration/react'
import { QueryClient, QueryClientProvider } from "react-query";
import '@style/index.css'

const getQueryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={getQueryClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </QueryClientProvider>
)
