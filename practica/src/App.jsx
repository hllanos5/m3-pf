import { useState } from 'react'
import { SideBar } from './components/SideBar'
import { Contenido } from './components/Contenido'


function App() {

  return (
    <main>
      <div className='lado-izquierdo'>
        <SideBar/>
      </div>
      <div className='lado-derecho'>
        <Contenido/>
      </div>
    </main>
  )
}

export default App
