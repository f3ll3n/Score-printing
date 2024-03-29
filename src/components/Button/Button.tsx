import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
//ok
import { ReactNode } from "react";
import styles from './Button.module.scss';
import cn from 'classnames';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    appearance: 'primary' | 'ghost';
}

export const Button = ({ appearance, children, className, ...props }: ButtonProps): React.ReactElement | null => {
   return (
        <button className={cn(
            styles.button, className, {
                [styles.primary]: appearance == 'primary',
                [styles.ghost]: appearance == 'ghost',
            }
        )}
            {...props}
        >
            {children}
        </button>
   )
}