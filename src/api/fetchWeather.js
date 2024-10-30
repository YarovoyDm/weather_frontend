import axios from "axios";

export const fetchWeather = async cityName => {
    if (!cityName) {
        console.warn("Місто не було передане.");
        return null;
    }

    try {
        const response = await axios.get(`/weather?city=${cityName}`);

        return {
            location: response.data.name + ", " + response.data.sys.country,
            image: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@4x.png`,
            temperature: response.data.main.temp,
            type: response.data.weather[0].main,
        };
    } catch (error) {
        console.error("Помилка отримання даних:", error);
        return null;
    }
};
