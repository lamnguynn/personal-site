import '@/index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Homepage from '@/Homepage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Homepage />
  </StrictMode>,
);
