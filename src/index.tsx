import ReactDOM from 'react-dom/client';
import { App } from './1app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '1app/providers/ThemeProvider';
import { ErrorBoundary } from '1app/providers/ErrorBoundary';
import '6shared/config/i18n/i18n';
import './1app/styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
