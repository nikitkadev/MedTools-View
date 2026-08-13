import { CompletedCasesTable } from "../CompletedCasesTable/CompletedCasesTable";
import { InvoicesTable } from "../InvoicesTable/InvoicesTable";
import styles from "./styles.module.scss";

export const Workspace = () => {
  return (
    <section className={styles.workspaceRoot}>
      <InvoicesTable />
      <CompletedCasesTable />
    </section>
  );
};
