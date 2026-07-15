import styles from './styles.module.scss';

export const AppHeader = () => {
    return (
        <header className={styles.appHeaderRoot}>
            <article className={styles.logo}>
                <h1>
                    MedTools Web
                </h1>
            </article>
        </header>
    )
}