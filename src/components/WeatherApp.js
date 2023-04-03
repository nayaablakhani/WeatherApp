import React, { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import Weatherstyle from '../styles/WeatherStyle.css';
export default function WeatherApp() {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8ce8395c32c9a7d3d602bf0f7d9da71e`;
            const result = await fetch(url)
            const resJson = await result.json()
            // console.log(resJson)
            setCity(resJson.main);
        }

        fetchApi();
    }, [search])



    return (
        <>
            <div className="box">
                <div className="search-box">
                    <input placeholder='Type Here' type="search"
                        onChange={(event) => {
                            setSearch(event.target.value)

                        }}
                    ></input>
                </div>
            </div>

            {
                !city ? (
                    <h2 className='error'>City not Found</h2>
                ) : (
                    <div>
                        <div className="info">
                            <h1 className='city'>
                                <i className="fa-solid fa-temperature-three-quarters icon"></i>{search}</h1>

                            <div className='details'>
                                <h3 className="temp">{city.temp}</h3>
                                <p className='min-max'>Min: {city.temp_min} Cel | Max: {city.temp_max}  Cel</p>
                            </div>
                        </div>
                    </div>
                )

            }

        </>


    )
}
