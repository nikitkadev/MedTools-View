import { Divider } from '../../../../ui/Divider/Divider';
import { useCasesCategoryStore } from '../../../../../modules/r-control/stores/categories/useCasesCategoryStore';
import dayjs from 'dayjs';
import styles from './styles.module.scss';

const Cases = () => {

    const { caseCategory, finishedCaseCategory } = useCasesCategoryStore();

    if (!caseCategory || !finishedCaseCategory) {
        return;
    }

    return (
        <section className={styles.casesRoot}>

            <div className={styles.cardsGrid}>

                <article className={styles.сaseCard}>

                    <header className={styles.cardHeader}>
                        <h2>Законченный случай</h2>
                    </header>

                    <Divider />

                    <div className={styles.subcategory}>
                        <header className={styles.subcategoryHeader}>
                            <h3>Общая информация</h3>
                        </header>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Профиль</label>
                                <p>{caseCategory.profil}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Подразделение</label>
                                <p>{caseCategory.lpu1 ?? '-'}</p>
                            </div>
                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Отделение</label>
                                <p>{caseCategory.podr ?? '-'}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Специальность</label>
                                <p>{caseCategory.prvs}</p>
                            </div>
                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Признак "Детский"</label>
                                <p>{caseCategory.det}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Цель посещения</label>
                                <p>{caseCategory.pCel ?? '-'}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Профиль койки</label>
                                <p>{caseCategory.profilK ?? '-'}</p>
                            </div>
                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Номер истории</label>
                                <p>{caseCategory.nHistory}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Поступление / перевод</label>
                                <p>{caseCategory.pPer ?? '-'}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Признак реабилитации</label>
                                <p>{caseCategory.reab ?? '-'}</p>
                            </div>
                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Лечение с</label>
                                <p>{dayjs(caseCategory.date1).format('DD.MM.YYYY')}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Лечение по</label>
                                <p>{dayjs(caseCategory.date2).format('DD.MM.YYYY')}</p>
                            </div>
                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Количество</label>
                                <p>{caseCategory.pCel ?? '-'}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Койко- / пациенто- дни</label>
                                <p>{caseCategory.kd ?? '-'}</p>
                            </div>
                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Уровень ЛПУ</label>
                                <p>{caseCategory.lpuLevel ?? '-'}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>МКБ первоначальный</label>
                                <p>{caseCategory.ds0 ?? '-'}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Подозрение на ЗНО</label>
                                <p>{caseCategory.dsOnk ?? '-'}</p>
                            </div>
                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>ID врача</label>
                                <p>{caseCategory.iddokt}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Масса тела (кг)</label>
                                <p>{caseCategory.wei ?? '-'}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>МКБ основное</label>
                                <p>{caseCategory.ds1}</p>
                            </div>
                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Характер основного заболевания</label>
                                <p>{caseCategory.cZab ?? '-'}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Комментарий</label>
                                <p>{caseCategory.comentsl ?? '-'}</p>
                            </div>
                        </div>

                    </div>

                </article>

                <article className={styles.finishedCaseCard}>

                    <header className={styles.cardHeader}>
                        <h2>Законченный случай</h2>
                    </header>

                    <Divider />

                    <div className={styles.subcategory}>

                        <header className={styles.subcategoryHeader}>
                            <h3>Общая информация</h3>
                        </header>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>ЛПУ</label>
                                <p>{finishedCaseCategory.lpu}</p>
                            </div>
                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Направивишая МО</label>
                                <p>{finishedCaseCategory.nprMo ?? '-'}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Дата направления</label>
                                <p>{finishedCaseCategory.nprDate ? dayjs(finishedCaseCategory.nprDate).format('DD.MM.YYYY') : '-'}</p>
                            </div>
                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Условия оказания мед. помощи</label>
                                <p>{finishedCaseCategory.uslOk}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Вид мед. помощи</label>
                                <p>{finishedCaseCategory.vidPom}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Форма мед. помощи</label>
                                <p>{finishedCaseCategory.forPom}</p>
                            </div>
                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Способы оплаты</label>
                                <p>{finishedCaseCategory.idsp}</p>
                            </div>
                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Лечение с</label>
                                <p>{dayjs(finishedCaseCategory.dateZ1).format('DD.MM.YYYY')}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Лечение по</label>
                                <p>{dayjs(finishedCaseCategory.dateZ2).format('DD.MM.YYYY')}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Койко- / пациенто- дни</label>
                                <p>{finishedCaseCategory.kdZ ?? '-'}</p>
                            </div>
                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Результат</label>
                                <p>{finishedCaseCategory.rslt}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Результат (дисп / мед)</label>
                                <p>{finishedCaseCategory.rsltD ?? '-'}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Признак внутрибольничного перевода</label>
                                <p>{finishedCaseCategory.vbP ?? '-'}</p>
                            </div>
                        </div>

                        <div className={styles.cardLine}>
                            <div className={styles.cardField}>
                                <label>Признак отказа (дисп / мед)</label>
                                <p>{finishedCaseCategory.pOtk ?? '-'}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Признак мобильной бригады</label>
                                <p>{finishedCaseCategory.vbr ?? '-'}</p>
                            </div>
                            <div className={styles.cardField}>
                                <label>Исход</label>
                                <p>{finishedCaseCategory.ishod}</p>
                            </div>
                        </div>

                    </div>

                </article>

            </div>
        </section>
    )
};

export default Cases;