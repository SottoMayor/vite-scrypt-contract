import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HelloworldNew } from './contracts/HelloWorldNew.ts'
import artifact from '../artifacts/HelloWorldNew.json'
HelloworldNew.loadArtifact(artifact);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
