import {lazy, StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import '~assets/styles/main.css';
const App = lazy(() => import('~/App.tsx'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
