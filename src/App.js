import styles from "./App.module.scss";
import MainPage from "./containers/MainPage/MainPage";
import History from "./containers/History/History";
import { Route, Routes, Navigate } from "react-router-dom";
import { MAIN_ROUTE, LIST_ROUTE } from "./constants/routes";

const App = () => {
    return (
        <div className={styles.App}>
            <Routes>
                <Route exact path={MAIN_ROUTE} element={<MainPage />} />
                <Route exact path={LIST_ROUTE} element={<History />} />
                <Route path='*' element={<Navigate to={MAIN_ROUTE} />} />
            </Routes>
        </div>
    );
};

export default App;
