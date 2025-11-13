import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Helloworld } from './contracts/helloWorldBsvContract.ts'
import artifact from '../artifacts/helloWorldBsvContract.json'
Helloworld.loadArtifact(artifact);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
