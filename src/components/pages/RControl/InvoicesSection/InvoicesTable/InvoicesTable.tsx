import { SearchInput } from '../../../../ui/SearchInput/SearchInput';
import { EmptyDataField } from '../../../../ui/EmptyDataField/EmptyDataField';
import { useInvoicesStore } from '../../../../../modules/r-control/stores/tables/useInvoicesStore';
import { useInvoiceSummary } from '../../../../../modules/r-control/hooks/main/useInvoiceSummary';
import { AppPagination } from '../../../../ui/Pagination/AppPagination';

import dayjs from 'dayjs';
import styles from './styles.module.scss';

export const InvoicesTable = () => {

    const {
        pagination,
        setPagination,
        invoicesShortlies,
        setSelectedRecord,
        selectedRecord } = useInvoicesStore();

    useInvoiceSummary();

    const onPageChange = (
        _event: React.MouseEvent<HTMLButtonElement> | null,
        page: number) => {

        if (page >= 0) {
            setPagination({ page: page })
        }
    }

    const onRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newPageSize = parseInt(event.target.value, 10);
        setPagination({
            pageSize: newPageSize,
            page: 0
        })
    }

    return (
        <article className={styles.invoicesTableRoot}>

            <header className={styles.invoicesTableHeader}>

                <div className={styles.titleWithSearchField}>
                    <h1>Счета</h1>
                    <SearchInput />
                </div>

                <AppPagination
                    pagination={pagination}
                    onPageChange={onPageChange}
                    onRowsPerPageChange={onRowsPerPageChange} />

            </header>

            <div className="tableContainer">

                <table className={styles.invoicesTable}>

                    <thead>

                        <tr>
                            <th>№ счета</th>
                            <th>Дата счета</th>
                            <th>Сумма, ₽</th>
                            <th>Случаев</th>
                            <th className='thCenter'>Статус</th>
                        </tr>

                    </thead>

                    <tbody>

                        {invoicesShortlies.length > 0 ? (
                            invoicesShortlies.map((invoice) => (

                                <tr
                                    className={
                                        selectedRecord && invoice.invoiceUid === selectedRecord.invoiceUid
                                            ? styles.selectedRow
                                            : ''
                                    }
                                    onClick={() => setSelectedRecord(invoice)}>
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
                                    <EmptyDataField />
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>

            </div>
        </article>
    )
}