import { useContext,useState, useEffect } from "react"
import { Card } from 'primereact/card';
import { InputText } from "primereact/inputtext";
import { Image } from 'primereact/image';
import { ClimaContext } from '../context/ClimaContext';
import moment from 'moment'

export  function SideBar() {

    const { city, dataClima, unidadMedida, obtenerPosicion} = useContext(ClimaContext);

    return (
        <Card className='card-lado-izquierdo'>
            <div className='navbar'>
                <div className='busqueda'>
                    <InputText className="p-inputtext-sm" placeholder="Small" />
                </div>
                <div className='pointer' onClick={()=>{obtenerPosicion()}}>
                    <Image src="./images/location.png" alt="Image" width="20" />
                </div>
            </div>
            <div className='panel-clima-principal'>
                <div className='panel-clima-principal'>
                    <Image src="./images/Shower.png" alt="Image" width="200" />
                </div>
                <div className='panel-temperatura-principal'>
                    <h1>{dataClima?.main?.temp} °{(unidadMedida==='metric')?'C':'F'}</h1>
                </div>
                <div>
                    <h3>{dataClima?.weather?.main}</h3>
                </div>
                <div className='panel-fecha'>
                    <h4> Today . {moment().format('dd')}, {moment().format('D')} {moment().format('MMM')}</h4>
                </div>
                <div>
                    <h4>{city.charAt(0).toUpperCase() + city.slice(1)}</h4>
                </div>
            </div>
        </Card>        
    )
}
