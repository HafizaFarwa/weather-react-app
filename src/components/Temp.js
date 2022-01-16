import React, { useEffect, useState } from "react";
import "./css/style.css";

const Temp = () => {

    const [city, setcity] = useState(null);
    const [search, setsearch] = useState("Lahore");
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1d60e228b71efec918fe4f3a177b3ee0`
            const response = await fetch(url);
            const respJson = await response.json();
            //console.log(respJson);
            setcity(respJson.main);
        };
            fetchApi();
    }, [search])
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputField" value={search}
                        onChange={(event) => { setsearch(event.target.value) }} />
                </div>

                {
                    !city ? (<p className="errorMsg">City not found</p>) : (
                        <div>
                            <div className="info">
                                <h2 id = "weathercon" className="location">
                                    <i className="fas fa-street-view"></i>{search}
                                </h2>
                                <h1 className="temp">{city.temp}°C</h1>
                                <h3 className="tempmin_max">Min : {city.temp_min}°C | Max : {city.temp_max}°C</h3>
                            </div>
                            <div className="wave -one"></div>
                            <div className="wave -two"></div>
                            <div className="wave -three"></div>

                        </div>
                    )
                }

            </div>
        </>
    )
}
export default Temp;