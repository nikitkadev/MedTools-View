import { useInvoicesStore } from '../../../../../modules/r-control/stores/tables/useInvoicesStore';
import { Divider } from '../../../../ui/Divider/Divider';
import { EmptyDataField } from '../../../../ui/EmptyDataField/EmptyDataField';
import styles from './styles.module.scss';
import dayjs from 'dayjs';

export const InvoiceSummary = () => {

    const { invoiceSummary } = useInvoicesStore();

    return (
        <section className={styles.invoiceSummaryRoot}>

            <header className={styles.invoiceSummaryHeader}>
                <h1>
                    Сводная информация по счету
                </h1>
            </header>



            <article className={styles.invoiceSummaryCard}>

                {invoiceSummary ? (
                    <>
                        <div className={styles.cardMainInformation}>
                            <header>
                                <h2>Основная информация</h2>
                            </header>

                            <div className={styles.cardLineGridOneRow}>
                                <div className={styles.item}>
                                    <label>Предъявлено</label>
                                    <p>{invoiceSummary.summav} ₽</p>
                                </div>

                            </div>

                            <div className={styles.cardLineGridTwoRow}>

                                <div className={styles.item}>
                                    <label>Принято ТФОМС</label>
                                    <p>{invoiceSummary.summap} ₽</p>
                                </div>

                                <div className={styles.item}>
                                    <label>Принято СМО</label>
                                    <p>{invoiceSummary.smoSummap} ₽</p>
                                </div>
                            </div>

                            <Divider />

                            <div className={styles.cardLineGridOneRow}>
                                <div className={styles.item}>
                                    <label>Снято МЭК ТФОМС</label>
                                    <p>{invoiceSummary.sankMek} ₽</p>
                                </div>

                            </div>

                            <div className={styles.cardLineGridTwoRow}>

                                <div className={styles.item}>
                                    <label>Снято МЭЭ ТФОМС</label>
                                    <p>{invoiceSummary.sankMee} ₽</p>
                                </div>

                                <div className={styles.item}>
                                    <label>Снято ЭКМР ТФОМС</label>
                                    <p>{invoiceSummary.sankEkmp} ₽</p>
                                </div>
                            </div>

                            <Divider />


                            <div className={styles.cardLineGridOneRow}>
                                <div className={styles.item}>
                                    <label>Снято МЭК СМО</label>
                                    <p>{invoiceSummary.smoSankMek} ₽</p>
                                </div>

                            </div>

                            <div className={styles.cardLineGridTwoRow}>

                                <div className={styles.item}>
                                    <label>Снято МЭЭ СМО</label>
                                    <p>{invoiceSummary.smoSankMee} ₽</p>
                                </div>

                                <div className={styles.item}>
                                    <label>Снято ЭКМР СМО</label>
                                    <p>{invoiceSummary.smoSankEkmp} ₽</p>
                                </div>
                            </div>

                        </div>

                        <Divider />

                        <div className={styles.cardServiceInformation}>
                            <header>
                                <h2>Служебная информация</h2>
                            </header>

                            <div className={styles.cardLineGridOneRow}>
                                <div className={styles.item}>
                                    <label>Имя файла</label>
                                    <p>{invoiceSummary.filename}</p>
                                </div>

                            </div>

                            <div className={styles.cardLineGridTwoRow}>

                                <div className={styles.item}>
                                    <label>UID счета</label>
                                    <p>{invoiceSummary.schetUid}</p>
                                </div>

                                <div className={styles.item}>
                                    <label>Дата загрузки</label>
                                    <p>{dayjs(invoiceSummary.uploadDate).format("DD.MM.YYYY")}</p>
                                </div>
                            </div>
                        </div>

                    </>
                ) : (
                    <EmptyDataField text='Информации по счету не найдено' />
                )}

            </article>

        </section>
    )
}