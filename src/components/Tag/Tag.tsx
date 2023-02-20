import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from './Tag.module.scss';
import cn from 'classnames';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 'sm' | 'lg' | 'md';
    children: ReactNode;
    color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
    href?: string;
}
//md - default paragraph properties, set this prop not necessary
export const Tag = ({ size = 'md', children, color = 'ghost', href, className, ...props }: TagProps): React.ReactElement => {
    return (
    <div className={cn(styles.tag, className, {
        [styles.sm]: size === 'sm',
        [styles.md]: size === 'md',
        [styles.primary]: color === 'primary',
        [styles.red]: color === 'red',
        [styles.ghost]: color === 'ghost',
        [styles.grey]: color === 'grey',
        [styles.green]: color === 'green',
        })}
        {...props}
        >{
            href 
                ? <a href={href}>{children}</a>
                : <>{children}</> 
        }
    </div>
    )
}

