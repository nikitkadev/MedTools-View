import type React from 'react';
import styles from './styles.module.scss';

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    variant: 'primary' | 'secondary',
    size: 'sm' | 'md' | 'lg'
}

export const AppButton = ({
    text,
    variant,
    size
}: AppButtonProps) => {
    return (
        <button className={`${styles.appButton} ${styles[variant]} ${styles[size]}`}>
            {text}
        </button>
    )
}