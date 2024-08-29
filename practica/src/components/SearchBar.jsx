import { useContext,useState, useEffect } from "react"
import { Card } from 'primereact/card';
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { ClimaContext } from '../context/ClimaContext';

export  function SearchBar() {
    const {setCity, setShowBusqueda} = useContext(ClimaContext);

    const [searchValues, setSearchValues] = useState("");
    
    const handleBusqueda = (e)=> {
        setSearchValues(e.target.value);
    }

    const handleBusquedaAccion = (e) => {
        setCity(searchValues);
    }

  return (
    <Card className='panel-search-bar'>
        <div className='panel-cerrar'>
            <i className='pi pi-times' onClick={()=> {setShowBusqueda(false)}}></i>
        </div>
        <div className='panel-busqueda'>
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search"> </InputIcon>
                <InputText v-model="value1" placeholder="Search location"  value={searchValues} id="ciudad-busqueda" onChange={handleBusqueda}/>
            </IconField>
            <Button label="Search" onClick={()=> {setShowBusqueda(false); handleBusquedaAccion()}}/>
        </div>
        <div className='panel-paises'>
            <Button label="London" value="London" icon="pi pi-angle-right" iconPos="right" onClick={()=>{setSearchValues("London")}}/>
            <Button label="Barcelona" value="Barcelona"  icon="pi pi-angle-right" iconPos="right" onClick={()=>{setSearchValues("Barcelona")}}/>
            <Button label="Long Beach" value="Long Beach"  icon="pi pi-angle-right" iconPos="right" onClick={()=>{setSearchValues("Long Beach")}}/>
        </div>
    </Card>
  )
}
