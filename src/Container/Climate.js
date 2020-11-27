import React, {useState} from 'react';
import './Climate.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function Climate() {
    const [city, setCity]=useState('')
    const [country, setCountry] = useState('')
    const [weather,setWeather] =useState( null)
    
    const handleCountry = (e) => {
        setCountry(e.target.value)
        console.log(country)
    }

    const handleCity = (e) => {
        setCity(e.target.value)
        console.log(city)
    }

    const getWeather = (e) => {
        e.preventDefault()
        if (country && city ) 
        axios.get(`http://api.weatherstack.com/current?access_key=24cadfbfbf4285aeccbeb7de696f516b&query=${country},${city}`)
        .then((response) => {
            setWeather(response.data)
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
        <div className='weather-bg'>
            <form>
                <div class="form-row align-items-center">
                    <div class="col-auto">
                        <label class="sr-only" for="inlineFormInput">Name</label>
                        <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Country"  onChange={handleCountry} value={country}/>
                    </div>
                    <div class="col-auto">
                        <label class="sr-only" for="inlineFormInputGroup">Username</label>
                        <div class="input-group mb-2">
                            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="City" onChange={handleCity} value={city}/>
                        </div>
                    </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary mb-2" onClick={getWeather}>Check weather</button>
                        </div>
                    </div>
            </form>

            {
                weather&&(
                    <div className='output'>
                        <div className='region'>
                            <h1>{weather.location.name}</h1> 
                            <h1>{weather.location.region}</h1> 
                        </div>
                        <div className='temp'>
                            <div className='temp-w'>
                                <img src={weather.current.weather_icons}/>
                                <h1>{weather.current.temperature}</h1>
                            </div>
                            <div className='des'>
                                <h1>{weather.current.weather_descriptions}</h1>
                            </div>
                        </div>
                        <div className='time'>
                            <h1>{weather.current.observation_time}</h1>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Climate