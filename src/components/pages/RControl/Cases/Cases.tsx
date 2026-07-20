import styles from './styles.module.scss';

export const Cases = () => {
    return (
        <article className={styles.casesTableRoot}>
            <header className={styles.casesTableRootHeader}>
                <h1>Случаи</h1>
            </header>

            <div className="tableContainer">
                <table className={styles.finishedCasesTable}>

                    <thead>

                        <tr>
                            <th>SL_UID</th>
                            <th>Профиль</th>
                            <th>Дет.</th>
                            <th>Спец.</th>
                            <th>Лечение с</th>
                            <th>Лечение по</th>
                            <th>Диагноз</th>
                            <th>Кол-во</th>
                            <th>Тариф</th>
                            <th>Предъявлено</th>
                            <th>Принято</th>
                            <th>Принято СМО</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>SL_UID</td>
                            <td>Профиль</td>
                            <td>Дет.</td>
                            <td>Спец.</td>
                            <td>Лечение с</td>
                            <td>Лечение по</td>
                            <td>Диагноз</td>
                            <td>Кол-во</td>
                            <td>Тариф</td>
                            <td>Предъявлено</td>
                            <td>Принято</td>
                            <td>Принято СМО</td>
                        </tr>

                    </tbody>

                </table>
            </div>
        </article>
    )
}