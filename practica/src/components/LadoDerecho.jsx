import React from 'react'
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Slider } from "primereact/slider";

export function LadoDerecho() {

const footer = (
    <>
        <div className='maxinmo'>16°C</div>
        <div className='minimo'>11°C</div>
    </>
);

  return (
    <>
        <Card className='unidad-medida'>
            <div className='active'>°C</div>
            <div>°F</div>
        </Card>
        <div className='panel-clima'> 
            <Card footer={footer} header='Tomorrow'>                
                <Image src="./images/HeavyRain.png" alt="Image" width="45" />                   
            </Card>  
            <Card footer={footer} header='Tomorrow'>                
                <Image src="./images/HeavyRain.png" alt="Image" width="45" />                   
            </Card>
            <Card footer={footer} header='Tomorrow'>                
                <Image src="./images/HeavyRain.png" alt="Image" width="45" />                   
            </Card>
            <Card footer={footer} header='Tomorrow'>                
                <Image src="./images/HeavyRain.png" alt="Image" width="45" />                   
            </Card>
            <Card footer={footer} header='Tomorrow'>                
                <Image src="./images/HeavyRain.png" alt="Image" width="45" />                   
            </Card>     
        </div>        
        <h1 className='highlight'>Today's Highlights</h1>
        <div className='panel-highlight'>
            <Card header='Wind status'>                
                <div className='contenido'>
                    <span className='grande'>7</span>
                    <span className='pequeno'>mph</span>
                </div>
                <div className='pie'>
                    <i className="pi pi-send"></i>WSW
                </div>
            </Card>
            <Card  header='Humidity'>   
                <div className='contenido'>             
                    <span className='grande'>84</span>
                    <span className='pequeno'>%</span>
                </div>
                <div className='pie'>
                    <div className='porcentaje'>
                        <span>0</span>
                        <span>50</span>
                        <span>100</span>
                    </div>           
                    <Slider value='84' className="w-14rem" />
                    <div className='porcentaje-footer'>%</div>
                </div>              
            </Card>
            <Card header='Visibility'>                
                <div className='contenido'>
                    <span className='grande'>6,4</span>
                    <span className='pequeno'>miles</span>
                </div>
            </Card>
            <Card header='Air Pressure'>                
                <div className='contenido'>
                    <span className='grande'>998</span>
                    <span className='pequeno'>mb</span>
                </div>
            </Card>
        </div>
        
    </>
  )
}
