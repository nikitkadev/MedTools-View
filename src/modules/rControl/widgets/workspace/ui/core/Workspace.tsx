import { CompletedCasesTable } from "./CompletedCasesTable/CompletedCasesTable";
import { MedicalCasesTable } from "./MedicalCasesTable/MedicalCasesTable";
import { InvoicesTable } from "./InvoicesTable/InvoicesTable";
import styles from "./styles.module.scss";

export const Workspace = () => {
  return (
    <section className={styles.workspaceRoot}>
      <InvoicesTable />
      <CompletedCasesTable />
      <MedicalCasesTable />
    </section>
  );
};
