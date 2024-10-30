import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchWeather } from "../../api/fetchWeather";
import { LIST_ROUTE } from "../../constants/routes";
import { MOBILE_WINDOW_WIDTH } from "../../constants";
import { selectWeather } from "../../store/weather/selectors";
import { updateWeather } from "../../store/weather/slice";

import styles from "./MainPage.module.scss";

const MainPage = () => {
    const [city, setCity] = useState("");
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    const dispatch = useDispatch();
    const weatherByCity = useSelector(selectWeather);

    const onCityChange = e => {
        setCity(e.target.value);
    };

    const onSubmit = useCallback(async () => {
        const weatherData = await fetchWeather(city);

        dispatch(updateWeather(weatherData));

        setCity("");
    }, [city]);

    const handleFocus = () => {
        if (window.innerWidth < MOBILE_WINDOW_WIDTH) {
            setIsKeyboardOpen(true);
        }
    };

    const handleBlur = () => {
        setIsKeyboardOpen(false);
    };

    return (
        <div className={styles.mainPage}>
            <div className={styles.weatherInfo}>
                {!isKeyboardOpen && (
                    <img
                        src={weatherByCity.image}
                        className={styles.weatherTypeImage}
                    />
                )}
                <div className={styles.location}>{weatherByCity.location}</div>
                <div className={styles.temperature}>
                    {weatherByCity.temperature}
                </div>
                <div className={styles.weatherType}>{weatherByCity.type}</div>
            </div>
            <div className={styles.request}>
                <div className={styles.inputWrapper}>
                    <label for='city'>Enter the city</label>
                    <input
                        id='city'
                        type='text'
                        placeholder='Start entering the name of the city'
                        value={city}
                        onChange={e => onCityChange(e)}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </div>
                <button onClick={() => onSubmit()}>SUBMIT</button>
                <Link to={LIST_ROUTE} className={styles.history}>
                    Show history
                </Link>
            </div>
        </div>
    );
};

export default MainPage;
