import type { OncologyCaseFiltersSubgroupDraft } from "../../../../../model/types/FiltersDraft";
import { MedViewMultipleSelectInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewMultipleSelectInput/MedViewMultipleSelectInput";
import styles from "../styles.module.scss";

interface OncologyCaseFiltersSubgroupProps {
  oncologyCaseFiltersSubgroupDraft: OncologyCaseFiltersSubgroupDraft;
  setOncologyCaseFiltersSubgroupDraft: (
    oncologyCaseFiltersSubgroupDraft: OncologyCaseFiltersSubgroupDraft,
  ) => void;
}

export const OncologyCaseFiltersSubgroup = ({
  oncologyCaseFiltersSubgroupDraft,
  setOncologyCaseFiltersSubgroupDraft,
}: OncologyCaseFiltersSubgroupProps) => {
  return (
    <div className={styles.oncologyCaseSubgroup}>
      <header className={styles.subgroupHeader}>
        <h3>Онкологический случай</h3>
      </header>
      <div className={styles.groupLineGrid}>
        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Повод обращения"
            values={oncologyCaseFiltersSubgroupDraft.referralReasons}
            onChange={(newValue: string[]) =>
              setOncologyCaseFiltersSubgroupDraft({
                ...oncologyCaseFiltersSubgroupDraft,
                referralReasons: newValue,
              })
            }
            options={[{ label: "N018_NAME", value: "N018_VALUES" }]}
          />
        </div>
        <div className={styles.span6}>
          <div className={styles.span6}>
            <MedViewMultipleSelectInput
              label="Стадия заболевания"
              values={oncologyCaseFiltersSubgroupDraft.stages}
              onChange={(newValue: string[]) =>
                setOncologyCaseFiltersSubgroupDraft({
                  ...oncologyCaseFiltersSubgroupDraft,
                  stages: newValue,
                })
              }
              options={[{ label: "N002_NAME", value: "N002_VALUES" }]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
