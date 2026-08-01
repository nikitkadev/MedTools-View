import dayjs from 'dayjs';
import { useDefectsCategory } from '../../../../../modules/r-control/hooks/categories/useDefectsCategory';
import { useDefectsCategoryStore } from '../../../../../modules/r-control/stores/categories/useDefectsCategoryStore';
import { CategoryLineHeader } from '../../../../ui/CategoryLineHeader/CategoryLineHeader';
import { EmptyDataField } from '../../../../ui/EmptyDataField/EmptyDataField';
import styles from './styles.module.scss';

const Defects = () => {

    useDefectsCategory();

    const { defects, sanks } = useDefectsCategoryStore();

    return (
        <section className={styles.defectsRoot}>

            <article className={styles.lineContainer}>

                <header className={styles.lineContainerHeader}>
                    <CategoryLineHeader
                        number={1}
                        title='Дефекты и санкции'
                        description='Основная информация категории' />
                </header>

                <section className={styles.categoryLine}>

                    <article className={styles.defectsTableRoot}>

                        <header className={styles.defectsTableRootHeader}>
                            <h1>Дефекты</h1>
                        </header>

                        <div className='tableContainer'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Код</th>
                                        <th>Комментарий</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {defects.length > 0 ? (
                                        defects.map((defect) => (
                                            <tr>
                                                <td>{defect.code ?? '-'}</td>
                                                <td>{defect.comment}</td>
                                            </tr>
                                        ))

                                    ) : (
                                        <tr>
                                            <td colSpan={2}>
                                                <EmptyDataField />
                                            </td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                        </div>

                    </article>

                </section>

                <section className={styles.categoryLine}>

                    <article className={styles.sanksTableRoot}>

                        <header className={styles.sanksTableRootHeader}>
                            <h1>Санкции</h1>
                        </header>

                        <div className='tableContainer'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Сумма</th>
                                        <th>Количество</th>
                                        <th>Тип санкции</th>
                                        <th>Код отказа</th>
                                        <th>Номер акта</th>
                                        <th>Дата акта</th>
                                        <th>Комментарий</th>
                                        <th>Имя файла</th>
                                        <th>Год</th>
                                        <th>Месяц</th>
                                        <th>Дата выгрузки</th>
                                        <th>Код врача</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {sanks.length > 0 ? (
                                        sanks.map((sank) => (
                                            <tr>
                                                <td>{sank.uid}</td>
                                                <td>{sank.sSum}</td>
                                                <td>{sank.sEdCol}</td>
                                                <td>{sank.sTip}</td>
                                                <td>{sank.sOsn}</td>
                                                <td>{sank.numAct}</td>
                                                <td>{dayjs(sank.dateAct).format('DD.MM.YYYY')}</td>
                                                <td>{sank.sCom ?? '-'}</td>
                                                <td>{sank.filename ?? '-'}</td>
                                                <td>{sank.year ?? '-'}</td>
                                                <td>{sank.month ?? '-'}</td>
                                                <td>{sank.uploaddate ? dayjs(sank.uploaddate).format('DD.MM.YYYY') : '-'}</td>
                                                <td>{sank.codeExp ?? '-'}</td>
                                            </tr>

                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={12}>
                                                <EmptyDataField />
                                            </td>
                                        </tr>
                                    )}

                                </tbody>

                            </table>
                        </div>
                    </article>
                </section>
            </article>
        </section>
    )
};

export default Defects;