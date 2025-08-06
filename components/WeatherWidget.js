import { useEffect, useState } from "react";
import axios from "axios";
import { FiCloud, FiAlertTriangle } from "react-icons/fi";

export default function WeatherWidget({ city }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchWeather() {
      try {
       const API_KEY = "ac0019d188ef2efeed4551902ebf7b91";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city + ",CR")}&appid=${API_KEY}&units=metric&lang=es`;
        const { data } = await axios.get(url);
        setWeather(data);
        setError("");
      } catch (err) {
        setError("No se pudo obtener el clima.");
      }
    }
    if (city) fetchWeather();
  }, [city]);

  if (error)
    return (
      <div className="p-4 mt-3 rounded-xl bg-[#FDF5E6] border border-[#E0E0E0] flex items-center gap-2 text-[#001F3F]">
        <FiAlertTriangle className="text-[#B8860B] text-xl" />
        <span className="font-medium">{error}</span>
      </div>
    );

  if (!weather)
    return (
      <div className="p-4 mt-3 rounded-xl bg-[#FDF5E6] border border-[#E0E0E0] text-[#001F3F]">
        Cargando clima...
      </div>
    );

  return (
     <div className="flex-1 border-1 border-amber-200 p-2 ">
    <h4 className="font-bold text-[#001F3F] text-lg mb-1">
      Clima en {city}
    </h4>
    <p className="text-gray-600 capitalize">
      {weather.weather[0].description}, {weather.main.temp}°C
    </p>
    <div className="text-sm text-gray-500 mt-1">
      <p>Sensación: {weather.main.feels_like}°C</p>
      <p>Humedad: {weather.main.humidity}%</p>
      <p>Viento: {weather.wind.speed} km/h</p>
    </div>
  </div>
  );
}
