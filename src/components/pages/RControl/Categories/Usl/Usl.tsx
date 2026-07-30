import { useProvidedServicesCategoryStore } from '../../../../../modules/r-control/stores/categories/useProvidedServicesCategoryStore';
import { useProvidedServicesCategory } from '../../../../../modules/r-control/hooks/categories/useProvidedServicesCategory';
import { CategoryLineHeader } from '../../../../ui/CategoryLineHeader/CategoryLineHeader';
import { EmptyDataField } from '../../../../ui/EmptyDataField/EmptyDataField';
import { Divider } from '../../../../ui/Divider/Divider';

import styles from './styles.module.scss';
import dayjs from 'dayjs';

const Usl = () => {

    useProvidedServicesCategory();

    const { services, medDevs } = useProvidedServicesCategoryStore();

    return (
        <section className={styles.uslRoot}>

            <article className={styles.lineContainer}>

                <header className={styles.lineContainerHeader}>
                    <CategoryLineHeader
                        number={1}
                        title='Услуги'
                        description='Подробная информация об оказанных паценту услугах' />
                </header>

                <div className={styles.categoryLine}>

                    <article className={styles.uslTableRoot}>

                        <header className={styles.uslTableRootHeader}>
                            <h1>Услуги</h1>
                        </header>

                        <div className='tableContainer'>
                            <table>

                                <thead>
                                    <tr>
                                        <th>Услуга</th>
                                        <th>Вид мед. вмешательства</th>
                                        <th>Профиль</th>
                                        <th>Специальность</th>
                                        <th>Признак "Детский"</th>
                                        <th>Дата с</th>
                                        <th>Дата по</th>
                                        <th>Диагноз</th>
                                        <th>Количество</th>
                                        <th>Тариф</th>
                                        <th>Сумма</th>
                                        <th>Комментарий</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {services.length > 0 ? (
                                        services.map((service) => (
                                            <tr>
                                                <td>{service.codeUsl}</td>
                                                <td>{service.vidVme ?? '-'}</td>
                                                <td>{service.profil}</td>
                                                <td>{service.prvs}</td>
                                                <td>{service.det}</td>
                                                <td>{dayjs(service.dateIn).format('DD.MM.YYYY')}</td>
                                                <td>{dayjs(service.dateOut).format('DD.MM.YYYY')}</td>
                                                <td>{service.ds}</td>
                                                <td>{service.kolUsl}</td>
                                                <td>{service.tarif ?? '-'}</td>
                                                <td>{service.sumvUsl}</td>
                                                <td>{service.comentu ?? '-'}</td>
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

                </div>
            </article>

            <Divider />

            <article className={styles.lineContainer}>

                <header className={styles.lineContainerHeader}>
                    <CategoryLineHeader
                        number={2}
                        title='Медицинские изделия'
                        description='Подробная информация об оказанных паценту услугах' />
                </header>

                <div className={styles.categoryLine}>

                    <article className={styles.medDevTableRoot}>

                        <header className={styles.medDevTableRootHeader}>
                            <h1>Изделия</h1>
                        </header>

                        <div className='tableContainer'>
                            <table>
                                
                                <thead>
                                    <tr>
                                        <th>Дата установки</th>
                                        <th>Код вида</th>
                                        <th>Серийный номер / маркировочный код</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {medDevs.length > 0 ? (
                                        medDevs.map((medDev) => (
                                            <tr className='noneHover'>
                                                <td>{dayjs(medDev.medDate).format('DD.MM.YYYY')}</td>
                                                <td>{medDev.codeMedDev}</td>
                                                <td>{medDev.seriesNumber}</td>
                                            </tr>
                                        ))

                                    ) : (
                                        <tr className='noneHover'>
                                            <td colSpan={3}>
                                                <EmptyDataField />
                                            </td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </article>
                </div>
            </article>


        </section>
    )
};

export default Usl;