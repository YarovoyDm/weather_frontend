import React from "react";

import styles from "./WeatherByCity.module.scss";

const WeatherByCity = props => {
    const { location, image, temperature, type } = props.data;

    return (
        <div className={styles.weatherByCity}>
            <div className={styles.leftBlock}>
                <div className={styles.city}>{location}</div>
                <div className={styles.type}>{type}</div>
            </div>
            <div className={styles.rightBlock}>
                <div className={styles.temperature}>{temperature}&deg;</div>
                <img src={image} className={styles.weatherTypeImage} />
            </div>
        </div>
    );
};

export default WeatherByCity;
