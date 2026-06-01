import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

createRoot(document.getElementById('todolist')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
