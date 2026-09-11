import type { PrescriptionFiltersSubgroupDraft } from "../../../../../model/types/FiltersDraft";
import styles from "../styles.module.scss";

interface PrescriptionFiltersSubgroupProps {
  prescriptionFiltersSubgroup: PrescriptionFiltersSubgroupDraft;
  setPrescriptionFiltersSubgroup: (
    prescriptionFiltersSubgroup: PrescriptionFiltersSubgroupDraft,
  ) => void;
}

export const PrescriptionFiltersSubgroup = ({
  prescriptionFiltersSubgroup,
  setPrescriptionFiltersSubgroup,
}: PrescriptionFiltersSubgroupProps) => {
  return (
    <div className={styles.prescriptionSubgroup}>
      <header className={styles.subgroupHeader}>
        <h3>Страхование</h3>
      </header>
      <div className={styles.groupLineGrid}></div>
    </div>
  );
};
