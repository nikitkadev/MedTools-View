import { useOnkologyCategory } from '../../../../../modules/r-control/hooks/categories/useOnkologyCategory';
import { useOnkologyCategoryStore } from '../../../../../modules/r-control/stores/categories/useOncologyCategoryStore';
import { CategoryLineHeader } from '../../../../ui/CategoryLineHeader/CategoryLineHeader';
import { Divider } from '../../../../ui/Divider/Divider';
import { EmptyDataField } from '../../../../ui/EmptyDataField/EmptyDataField';
import dayjs from 'dayjs';

import styles from './styles.module.scss';

const Onkology = () => {

    useOnkologyCategory();

    const {
        oncSluch,
        consultations,
        services,
        contraindications,
        medicaments,
        diags } = useOnkologyCategoryStore();

    return (
        <section className={styles.onkologyRoot}>

            <article className={styles.lineContainer}>

                <header className={styles.lineContainerHeader}>
                    <CategoryLineHeader
                        number={1}
                        title='Консилиум и онкологический случай'
                        description='Основная информация категории.' />
                </header>

                <section className={styles.categoryLine}>

                    <article className={styles.onkSluchCard}>

                        <header className={styles.cardHeader}>
                            <h2>Онкологический случай</h2>
                        </header>

                        <Divider />

                        {oncSluch ? (
                            <div className={styles.subcategory}>

                                <div className={styles.cardLine}>
                                    <div className={styles.cardField}>
                                        <label>Повод обращения</label>
                                        <p>{oncSluch.ds1T ?? '-'}</p>
                                    </div>
                                    <div className={styles.cardField}>
                                        <label>Стадия заболевания</label>
                                        <p>{oncSluch.stad ?? '-'}</p>
                                    </div>
                                </div>

                                <div className={styles.cardLine}>
                                    <div className={styles.cardField}>
                                        <label>Tumor</label>
                                        <p>{oncSluch.onkT ?? '-'}</p>
                                    </div>
                                    <div className={styles.cardField}>
                                        <label>Nodus</label>
                                        <p>{oncSluch.onkN ?? '-'}</p>
                                    </div>
                                    <div className={styles.cardField}>
                                        <label>Metastasis</label>
                                        <p>{oncSluch.onkM ?? '-'}</p>
                                    </div>
                                </div>

                                <div className={styles.cardLineOneRow}>
                                    <div className={styles.cardField}>
                                        <label>Признак выявления отдаленных метастазов</label>
                                        <p>{oncSluch.mtstz ?? '-'}</p>
                                    </div>
                                </div>

                                <div className={styles.cardLineOneRow}>
                                    <div className={styles.cardField}>
                                        <label>Суммарная очаговая доза</label>
                                        <p>{oncSluch.sod ?? '-'}</p>
                                    </div>
                                </div>

                                <div className={styles.cardLineOneRow}>
                                    <div className={styles.cardField}>
                                        <label>Количество фракций проведения лучевой терапии</label>
                                        <p>{oncSluch.kFr ?? '-'}</p>
                                    </div>
                                </div>

                                <div className={styles.cardLine}>
                                    <div className={styles.cardField}>
                                        <label>Масса тела (кг)</label>
                                        <p>{oncSluch.wei ?? '-'}</p>
                                    </div>
                                    <div className={styles.cardField}>
                                        <label>Рост (см)</label>
                                        <p>{oncSluch.hei ?? '-'}</p>
                                    </div>
                                    <div className={styles.cardField}>
                                        <label>Площадь тела</label>
                                        <p>{oncSluch.bsa ?? '-'}</p>
                                    </div>
                                </div>

                            </div>
                        ) : (
                            <EmptyDataField text='Отсутствуют данные по онкологическому случаю' />
                        )}



                    </article>

                    <article className={styles.consTableRoot}>

                        <header className={styles.consTableRootHeader}>
                            <h1>Консилиум</h1>
                        </header>

                        <div className='tableContainer'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Дата проведения</th>
                                        <th>Комментарий</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {consultations.length > 0 ? (

                                        consultations.map((consultation) => (
                                            <tr className='noneHover'>
                                                <td>{consultation.dtCons ? dayjs(consultation.dtCons).format("DD.MM.YYYY") : '-'}</td>
                                                <td>{consultation.prCons}</td>
                                            </tr>
                                        ))

                                    ) : (
                                        <tr className='noneHover'>
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

            </article>

            <Divider />

            <article className={styles.lineContainer}>

                <header className={styles.lineContainerHeader}>
                    <CategoryLineHeader
                        number={2}
                        title='Информация по онкологическому случаю'
                        description='Блок содержит информацию о противопоказаниях, диагностический блок и окнологические услуги. Доступен выбор онкологической услуги.' />
                </header>

                <div className={styles.categoryLine}>

                    <article className={styles.bProtsTableRoot}>

                        <header className={styles.bProtsTableRootHeader}>
                            <h1>Противопоказания</h1>
                        </header>

                        <div className='tableContainer'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Код</th>
                                        <th>Дата регистрации</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {(contraindications.length > 0) ? (

                                        contraindications.map((contraindication) => (
                                            <tr className='noneHover'>
                                                <td>{contraindication.prot}</td>
                                                <td>{dayjs(contraindication.dProt).format("DD.MM.YYYY")}</td>
                                            </tr>
                                        ))

                                    ) : (
                                        <tr className='noneHover'>
                                            <td colSpan={2}>
                                                <EmptyDataField />
                                            </td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </article>

                    <article className={styles.onkSluchTableRoot}>

                        <header className={styles.onkSluchTableRootHeader}>
                            <h1>Диагностика</h1>
                        </header>

                        <div className='tableContainer'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Дата взятия материала</th>
                                        <th>Тип д. п.</th>
                                        <th>Код д. п.</th>
                                        <th>Код результата диагностики</th>
                                        <th>Результат диагностики</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(diags.length > 0) ? (

                                        diags.map((diag) => (
                                            <tr className='noneHover'>
                                                <td>{diag.diagDate ? dayjs(diag.diagDate).format("DD.MM.YYYY") : '-'}</td>
                                                <td>{diag.diagTip ?? '-'}</td>
                                                <td>{diag.diagCode ?? '-'}</td>
                                                <td>{diag.diagRslt ?? '-'}</td>
                                                <td>{diag.recRslt ?? '-'}</td>
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
                </div>

                <div className={styles.categoryLine}>

                    <article className={styles.onkUslTableRoot}>

                        <header className={styles.onkUslTableRootHeader}>
                            <h1>Онкологические услуги</h1>
                        </header>

                        <div className='tableContainer'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Тип услуги</th>
                                        <th>Тип хир. лечения</th>
                                        <th>Линия лек. терапии</th>
                                        <th>Профиль тошноты</th>
                                        <th>Тип лучевой терапии</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {(services.length > 0) ? (

                                        services.map((service) => (
                                            <tr>
                                                <td>{service.uslTip}</td>
                                                <td>{service.hirTip ?? '-'}</td>
                                                <td>{service.lekTipL ?? '-'}</td>
                                                <td>{service.pptR ?? '-'}</td>
                                                <td>{service.luchTip ?? '-'}</td>
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


                </div>

            </article>

            <Divider />

            <article className={styles.lineContainer}>

                <header className={styles.lineContainerHeader}>
                    <CategoryLineHeader
                        number={3}
                        title='Лекарственный препарат'
                        description='Блок содержит подробную информацию о лекарственном препарате' />
                </header>

                <div className={styles.categoryLine}>

                    <article className={styles.lekPrTableRoot}>
                        <header className={styles.lekPrTableRootHeader}>
                            <h1>Сведения о лекарственном препарате</h1>
                        </header>

                        <div className='tableContainer'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Регистрационный номер</th>
                                        <th>Схема лекарственной терапии</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {medicaments.length > 0 ? (
                                        medicaments.map((medicament) => (
                                            <tr>
                                                <td>{medicament.regnum}</td>
                                                <td>{medicament.codeSh ?? '-'}</td>
                                            </tr>
                                        ))

                                    ) : (
                                        <tr className='noneHover'>
                                            <td colSpan={2}>
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
                        number={4}
                        title='Инъекции'
                        description='Блок содержит подробную информацию о реализованных инъекциях' />
                </header>

                <div className={styles.categoryLine}>

                    <article className={styles.injDateTableRoot}>
                        <header className={styles.injDateTableRootHeader}>
                            <h1>Даты введения</h1>
                        </header>

                        <div className='tableContainer'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Дата введения</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Дата введения</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </article>

                    <article className={styles.injTableRoot}>

                        <header className={styles.injTableRootHeader}>
                            <h1>Сведения о введениях</h1>
                        </header>

                        <div className='tableContainer'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Дата инъекции</th>
                                        <th>Количество в. л. п.</th>
                                        <th>Количество и. л. п.</th>
                                        <th>Факт. стоимость л.п.</th>
                                        <th>Стоимость в. л. п.</th>
                                        <th>Стоимость и. л. п.</th>
                                        <th>Признак редукции</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Дата инъекции</td>
                                        <td>Количество в. л. п.</td>
                                        <td>Количество и. л. п.</td>
                                        <td>Факт. стоимость л.п.</td>
                                        <td>Стоимость в. л. п.</td>
                                        <td>Стоимость и. л. п.</td>
                                        <td>Признак редукции</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </article>
                </div>
            </article>

        </section>
    )
};

export default Onkology;