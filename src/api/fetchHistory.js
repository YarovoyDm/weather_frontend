import axios from "axios";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter";

export const fetchHistory = async () => {
    try {
        const response = await axios.get("/weather/recent");

        const newData = [];

        for (let i = 0; i < response.data.length; i++) {
            newData.push({
                location: capitalizeFirstLetter(
                    response.data[i].city +
                        ", " +
                        response.data[i].data.sys.country,
                ),
                image: `https://openweathermap.org/img/wn/${response.data[i].data.weather[0].icon}@2x.png`,
                temperature: response.data[i].data.main.temp,
                type: response.data[i].data.weather[0].main,
            });
        }

        return newData;
    } catch (error) {
        console.error("Помилка отримання даних:", error);
        return null;
    }
};
