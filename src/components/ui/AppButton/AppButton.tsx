import type React from 'react';
import styles from './styles.module.scss';

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary',
    size: 'sm' | 'md' | 'lg',
    toExpand?: boolean
}

export const AppButton = ({
    variant,
    size,
    children,
    toExpand,
    ...rest
}: AppButtonProps) => {
    return (
        <button className={`
        ${styles.appButton} 
        ${styles[variant]} 
        ${styles[size]}
        ${toExpand ? styles.expands : ''}`}
        {...rest}>
            {children}
        </button>
    )
}