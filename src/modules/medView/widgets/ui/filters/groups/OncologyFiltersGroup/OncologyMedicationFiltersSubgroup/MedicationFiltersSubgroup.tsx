import { MedViewMultipleSelectInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewMultipleSelectInput/MedViewMultipleSelectInput";
import type { MedicationFiltersSubgroupDraft } from "../../../../../model/types/FiltersDraft";
import styles from "../styles.module.scss";

interface MedicationFiltersSubgroupProps {
  medicationFiltersSubgroupDraft: MedicationFiltersSubgroupDraft;
  setMedicationFiltersSubgroupDraft: (
    medicationFiltersSubgroupDraft: MedicationFiltersSubgroupDraft,
  ) => void;
}

export const MedicationFiltersSubgroup = ({
  medicationFiltersSubgroupDraft,
  setMedicationFiltersSubgroupDraft,
}: MedicationFiltersSubgroupProps) => {
  return (
    <div className={styles.medicationSubgroup}>
      <header className={styles.subgroupHeader}>
        <h3>Лекарственный препарат</h3>
      </header>
      <div className={styles.groupLineGrid}>
        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Идентификатор лекарственного препарата"
            values={medicationFiltersSubgroupDraft.drugIdentifiers}
            onChange={(newValue: string[]) =>
              setMedicationFiltersSubgroupDraft({
                ...medicationFiltersSubgroupDraft,
                drugIdentifiers: newValue,
              })
            }
            options={[{ label: "N020_NAME", value: "N020_VALUES" }]}
          />
        </div>
        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Cхема лекарственной терапии"
            values={medicationFiltersSubgroupDraft.therapyRegimens}
            onChange={(newValue: string[]) =>
              setMedicationFiltersSubgroupDraft({
                ...medicationFiltersSubgroupDraft,
                therapyRegimens: newValue,
              })
            }
            options={[{ label: "N014_NAME", value: "N014_VALUES" }]}
          />
        </div>
      </div>
    </div>
  );
};
