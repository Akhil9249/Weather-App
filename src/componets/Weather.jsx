import React, { useContext, useEffect } from 'react'
import './Weather.css'
import '../../public/location-svg.svg'
import { WeatherContext } from '../context/WeatherContext'


const Weather = () => {

  const {weather,search,searchSubmit,weatherSearch,timezone,weatherLocation,weatherCurrentTime,getweather} = useContext(WeatherContext)
  
  useEffect(()=>{
    getweather()
  },[])

  return (

    <div className='weather-container'>
      <div className='weather-container-left'>
        
        <form className='weather-subcontainer-SearchInput' onSubmit={searchSubmit}>
          <input type="text" value={weatherSearch} className='Input' onChange={search} />
          <img src="../../public/location-svg.svg" alt="" className='location-img' />          
        </form>
        <div className='weather-subcontainer-left'>
            <div className='weather-subcontainer-left-top'>
              <div>
              <h1>{weather.temp_c} &deg;C</h1>
              {/* <h1>{weatherLocation.localtime}</h1> */}
              </div>
              
            </div>
            <div className='weather-subcontainer-left-bottom'>
              <div className='weather-subcontainer-left-bottom-first'>
              <div className='weather-subcontainer-left-inner'>
                <div>
                <i className="fa-solid fa-temperature-half"></i>&nbsp; <span>FEELS LIKE</span>
                </div>
                <h3>{weather.feelslike_c} &deg;</h3>
              </div>
                <div className='weather-subcontainer-left-inner'>
                <div>
                <i className="fa-solid fa-snowflake"></i>&nbsp; <span>PRECIPITATION</span>
                </div>
                <h3>{weather.precip_in}</h3>
                </div>
              </div>
                <div className='weather-subcontainer-left-bottom-second'>
                <div className='weather-subcontainer-left-inner'>
                  <div>
                  <i className="fa-solid fa-eye-slash"></i>&nbsp; <span>VISIBILITY</span>
                  </div>
                <h3>{weather.vis_miles} mi</h3>
                </div>
                <div className='weather-subcontainer-left-inner'>
                  <div>
                  <i className="fa-solid fa-eye-slash"></i>&nbsp; <span>HUMIDITY</span>
                  </div>
              <h3>{weather.humidity}%</h3>
                </div>
                </div>
                
            </div>
        </div>
      </div>
      <div className='weather-container-right'>
        <div className='weather-container-right-sub'>
          <div>
          <i className="fa-solid fa-clock"></i> &nbsp; <span>HOURLY &nbsp;FORECAST</span>
          </div>
        
          <div className='weather-container-right-sub-outer-top'>
          {weatherCurrentTime.map((data,index)=>(
              <div className='weather-container-right-sub-top' key={index}>{data.temp_c}</div>
          ))}
          </div>
        </div>
        <div className='weather-container-right-sub'>
          <div>
          <i className="fa-solid fa-calendar-week"></i> &nbsp; <span> 10-DAY &nbsp;FORECAST</span>
          </div>
          <div className='weather-container-right-sub-outer-bottom'>
        {weatherCurrentTime.map((data,index)=>(
              <div className='weather-container-right-sub-top' key={index}>{data.temp_c}</div>
          ))}
          </div>
        </div>
        <div className='weather-container-right-sub-bottom-main'>
        <div className='weather-container-right-sub-bottom' >
          {/* <p>UV INDEX</p> */}
            <p>{weather.uv}</p>
        </div>
        <div className='weather-container-right-sub-bottom' >
        <p>{weather.wind_mph}</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
