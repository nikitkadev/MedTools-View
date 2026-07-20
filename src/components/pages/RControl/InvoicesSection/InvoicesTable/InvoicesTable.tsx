import { SearchInput } from '../../../../ui/SearchInput/SearchInput';
import styles from './styles.module.scss';

export const InvoicesTable = () => {
    return (
        <article className={styles.invoicesTableRoot}>

            <header className={styles.invoicesTableHeader}>

                <h1>Счета</h1>
                <SearchInput />

            </header>

            <div className="tableContainer">
                <table className={styles.invoicesTable}>

                    <thead>

                        <tr>
                            <th>№ счета</th>
                            <th>Дата счета</th>
                            <th>Сумма</th>
                            <th>Случаев</th>
                            <th>Статус</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>№ счета</td>
                            <td>Дата счета</td>
                            <td>Сумма</td>
                            <td>Случаев</td>
                            <td>Статус</td>
                        </tr>

                    </tbody>

                </table>
            </div>

        </article>
    )
}