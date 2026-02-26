import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Global error handler to catch startup crashes
window.onerror = function(message, source, lineno, colno, error) {
  const errorDiv = document.createElement('div');
  errorDiv.style.position = 'fixed';
  errorDiv.style.top = '0';
  errorDiv.style.left = '0';
  errorDiv.style.width = '100%';
  errorDiv.style.backgroundColor = 'red';
  errorDiv.style.color = 'white';
  errorDiv.style.padding = '20px';
  errorDiv.style.zIndex = '9999';
  errorDiv.innerHTML = `
    <h1>Startup Error</h1>
    <p>${message}</p>
    <pre>${source}:${lineno}:${colno}</pre>
    <pre>${error?.stack || ''}</pre>
  `;
  document.body.appendChild(errorDiv);
};

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element 'root' not found in index.html");
}

try {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  console.log("React app mounted successfully");
} catch (e) {
  console.error("Error mounting React app:", e);
  throw e;
}
