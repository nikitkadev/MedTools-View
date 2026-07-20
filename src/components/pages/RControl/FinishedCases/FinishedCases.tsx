import { AppPagination } from '../../../ui/Pagination/AppPagination';
import { SearchInput } from '../../../ui/SearchInput/SearchInput';
import styles from './styles.module.scss';

export const FinishedCases = () => {
    return (
        <article className={styles.finishedCasesTableRoot}>

            <header className={styles.finishedCasesTableHeader}>

                <h1>Законченные случаи</h1>
                <SearchInput />

            </header>

            <div className="tableContainer">
                <table className={styles.finishedCasesTable}>

                    <thead>

                        <tr>
                            <th>№ поз.</th>
                            <th>№ зап.</th>
                            <th>Фамилия</th>
                            <th>Имя</th>
                            <th>Отчество</th>
                            <th>Усл. ок.</th>
                            <th>С. полиса</th>
                            <th>Н. полиса</th>
                            <th>Предъявлено</th>
                            <th>Принято</th>
                            <th>Принято СМО</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>№ поз.</td>
                            <td>№ зап.</td>
                            <td>Фамилия</td>
                            <td>Имя</td>
                            <td>Отчество</td>
                            <td>Усл. ок.</td>
                            <td>С. полиса</td>
                            <td>Н. полиса</td>
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