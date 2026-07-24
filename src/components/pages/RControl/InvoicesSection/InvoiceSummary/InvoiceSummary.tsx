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
                        <div className={styles.cardSection}>
                            <div className={styles.item}>
                                <label>Предъявлено</label>
                                <p>{invoiceSummary.summav} ₽</p>
                            </div>

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

                        <div className={styles.cardSection}>
                            <div className={styles.item}>
                                <label>Снято МЭК ТФОМС</label>
                                <p>{invoiceSummary.sankMek} ₽</p>
                            </div>

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

                        <div className={styles.cardSection}>
                            <div className={styles.item}>
                                <label>Снято МЭК СМО</label>
                                <p>{invoiceSummary.smoSankMek} ₽</p>
                            </div>

                            <div className={styles.item}>
                                <label>Снято МЭЭ СМО</label>
                                <p>{invoiceSummary.smoSankMee} ₽</p>
                            </div>

                            <div className={styles.item}>
                                <label>Снято ЭКМР СМО</label>
                                <p>{invoiceSummary.smoSankEkmp} ₽</p>
                            </div>
                        </div>

                        <Divider />

                        <div className={styles.cardSection}>
                            <div className={styles.item}>
                                <label>Имя файла</label>
                                <p>{invoiceSummary.filename}</p>
                            </div>

                            <div className={styles.item}>
                                <label>UID счета</label>
                                <p>{invoiceSummary.schetUid}</p>
                            </div>

                            <div className={styles.item}>
                                <label>Дата загрузки</label>
                                <p>{dayjs(invoiceSummary.uploadDate).format("DD.MM.YYYY")}</p>
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