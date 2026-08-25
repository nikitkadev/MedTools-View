import { CompletedCasesTableRoot } from "./CompletedCasesTable/CompletedCasesTableRoot/CompletedCasesTableRoot";
import { MedicalCasesSection } from "./MedicalCases/MedicalCasesSection/MedicalCasesSection";
import { InvoicesTableRoot } from "./InvoicesTable/InvoicesTableRoot/InvoicesTableRoot";
import styles from "./styles.module.scss";

export const Workspace = () => {
  return (
    <section className={styles.workspaceRoot}>
      <InvoicesTableRoot />
      <CompletedCasesTableRoot />
      <MedicalCasesSection />
    </section>
  );
};
