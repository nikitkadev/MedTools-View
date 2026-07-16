import { InvoicesTable } from './InvoicesTable/InvoicesTable';
import styles from './styles.module.scss';

export const InvoicesSection = () => {
    return (
        <section className={styles.invoicesSectionRoot}>
            <InvoicesTable />
            <InvoicesTable />
        </section>
    )
}