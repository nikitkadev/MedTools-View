import { DefectsRoot } from "./defects/DefectsRoot/DefectsRoot";
import { MedicalSanctionsSection } from "./medicalSanctions/MedicalSanctionsSection/MedicalSanctionsSection";
import styles from "./styles.module.scss";

const DefectsCategoryRoot = () => {
  return (
    <section className={styles.defectsRoot}>
      <DefectsRoot />
      <MedicalSanctionsSection />
    </section>
  );
};

export default DefectsCategoryRoot;
