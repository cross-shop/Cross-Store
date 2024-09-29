import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import myStore from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myStore}>

    <App />
    </Provider>
  </StrictMode>,
)