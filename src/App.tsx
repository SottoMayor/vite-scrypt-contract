import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Helloworld } from './contracts/helloWorldBsvContract'
import { sha256, toByteString } from 'scrypt-ts'

function App() {
  const [contract, setContract] = useState<Helloworld | null>(null)

  useEffect(() => {
    async function init() {
      // cria a instância do contrato em memória
      const message = toByteString('hello world', true)
      const instance = new Helloworld(sha256(message))

      // (opcional) apenas loga o hash do contrato gerado
      console.log('Contrato instanciado:', instance)
      setContract(instance)
    }

    init()
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>BSV HelloWorld PoC</h1>
      {contract ? (
        <p>Contrato carregado com sucesso 🎉</p>
      ) : (
        <p>Carregando contrato...</p>
      )}
    </div>
  )
}

export default App
