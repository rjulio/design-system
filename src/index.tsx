import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/themes/theme.css'
import './styles/config.css'
import App from './App';
import { ThemeProvider } from './components/ThemeProvider';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>,
  );
}
