import { useInvoicesStore } from '../../../../../modules/r-control/stores/tables/useInvoicesStore';
import { Divider } from '../../../../ui/Divider/Divider';
import { EmptyDataField } from '../../../../ui/EmptyDataField/EmptyDataField';
import styles from './styles.module.scss';
import dayjs from 'dayjs';

export const InvoiceSummary = () => {

    const { invoiceSummary } = useInvoicesStore();

    return (
        <section className={styles.invoiceSummaryRoot}>

            <article className={styles.invoiceSummaryCard}>

                <header className={styles.cardHeader}>
                    <h2>Сводная информация по счету</h2>
                </header>

                <Divider />

                <div className={styles.subcategory}>
                    {invoiceSummary ? (
                        <>
                            <div className={styles.cardLineThreeRow}>
                                <div className={styles.cardField}>
                                    <label>Предъявлено</label>
                                    <p>{invoiceSummary.summav} ₽</p>
                                </div>

                                <div className={styles.cardField}>
                                    <label>Принято ТФОМС</label>
                                    <p>{invoiceSummary.summap} ₽</p>
                                </div>

                                <div className={styles.cardField}>
                                    <label>Принято СМО</label>
                                    <p>{invoiceSummary.smoSummap} ₽</p>
                                </div>

                            </div>

                            <div className={styles.cardLineThreeRow}>

                                <div className={styles.cardField}>
                                    <label>Снято МЭК ТФОМС</label>
                                    <p>{invoiceSummary.sankMek} ₽</p>
                                </div>

                                <div className={styles.cardField}>
                                    <label>Снято МЭЭ ТФОМС</label>
                                    <p>{invoiceSummary.sankMee} ₽</p>
                                </div>

                                <div className={styles.cardField}>
                                    <label>Снято ЭКМР ТФОМС</label>
                                    <p>{invoiceSummary.sankEkmp} ₽</p>
                                </div>

                            </div>


                            <div className={styles.cardLineThreeRow}>

                                <div className={styles.cardField}>
                                    <label>Снято МЭК СМО</label>
                                    <p>{invoiceSummary.smoSankMek} ₽</p>
                                </div>

                                <div className={styles.cardField}>
                                    <label>Снято МЭЭ СМО</label>
                                    <p>{invoiceSummary.smoSankMee} ₽</p>
                                </div>

                                <div className={styles.cardField}>
                                    <label>Снято ЭКМР СМО</label>
                                    <p>{invoiceSummary.smoSankEkmp} ₽</p>
                                </div>

                            </div>

                            <Divider />

                            <div className={styles.cardLineOneRow}>
                                <div className={styles.cardField}>
                                    <label>Имя файла</label>
                                    <p>{invoiceSummary.filename}</p>
                                </div>

                            </div>

                            <div className={styles.cardLineThreeRow}>

                                <div className={styles.cardField}>
                                    <label>UID счета</label>
                                    <p>{invoiceSummary.schetUid}</p>
                                </div>

                                <div className={styles.cardField}>
                                    <label>Дата загрузки</label>
                                    <p>{dayjs(invoiceSummary.uploadDate).format("DD.MM.YYYY")}</p>
                                </div>
                            </div>

                        </>
                    ) : (
                        <EmptyDataField text='Информации по счету не найдено' />
                    )}
                </div>
            </article>
        </section>
    )
}