import { CompletedCasesTable } from "./CompletedCasesTable/CompletedCasesTable";
import { MedicalCasesTable } from "./MedicalCasesTable/MedicalCasesTable";
import { InvoicesTableRoot } from "./InvoicesTable/InvoicesTableRoot/InvoicesTableRoot";
import styles from "./styles.module.scss";

export const Workspace = () => {
  return (
    <section className={styles.workspaceRoot}>
      <InvoicesTableRoot />
      <CompletedCasesTable />
      <MedicalCasesTable />
    </section>
  );
};
