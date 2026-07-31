import dayjs from 'dayjs';
import { useNazNaprCategory } from '../../../../../modules/r-control/hooks/categories/useNazNaprCategory';
import { useNazNaprCategoryStore } from '../../../../../modules/r-control/stores/categories/useNazNaprCategoryStore';
import { CategoryLineHeader } from '../../../../ui/CategoryLineHeader/CategoryLineHeader';
import { EmptyDataField } from '../../../../ui/EmptyDataField/EmptyDataField';
import styles from './styles.module.scss';

const NazNapr = () => {

    useNazNaprCategory();

    const { directions, purposes } = useNazNaprCategoryStore();

    return (
        <section className={styles.nazNaprRoot}>
            <article className={styles.lineContainer}>

                <header className={styles.lineContainerHeader}>
                    <CategoryLineHeader
                        number={1}
                        title='Назначения и направления'
                        description='Основная информация категории' />
                </header>

                <section className={styles.categoryLine}>

                    <article className={styles.purposeTableRoot}>

                        <header className={styles.purposeTableRootHeader}>
                            <h1>Назначения</h1>
                        </header>

                        <div className='tableContainer'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Номер</th>
                                        <th>Вид назначения</th>
                                        <th>Метод диаг. исследования</th>
                                        <th>Мед. услуга в направление</th>
                                        <th>Дата направления</th>
                                        <th>В какую МО</th>
                                        <th>Профиль МП</th>
                                        <th>Профиль койки</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {purposes.length > 0 ? (
                                        purposes.map((purpose) => (
                                            <tr>
                                                <td>{purpose.nazN}</td>
                                                <td>{purpose.nazR}</td>
                                                <td>{purpose.nazV ?? '-'}</td>
                                                <td>{purpose.nazUsl ?? '-'}</td>
                                                <td>{purpose.naprDate ? dayjs(purpose.naprDate).format('DD.MM.YYYY') : '-'}</td>
                                                <td>{purpose.naprMo ?? '-'}</td>
                                                <td>{purpose.nazPmp ?? '-'}</td>
                                                <td>{purpose.nazPk ?? '-'}</td>
                                            </tr>
                                        ))

                                    ) : (
                                        <tr>
                                            <td colSpan={8}>
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

                    <article className={styles.directionTableRoot}>

                        <header className={styles.directionTableRootHeader}>
                            <h1>Направления</h1>
                        </header>

                        <div className='tableContainer'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Медицинская организация</th>
                                        <th>Дата направления</th>
                                        <th>Вид направления</th>
                                        <th>Метод диагностического лечения</th>
                                        <th>Мед. услуга в направлении</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {directions.length > 0 ? (
                                        directions.map((direction) => (
                                            <tr>
                                                <td>{direction.naprMo ?? '-'}</td>
                                                <td>{dayjs(direction.naprDate).format('DD.MM.YYYY')}</td>
                                                <td>{direction.naprV}</td>
                                                <td>{direction.metIssl ?? '-'}</td>
                                                <td>{direction.naprUsl ?? '-'}</td>
                                            </tr>
                                        ))

                                    ) : (
                                        <tr>
                                            <td colSpan={5}>
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

export default NazNapr;