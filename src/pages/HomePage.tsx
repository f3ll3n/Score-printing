import React from "react";
import { WriteMap } from "../components/WriteMap/WriteMap";
import styles from './HomePage.module.scss';
import MyApp from "../containers/Btn";
//rewrite styles
export const HomePage: React.FC = () => {
    return (
        <div>
            <div>
                <WriteMap />
            </div>
        </div>
    )
}