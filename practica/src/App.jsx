import { useState } from 'react'
import { LadoIzquierdo } from './components/LadoIzquierdo'
import { LadoDerecho } from './components/LadoDerecho'


function App() {

  return (
    <main>
      <div className='lado-izquierdo'>
        <LadoIzquierdo/>
      </div>
      <div className='lado-derecho'>
        <LadoDerecho/>
      </div>
    </main>
  )
}

export default App
