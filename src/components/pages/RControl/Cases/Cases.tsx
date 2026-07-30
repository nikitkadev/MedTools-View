import { useCases } from '../../../../modules/r-control/hooks/main/useCases';
import { useCasesStore } from '../../../../modules/r-control/stores/tables/useCasesStore';
import { EmptyDataField } from '../../../ui/EmptyDataField/EmptyDataField';
import styles from './styles.module.scss';
import dayjs from 'dayjs';

export const Cases = () => {

    useCases();

    const {
        cases,
        setSelectedRecordUid
    } = useCasesStore();

    return (
        <article className={styles.casesTableRoot}>
            
            <header className={styles.casesTableRootHeader}>
                <h1>Случаи</h1>
            </header>

            <div className="tableContainer">
                <table className={styles.finishedCasesTable}>

                    <thead>

                        <tr>
                            <th>Uid</th>
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

                        {cases.length > 0 ? (

                            cases.map((generalCase) => (
                                <tr
                                    onClick={() => setSelectedRecordUid(generalCase.uid)}>
                                    <td>{generalCase.uid}</td>
                                    <td>{generalCase.profil ? generalCase.profil : ''}</td>
                                    <td>{generalCase.det}</td>
                                    <td>{generalCase.prvs}</td>
                                    <td>{dayjs(generalCase.startingAt).format("DD.MM.YYYY")}</td>
                                    <td>{dayjs(generalCase.endingAt).format("DD.MM.YYYY")}</td>
                                    <td>{generalCase.ds1}</td>
                                    <td>{generalCase.edCol ? generalCase.edCol : ''}</td>
                                    <td>{generalCase.tarif}</td>
                                    <td>{generalCase.sumM}</td>
                                    <td>{generalCase.sump ? generalCase.sump : ''}</td>
                                    <td>{generalCase.smoSump ? generalCase.smoSump : ''}</td>
                                </tr>
                            ))
                        ) : (
                            <tr className='noneHover'>
                                <td colSpan={12}>
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