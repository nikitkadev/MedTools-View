import { InvoicesTable } from "../InvoicesTable/InvoicesTable";
import styles from "./styles.module.scss";

export const Workspace = () => {
  return (
    <section className={styles.workspaceRoot}>
      <div className={styles.invoiceLine}>
        <InvoicesTable />
      </div>
    </section>
  );
};
