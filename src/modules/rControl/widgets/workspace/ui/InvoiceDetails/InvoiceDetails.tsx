import styles from './styles.module.scss';

export const InvoiceDetails = () => {
    return (
        <section className={styles.invoiceDetailsRoot}>
            <header className={styles.invoiceDetailsRootHeader}>
                <h1>Подробная информация о счете</h1>
            </header>
        </section>
    )
}