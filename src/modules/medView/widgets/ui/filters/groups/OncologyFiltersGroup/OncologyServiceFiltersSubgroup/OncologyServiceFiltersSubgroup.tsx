import type { OncologyServiceFiltersSubgroupDraft } from "../../../../../model/types/FiltersDraft";
import { MedViewMultipleSelectInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewMultipleSelectInput/MedViewMultipleSelectInput";
import styles from "../styles.module.scss";

interface OncologyServiceFiltersSubgroupProps {
  oncologyServiceFiltersSubgroupDraft: OncologyServiceFiltersSubgroupDraft;
  setOncologyServiceFiltersSubgroupDraft: (
    oncologyServiceFiltersSubgroupDraft: OncologyServiceFiltersSubgroupDraft,
  ) => void;
}

export const OncologyServiceFiltersSubgroup = ({
  oncologyServiceFiltersSubgroupDraft,
  setOncologyServiceFiltersSubgroupDraft,
}: OncologyServiceFiltersSubgroupProps) => {
  return (
    <div className={styles.oncologyServiceSubgroup}>
      <header className={styles.subgroupHeader}>
        <h3>Онкологическая услуга</h3>
      </header>
      <div className={styles.groupLineGrid}>
        <div className={styles.span4}>
          <MedViewMultipleSelectInput
            label="Тип услуги"
            values={oncologyServiceFiltersSubgroupDraft.serviceTypes}
            onChange={(newValue: string[]) =>
              setOncologyServiceFiltersSubgroupDraft({
                ...oncologyServiceFiltersSubgroupDraft,
                serviceTypes: newValue,
              })
            }
            options={[{ label: "N013_NAME", value: "N013_VALUES" }]}
          />
        </div>
        <div className={styles.span4}>
          <MedViewMultipleSelectInput
            label="Тип хирургического лечения"
            values={oncologyServiceFiltersSubgroupDraft.surgicalTreatmentTypes}
            onChange={(newValue: string[]) =>
              setOncologyServiceFiltersSubgroupDraft({
                ...oncologyServiceFiltersSubgroupDraft,
                surgicalTreatmentTypes: newValue,
              })
            }
            options={[{ label: "N014_NAME", value: "N014_VALUES" }]}
          />
        </div>
        <div className={styles.span4}>
          <MedViewMultipleSelectInput
            label="Тип лучевой терапии"
            values={oncologyServiceFiltersSubgroupDraft.radioTherapyTypes}
            onChange={(newValue: string[]) =>
              setOncologyServiceFiltersSubgroupDraft({
                ...oncologyServiceFiltersSubgroupDraft,
                radioTherapyTypes: newValue,
              })
            }
            options={[{ label: "N017_NAME", value: "N017_VALUES" }]}
          />
        </div>
      </div>
      <div className={styles.groupLineGrid}>
        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Линия лекарственной терапии"
            values={oncologyServiceFiltersSubgroupDraft.drugTherapyLines}
            onChange={(newValue: string[]) =>
              setOncologyServiceFiltersSubgroupDraft({
                ...oncologyServiceFiltersSubgroupDraft,
                drugTherapyLines: newValue,
              })
            }
            options={[{ label: "N015_NAME", value: "N015_VALUES" }]}
          />
        </div>
        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Цикл лекарственной терапии"
            values={oncologyServiceFiltersSubgroupDraft.drugTherapyLines}
            onChange={(newValue: string[]) =>
              setOncologyServiceFiltersSubgroupDraft({
                ...oncologyServiceFiltersSubgroupDraft,
                drugTherapyLines: newValue,
              })
            }
            options={[{ label: "N016_NAME", value: "N016_VALUES" }]}
          />
        </div>
      </div>
    </div>
  );
};
