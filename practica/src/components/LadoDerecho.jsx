import React from 'react'
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';

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
                <Image src="./images/HeavyRain.png" alt="Image" width="80" />                   
            </Card>  
            <Card footer={footer} header='Tomorrow'>                
                <Image src="./images/HeavyRain.png" alt="Image" width="80" />                   
            </Card>
            <Card footer={footer} header='Tomorrow'>                
                <Image src="./images/HeavyRain.png" alt="Image" width="80" />                   
            </Card>
            <Card footer={footer} header='Tomorrow'>                
                <Image src="./images/HeavyRain.png" alt="Image" width="80" />                   
            </Card>
            <Card footer={footer} header='Tomorrow'>                
                <Image src="./images/HeavyRain.png" alt="Image" width="80" />                   
            </Card>     
        </div>
    </>
  )
}
