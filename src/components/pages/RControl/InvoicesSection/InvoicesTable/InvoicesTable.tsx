import { SearchInput } from '../../../../ui/SearchInput/SearchInput';
import { EmptyDataTableRow } from '../../../../ui/EmptyDataTableRow/EmptyDataTableRow';
import { useInvoicesStore } from '../../../../../modules/r-control/stores/tables/useInvoicesStore';
import dayjs from 'dayjs';
import styles from './styles.module.scss';

export const InvoicesTable = () => {

    const { invoicesShortlies } = useInvoicesStore();

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
                            <th className='thCenter'>Статус</th>
                        </tr>

                    </thead>

                    <tbody>

                        {invoicesShortlies.length > 0 ? (
                            invoicesShortlies.map((invoice) => (
                                <tr>
                                    <td>{invoice.invoiceNumber}</td>
                                    <td>{dayjs(invoice.invoiceDate).format("DD.MM.YYYY")}</td>
                                    <td>{invoice.invoiceAmount}</td>
                                    <td>{invoice.cases}</td>
                                    <td className='tdCenter'>{invoice.status}</td>
                                </tr>
                            ))
                        ) : (
                            <tr className='noneHover'>
                                <td colSpan={5}>
                                    <EmptyDataTableRow />
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>

            </div>

        </article>
    )
}