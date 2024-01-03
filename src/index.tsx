import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/1app/providers/ThemeProvider';
import { ErrorBoundary } from '@/1app/providers/ErrorBoundary';
import { StoreProvider } from '@/1app/providers/StoreProvider';
import '@/6shared/config/i18n/i18n';
import '@/1app/styles/index.scss';
import App from './1app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
);
