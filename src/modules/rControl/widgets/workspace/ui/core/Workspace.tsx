import { CompletedCasesTableRoot } from "./CompletedCasesTable/CompletedCasesTableRoot/CompletedCasesTableRoot";
import { InvoicesTableRoot } from "./InvoicesTable/InvoicesTableRoot/InvoicesTableRoot";
import { MedicalCasesSection } from "./MedicalCases/MedicalCasesSection/MedicalCasesSection";
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
