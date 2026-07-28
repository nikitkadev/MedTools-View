import styles from './styles.module.scss';
import config from '../../../../package.json';

export const AppHeader = () => {
    return (
        <header className={styles.appHeaderRoot}>
            <article className={styles.logo}>
                <h1>
                    MedTools Web v{config.version}
                </h1>
            </article>
        </header>
    )
}