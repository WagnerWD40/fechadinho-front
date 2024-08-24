import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from './globalStyle.ts'
import { MantineProvider } from '@mantine/core'

// core styles are required for all packages
import '@mantine/core/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
    <GlobalStyle/>
    <App />
    </MantineProvider>
  </StrictMode>,
)
