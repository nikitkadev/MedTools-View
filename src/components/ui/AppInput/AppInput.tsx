import type React from 'react';
import styles from './styles.module.scss';

interface AppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant: 'sm' | 'md' | 'lg',
    label: string
}

export const AppInput = ({
    variant = "md",
    label,
    ...rest
}: AppInputProps) => {
    return (
        <article className={styles.appInputRoot}>
            <label>{label}</label>
            <input
                className={`${styles.appInput} ${styles[variant]}`}
                {...rest}
            />
        </article>
    )
}