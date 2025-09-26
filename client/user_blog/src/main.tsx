import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppProvider } from './context/AppContext.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import routes from './routes/routes.tsx';
import './index.css';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>,
);
