import React from "react";
import { Link } from "react-router-dom";
import styles from './Navigation.module.scss';
//write styles
export const Navigation = (): React.ReactElement  => {
    return(
        <header className={styles.header}>
            <nav>
            <h3><Link to='/'>Score-Printer</Link></h3>
        </nav>
        </header>
        
    )
}