import { Divider } from '../../../../ui/Divider/Divider';
import styles from './styles.module.scss';

export const InvoiceSummary = () => {
    return (
        <section className={styles.invoiceSummaryRoot}>

            <header className={styles.invoiceSummaryHeader}>
                <h1>
                    Сводная информация по счету
                </h1>
            </header>


            <article className={styles.invoiceSummaryCard}>

                <div className={styles.cardSection}>
                    <div className={styles.item}>
                        <label>Предъявлено</label>
                        <p>219630.9 ₽</p>
                    </div>

                    <div className={styles.item}>
                        <label>Принято ТФОМС</label>
                        <p>219630.9 ₽</p>
                    </div>

                    <div className={styles.item}>
                        <label>Принято СМО</label>
                        <p>219630.9 ₽</p>
                    </div>
                </div>

                <Divider />

                <div className={styles.cardSection}>
                    <div className={styles.item}>
                        <label>Снято МЭК ТФОМС</label>
                        <p>0 ₽</p>
                    </div>

                    <div className={styles.item}>
                        <label>Снято МЭЭ ТФОМС</label>
                        <p>0 ₽</p>
                    </div>

                    <div className={styles.item}>
                        <label>Снято ЭКМР ТФОМС</label>
                        <p>0 ₽</p>
                    </div>
                </div>

                <Divider />

                <div className={styles.cardSection}>
                    <div className={styles.item}>
                        <label>Снято МЭК СМО</label>
                        <p>0 ₽</p>
                    </div>

                    <div className={styles.item}>
                        <label>Снято МЭЭ СМО</label>
                        <p>0 ₽</p>
                    </div>

                    <div className={styles.item}>
                        <label>Снято ЭКМР СМО</label>
                        <p>0 ₽</p>
                    </div>
                </div>

                <Divider />

                <div className={styles.cardSection}>
                    <div className={styles.item}>
                        <label>Имя файла</label>
                        <p>HM190001S19001_26060255</p>
                    </div>

                    <div className={styles.item}>
                        <label>UID счета</label>
                        <p>2681</p>
                    </div>

                    <div className={styles.item}>
                        <label>Дата загрузки</label>
                        <p>07.07.2026 09:49:00</p>
                    </div>
                </div>

            </article>

        </section>
    )
}