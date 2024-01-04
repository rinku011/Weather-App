import React, { useEffect, useState } from "react";
import "../css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Jaipur");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=37dfd9cdb2cc2806ec6b18fc3fbcd503`;

      const response = await fetch(url);
      // console.log(response);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="container">
        <h1 className="heading">Search Live Weather</h1>
        <div className="box">
          <div className="inputData">
            <input
              type="search"
              value={search}
              className="inputField"
              onChange={(e) => {
                // console.log(e.target.value);
                setSearch(e.target.value);
              }}
            />
          </div>
          {!city ? (
            <p className="error_msg">No Data Found</p>
          ) : (
            <div className="info">
              <h1 className="location">
                <i className="fa-solid fa-street-view"></i>
                {search}
              </h1>
              <h2 className="temp">{city.temp}°C</h2>
              <h3 className="tempmin_max">
                Min : {city.temp_min}°C | Max : {city.temp_max}°C
              </h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Tempapp;
