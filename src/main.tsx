import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from 'react-router';
import { ServiceWorker } from './Config';


ServiceWorker.register();
createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
)