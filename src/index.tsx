import ReactDOM from 'react-dom/client';
import { App } from './1app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '1app/providers/ThemeProvider';

import '6shared/config/i18n/i18n';
import { ErrorBoundary } from '1app/providers/ErrorBoundary';

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
