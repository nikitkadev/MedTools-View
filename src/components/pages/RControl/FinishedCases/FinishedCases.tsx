import { useFinishedCases } from '../../../../modules/r-control/hooks/useFinishedCases';
import { useFinishedCasesStore } from '../../../../modules/r-control/stores/tables/useFinishedCasesStore';
import { EmptyDataField } from '../../../ui/EmptyDataField/EmptyDataField';
import { AppPagination } from '../../../ui/Pagination/AppPagination';
import { SearchInput } from '../../../ui/SearchInput/SearchInput';
import styles from './styles.module.scss';

export const FinishedCases = () => {

    useFinishedCases();

    const {
        finishedCases,
        pagination,
        setPagination,
        setSelectedRecordUid } = useFinishedCasesStore();

    const onPageChange = (
        _event: React.MouseEvent<HTMLButtonElement>,
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
        <article className={styles.finishedCasesTableRoot}>

            <header className={styles.finishedCasesTableHeader}>

                <div className={styles.titleWithSearchField}>
                    <h1>Законченные случаи</h1>
                    <SearchInput />
                </div>

                <AppPagination
                    pagination={pagination}
                    onPageChange={onPageChange}
                    onRowsPerPageChange={onRowsPerPageChange} />

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

                        {finishedCases.length > 0 ? (
                            finishedCases.map((finishedCase) => (
                                <tr
                                    onClick={() => setSelectedRecordUid(finishedCase.zSlUid)}>
                                    <td>{finishedCase.positionNumber}</td>
                                    <td>{finishedCase.recordNumber}</td>
                                    <td>{finishedCase.surname}</td>
                                    <td>{finishedCase.name}</td>
                                    <td>{finishedCase.patronymic}</td>
                                    <td>{finishedCase.uslOk}</td>
                                    <td>{finishedCase.sPolis ? finishedCase.sPolis : '-'}</td>
                                    <td>{finishedCase.nPolis}</td>
                                    <td>{finishedCase.sumv}</td>
                                    <td>{finishedCase.sump ? finishedCase.sump : '-'}</td>
                                    <td>{finishedCase.smoSump ? finishedCase.smoSump : '-'}</td>
                                </tr>
                            ))
                        ) : (
                            <tr className='noneHover'>
                                <td colSpan={11}>
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