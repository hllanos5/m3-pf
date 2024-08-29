import { useContext,useState, useEffect } from "react"
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Slider } from "primereact/slider";
import { ClimaContext } from '../context/ClimaContext';

export function Contenido() {

    const { dataClima, obtenerDireccionViento, unidadMedida, setUnidadMedida } = useContext(ClimaContext);

    const footer = (
        <>
            <div className='maxinmo'>16°C</div>
            <div className='minimo'>11°C</div>
        </>
    );

  return (
    <>
        <Card className='unidad-medida'>
            <div className={unidadMedida ==='metric' ? 'active':''} onClick={()=>{setUnidadMedida('metric')}}>°C</div>
            <div className={unidadMedida ==='imperial' ? 'active':''} onClick={()=>{setUnidadMedida('imperial')}}>°F</div>
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
                    <span className='grande'>{dataClima?.wind?.speed} </span>
                    <span className='pequeno'>mph</span>
                </div>
                <div className='pie'>
                    <i className="pi pi-send" style={{transform: `rotate(${dataClima?.wind?.deg}deg)`}}></i>{obtenerDireccionViento(dataClima?.wind?.deg)}
                </div>
            </Card>
            <Card  header='Humidity'>   
                <div className='contenido'>             
                    <span className='grande'>{dataClima?.main?.humidity} </span>
                    <span className='pequeno'>%</span>
                </div>
                <div className='pie'>
                    <div className='porcentaje'>
                        <span>0</span>
                        <span>50</span>
                        <span>100</span>
                    </div>           
                    <Slider value={dataClima?.main?.humidity} className="w-14rem" />
                    <div className='porcentaje-footer'>%</div>
                </div>              
            </Card>
            <Card header='Visibility'>                
                <div className='contenido'>
                    <span className='grande'>{dataClima?.visibility} </span>
                    <span className='pequeno'>miles</span>
                </div>
            </Card>
            <Card header='Air Pressure'>                
                <div className='contenido'>
                    <span className='grande'>{dataClima?.main?.pressure} </span>
                    <span className='pequeno'>mb</span>
                </div>
            </Card>
        </div>
        
    </>
  )
}
