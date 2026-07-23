import { InvoicesTable } from './InvoicesTable/InvoicesTable';
import { InvoiceSummary } from './InvoiceSummary/InvoiceSummary';
import styles from './styles.module.scss';

export const InvoicesSection = () => {
    return (
        <section className={styles.invoicesSectionRoot}>
            <InvoicesTable />
            <InvoiceSummary />
        </section>
    )
}