import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  let [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async (event) => {
    event.preventDefault();
    console.log(`${process.env.REACT_APP_WEATHERAPI_URL}/current.json`);

    try {
      const response = await axios.get(
        `https://weatherapi-com.p.rapidapi.com/current.json`,
        {
          params: { q: city },
          headers: {
            "x-rapidapi-key":
              "9ecf3c2850msh5e9bee18e4d2772p15dc33jsn3d5e4cee8c45",
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          },
        }
      );
      console.log(response.data);
      setWeather(response.data);
      setError(""); // Clear previous error if any
    } catch (error) {
      console.log(error);
      setError("City not found. Please try again.");
      setWeather(null); // Clear previous weather data
    }
  };

  return (
    <div className="App">
      <div className="w-[100%] h-[100vh] bg-[#4aacb1]">
        <div className="max-w-[1320px] mx-auto">
          <h1 className="text-[40px] font-bold py-[50px] text-white">
            Simple weather App
          </h1>

          <form>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-[300px] h-[40px] pl-3"
              placeholder="City Name"
            />
            <button onClick={getWeather} className="bg-[blue]">
              Submit
            </button>
          </form>

          {weather && (
            <div className="w-[400px] mx-auto bg-white shadow-lg mt-[40px] p-[25px]">
              <h3 className="font-bold text-[30px]">
                {weather.location.name}, {weather.location.country}{" "}
                <span className="bg-[yellow]">IN</span>
              </h3>
              <h2 className="font-bold text-[26px]">
                Temperature: {weather.current.temp_c}°C
              </h2>
              <p>Condition: {weather.current.condition.text}</p>
              <img
                src={weather.current.condition.icon}
                alt="weather condition icon"
              />
            </div>
          )}

          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
