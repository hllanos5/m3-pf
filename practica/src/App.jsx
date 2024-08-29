import { useState } from 'react'
import { SideBar } from './components/SideBar'
import { Contenido } from './components/Contenido'
import { SearchBar } from './components/SearchBar'


function App() {

  return (
    <main>
      <div className='lado-izquierdo'>
        <SideBar/>
      </div>
      <div className='lado-derecho'>
        <Contenido/>
      </div>
      <div className='search-bar'>
        <SearchBar/>
      </div>
    </main>
  )
}

export default App
