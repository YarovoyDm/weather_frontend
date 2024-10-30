import React, { useEffect, useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import cn from "classnames";
import { fetchHistory } from "../../api/fetchHistory";
import Icon from "../../components/Icon/Icon";
import WeatherByCity from "../../components/WeatherByCity/WeatherByCity";
import { MAIN_ROUTE } from "../../constants/routes";
import { ARROW } from "../../constants/icon";
import { updateHistory } from "../../store/weather/slice";
import { selectHistory } from "../../store/weather/selectors";

import styles from "./History.module.scss";

const History = () => {
    const dispatch = useDispatch();
    const id = useId();
    const history = useSelector(selectHistory);

    useEffect(() => {
        fetchHistory().then(res => dispatch(updateHistory(res)));
    }, []);

    return (
        <div className={styles.history}>
            <div className={styles.header}>
                <Link to={MAIN_ROUTE}>
                    <Icon name={ARROW} />
                </Link>
                <div className={styles.title}>Weather history</div>
            </div>
            <div
                className={cn(styles.main, {
                    [styles.mainEmpty]: !history.length,
                })}
            >
                {history.length ? (
                    history.map(item => {
                        return <WeatherByCity data={item} key={id} />;
                    })
                ) : (
                    <div className={styles.empty}>There is no data yet :(</div>
                )}
            </div>
        </div>
    );
};

export default History;
