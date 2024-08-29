import { useContext,useState, useEffect } from "react"
import { SideBar } from './components/SideBar'
import { Contenido } from './components/Contenido'
import { SearchBar } from './components/SearchBar'
import { ClimaContext } from './context/ClimaContext';

function App() {
  const { showBusqueda} = useContext(ClimaContext);
  return (
    <main>
      <div className='lado-izquierdo'>
        <SideBar/>
      </div>
      <div className='lado-derecho'>
        <Contenido/>
      </div>
      {showBusqueda &&
        <div className='search-bar'>
          <SearchBar/>
        </div>
      }
      
    </main>
  )
}

export default App
