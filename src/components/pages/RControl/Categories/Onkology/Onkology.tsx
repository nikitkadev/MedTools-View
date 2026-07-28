import { Divider } from '../../../../ui/Divider/Divider';
import styles from './styles.module.scss';

const Onkology = () => {
    return (
        <section className={styles.onkologyRoot}>

            <div className={styles.line1}>

                <article className={styles.onkSluchCard}>

                    <header className={styles.cardHeader}>
                        <h2>Сводная информация</h2>
                    </header>

                    <Divider />

                    <div className={styles.subcategory}>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Повод обращения</label>
                                <p>-</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Стадия заболевания</label>
                                <p>-</p>
                            </div>
                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Tumor</label>
                                <p>-</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Nodus</label>
                                <p>-</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Metastasis</label>
                                <p>-</p>
                            </div>
                        </div>

                        <div className={styles.cardLineOneRow}>
                            <div className={styles.cardField}>
                                <label>Признак выявления отдаленных метастазов</label>
                                <p>-</p>
                            </div>
                        </div>
                    </div>

                </article>

                <article className={styles.onkSluchTableRoot}>

                    <header className={styles.onkSluchTableRootHeader}>
                        <h1>Онкологические случаи</h1>
                    </header>

                    <div className='tableContainer'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Дата взятия материала</th>
                                    <th>Тип диаг. показателя</th>
                                    <th>Код диаг. показателя</th>
                                    <th>Код результата диагностики</th>
                                    <th>Признак получения рез. диаг.</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Дата взятия материала</td>
                                    <td>Тип диаг. показателя</td>
                                    <td>Код диаг. показателя</td>
                                    <td>Код результата диагностики</td>
                                    <td>Признак получения рез. диаг.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </article>

            </div>

            <div className={styles.line2}>

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
                                <tr>
                                    <td>Тип услуги</td>
                                    <td>Тип хир. лечения</td>
                                    <td>Линия лек. терапии</td>
                                    <td>Профиль тошноты</td>
                                    <td>Тип лучевой терапии</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </article>

                <article className={styles.bProtsTableRoot}>

                    <header className={styles.bProtsTableRootHeader}>
                        <h1>Сведения об имеющихся противопоказаниях и отказах</h1>
                    </header>

                    <div className='tableContainer'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Код противопоказания / отказа</th>
                                    <th>Дата рег. противопоказания / отказа</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Код противопоказания / отказа</td>
                                    <td>Дата рег. противопоказания / отказа</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </article>
            </div>

            <div className={styles.line3}>

                <article className={styles.lekPrTableRoot}>
                    <header className={styles.lekPrTableRootHeader}>
                        <h1>Сведения о введенном противоопухолевом лекарственном препарате</h1>
                    </header>

                    <div className='tableContainer'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Регистрационный номер лекарственного препарата</th>
                                    <th>Схема лекарственной терапии</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Регистрационный номер лекарственного препарата</td>
                                    <td>Схема лекарственной терапии</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </article>

            </div>

            <div className={styles.line4}>

                <article className={styles.injDateTableRoot}>
                    <header className={styles.injDateTableRootHeader}>
                        <h1>Даты введения лекарственного препарата</h1>
                    </header>

                    <div className='tableContainer'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Дата введения лекарственного препарата</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Дата введения лекарственного препарата</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </article>

            </div>

            <div className={styles.line5}>

                <article className={styles.injTableRoot}>

                    <header className={styles.injTableRootHeader}>
                        <h1>Сведения о введениях противоопухолевого лекарственного препарата</h1>
                    </header>

                    <div className='tableContainer'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Дата инъекции</th>
                                    <th>Количество введенного л. п.</th>
                                    <th>Количество израсходованного л. п.</th>
                                    <th>Фактическая стоимость л.п.</th>
                                    <th>Стоимость введенного л. п.</th>
                                    <th>Стоимость израсходованного л. п.</th>
                                    <th>Признак применения редукции</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Дата инъекции</td>
                                    <td>Количество введенного л. п.</td>
                                    <td>Количество израсходованного л. п.</td>
                                    <td>Фактическая стоимость л.п.</td>
                                    <td>Стоимость введенного л. п.</td>
                                    <td>Стоимость израсходованного л. п.</td>
                                    <td>Признак применения редукции</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </article>

            </div>

        </section>
    )
};

export default Onkology;