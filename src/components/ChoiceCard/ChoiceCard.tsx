import React, { Children, ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from './ChoiceCard.module.scss';
import { Button } from "../Button/Button";

export interface ChoiceCardProps {
    text: string,
    children: ReactNode,
    id: number,
}

export const ChoiceCard = ({text, children, id}: ChoiceCardProps): React.ReactElement => {
    return (
        <div className={styles.glassCard}>
                {children}
                <p>{text}</p>
                <Link to={`/test/${id}`}>Начать!</Link>
        </div>
    )
}

