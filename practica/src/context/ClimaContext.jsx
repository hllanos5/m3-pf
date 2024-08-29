import { useEffect, useState } from 'react'
import { createContext } from 'react'

export const ClimaContext = createContext()

const API_KEY = '8d6f0cdfa8f42f5a9e094de873a575e7';

export default function ClimaProvider({ children }) {

    const [city, setCity] = useState('london')
    const [unidadMedida, setUnidadMedida] = useState('metric')
    const [dataClima, setDataClima] = useState({});
    const [dataDias, setDataDias] = useState({});
    const [showBusqueda, setShowBusqueda] = useState(false);

    const obtenerPosicion = ()=> {
        navigator.geolocation.getCurrentPosition(success);
    }

    const success = async(pos) => {
        const crd = pos.coords;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${API_KEY}&units=${unidadMedida}`);
        const result = await response.json();
        setDataClima(result);
        setCity(result.name);
    }
    
    const obtenerClimaPorCiudad = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unidadMedida}`);
        const result = await response.json();
        setDataClima(result);
    }

    const obtenerClimaCincoDias = async () => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${unidadMedida}`)
        .then((response) => response.json())
        .then((data)=> {
            const days = {}
            let contador = 0;
            data.list.forEach((obj, index)=> {                
                if(contador ===5 ){ return }
                let max = obj.main.temp_max;
                let min = obj.main.temp_min;
                let icon = obj.weather[0].icon;
                let dtText = obj.dt_txt;
                let weather = obj.weather[0].main;

                const fecha = obj.dt_txt.split(" ")[0];
                
                if(!days.hasOwnProperty(fecha)){
                    days[fecha] = {
                        tempMax: max,
                        tempMin: min,
                        times: 1,
                        icon:icon,
                        dtText: dtText,
                        weather: weather
                    }
                    contador ++;
                }
                else{
                    days[fecha].tempMax+=max;
                    days[fecha].tempMin+=min;
                    days[fecha].times+=1;

                }                
            });
            setDataDias(days);
        })
        
    }

    const obtenerDireccionViento = (dato)=> {
        const grados  = parseFloat(dato);
        
        if(grados >0 && grados < 22.5){
            return  "N";
        }
        else if(grados >=22.5 && grados < 45){
            return  "NNE";
        }
        else if(grados >=45 && grados < 67.5){
            return  "NE";
        }
        else if(grados >=67.5 && grados < 90){
            return  "ENE";
        }
        else if(grados >=90 && grados < 112.5){
            return  "E";
        }
        else if(grados >=112.5 && grados < 135){
            return  "ESE";
        }
        else if(grados >=135 && grados < 157.5){
            return  "SE";
        }
        else if(grados >=157.5 && grados < 180){
            return  "SSE";
        }
        else if(grados >=180 && grados < 202.5){
            return  "S";
        }
        else if(grados >=202.5 && grados < 225){
            return  "SSW";
        }
        else if(grados >=225 && grados < 247.5){
            return  "SW";
        }
        else if(grados >=247.5 && grados < 270){
            return  "WSW";
        }
        else if(grados >=270 && grados < 292.5){
            return  "W";
        }
        else if(grados >=292.5 && grados < 315){
            return  "WNW";
        }
        else if(grados >=315 && grados < 337.5){
            return  "NW";
        }
        else if( grados <= 337.5){
            return  "NNW";
        }
    }
    
    useEffect(() => {
        Promise.all([obtenerClimaPorCiudad(), obtenerClimaCincoDias()])        
    }, [city, unidadMedida])

    return (
        <ClimaContext.Provider
            value={{
                city,
                setCity,
                dataClima,
                unidadMedida,
                setUnidadMedida,
                obtenerDireccionViento,
                dataDias,
                obtenerPosicion,
                showBusqueda,
                setShowBusqueda
            }}
        >
            {children}
        </ClimaContext.Provider>
    )
}




