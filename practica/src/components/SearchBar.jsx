import React from 'react'
import { Card } from 'primereact/card';
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';

export  function SearchBar() {
  return (
    <Card className='panel-search-bar'>
        <div className='panel-cerrar'>
            <i className='pi pi-times'></i>
        </div>
        <div className='panel-busqueda'>
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search"> </InputIcon>
                <InputText v-model="value1" placeholder="Search location" />
            </IconField>
            <Button label="Search" />
        </div>
        <div className='panel-paises'>
            <ul>
                <li><span>London</span><i className='pi pi-angle-right'></i></li>
                <li><span>Barcelona</span><i className='pi pi-angle-right'></i></li>
                <li><span>Long Beach</span><i className='pi pi-angle-right'></i></li>
            </ul>
        </div>
    </Card>
  )
}
