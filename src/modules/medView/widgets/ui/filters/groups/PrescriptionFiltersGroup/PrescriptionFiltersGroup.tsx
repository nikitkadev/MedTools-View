import type { PrescriptionFiltersGroupDraft } from "../../../../model/types/FiltersDraft";
import { PrescriptionFiltersSubgroup } from "./PrescriptionFiltersSubgroup/PrescriptionFiltersSubgroup";
import styles from "./styles.module.scss";

interface PrescriptionFiltersGroupProps {
  prescriptionFiltersGroupDraft: PrescriptionFiltersGroupDraft;
  setPrescriptionFiltersGroupDraft: (
    prescriptionFiltersGroupDraft: PrescriptionFiltersGroupDraft,
  ) => void;
}

const PrescriptionFiltersGroup = ({
  prescriptionFiltersGroupDraft,
  setPrescriptionFiltersGroupDraft,
}: PrescriptionFiltersGroupProps) => {
  return (
    <section className={styles.prescriptionFiltersGroup}>
      <header className={styles.prescriptionFiltersGroupHeader}>
        <div className={styles.titleGroup}>
          <h2>Фильтрация по назначениям и направлениям</h2>
          <p className={styles.description}>
            Все поля, которые относятся к назначениям и направлениям
          </p>
        </div>
      </header>
      <PrescriptionFiltersSubgroup
        prescriptionFiltersSubgroup={prescriptionFiltersGroupDraft.prescription}
        setPrescriptionFiltersSubgroup={(prescription) =>
          setPrescriptionFiltersGroupDraft({
            ...prescriptionFiltersGroupDraft,
            prescription: prescription,
          })
        }
      />
    </section>
  );
};

export default PrescriptionFiltersGroup;
