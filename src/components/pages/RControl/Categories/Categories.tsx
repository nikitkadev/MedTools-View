import styles from './styles.module.scss';

export const Categories = () => {
    return (
        <section className={styles.categoriesRoot}>
            <header className={styles.categoriesHeader}>
                <h1>Категории</h1>
            </header>

            <div className={styles.categoriesMenu}>
                <ul>
                    <li>Пациент / СМО</li>
                    <li>Случай / Законченный случай</li>
                    <li>Онкозаболевания / Консилиум</li>
                    <li>Услуги</li>
                    <li>КСГ / ВМП</li>
                    <li>Назначения / Направления</li>
                    <li>Дефекты / Санкции СМО</li>
                </ul>
            </div>

            <div className={styles.renderArea}>
                Выберите категорию
            </div>
            
        </section>
    )
}