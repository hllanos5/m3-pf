import React from 'react'
import { Card } from 'primereact/card';
import { InputText } from "primereact/inputtext";
import { Image } from 'primereact/image';

export  function LadoIzquierdo() {
  return (
    <Card className='card-lado-izquierdo'>
        <div className='navbar'>
            <div className='busqueda'>
                <InputText className="p-inputtext-sm" placeholder="Small" />
            </div>
            <div className='pointer'>
                <i className='pi pi-bullseye'></i>
            </div>
        </div>
        <div className='panel-clima-principal'>
            <div className='panel-clima-principal'>
                <Image src="./images/Shower.png" alt="Image" width="200" />
            </div>
            <div className='panel-temperatura-principal'>
                <h1>15 °C</h1>
            </div>
            <div>
                <h3>Shower</h3>
            </div>
            <div className='panel-fecha'>
                <h4> Today . Fri, 5 Jun</h4>
            </div>
            <div>
                <h4>Helsinki</h4>
            </div>
        </div>
    </Card>
  )
}
