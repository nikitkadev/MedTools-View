import { CompletedCasesTableRoot } from "./CompletedCasesTable/CompletedCasesTableRoot/CompletedCasesTableRoot";
import { MedicalCasesTableRoot } from "./MedicalCasesTable/MedicalCasesTableRoot/MedicalCasesTableRoot";
import { InvoicesTableRoot } from "./InvoicesTable/InvoicesTableRoot/InvoicesTableRoot";
import styles from "./styles.module.scss";

export const Workspace = () => {
  return (
    <section className={styles.workspaceRoot}>
      <InvoicesTableRoot />
      <CompletedCasesTableRoot />
      <MedicalCasesTableRoot />
    </section>
  );
};
