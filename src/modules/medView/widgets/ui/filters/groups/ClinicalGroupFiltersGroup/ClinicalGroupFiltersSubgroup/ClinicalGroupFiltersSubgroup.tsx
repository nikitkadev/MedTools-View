import type { ClinicalGroupsFiltersSubgroupDraft } from "../../../../../model/types/FiltersDraft";
import { MedViewMultipleSelectInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewMultipleSelectInput/MedViewMultipleSelectInput";
import styles from "../styles.module.scss";

interface ClinicalGroupFiltersSubgroupProps {
  clinicalGroupFiltersSubgroupDraft: ClinicalGroupsFiltersSubgroupDraft;
  setClinicalGroupFiltersSubgroupDraft: (
    clinicalGroupFiltersSubgroupDraft: ClinicalGroupsFiltersSubgroupDraft,
  ) => void;
}

export const ClinicalGroupFiltersSubgroup = ({
  clinicalGroupFiltersSubgroupDraft,
  setClinicalGroupFiltersSubgroupDraft,
}: ClinicalGroupFiltersSubgroupProps) => {
  return (
    <div className={styles.clinicalGroupFiltersSubgroup}>
      <header className={styles.subgroupHeader}>
        <h3>КСГ</h3>
      </header>
      <div className={styles.groupLineGrid}>
        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Номер КСГ"
            values={
              clinicalGroupFiltersSubgroupDraft.clinicalStatisticGroupNumbers
            }
            onChange={(newValue: string[]) =>
              setClinicalGroupFiltersSubgroupDraft({
                ...clinicalGroupFiltersSubgroupDraft,
                clinicalStatisticGroupNumbers: newValue,
              })
            }
            options={[{ label: "V023_NAME", value: "V023_VALUES" }]}
          />
        </div>

        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Номер КСЛП"
            values={
              clinicalGroupFiltersSubgroupDraft.complexityCoefficientNumbers
            }
            onChange={(newValue: string[]) =>
              setClinicalGroupFiltersSubgroupDraft({
                ...clinicalGroupFiltersSubgroupDraft,
                complexityCoefficientNumbers: newValue,
              })
            }
            options={[{ label: "V042_NAME", value: "V042_VALUES" }]}
          />
        </div>
      </div>
      <div className={styles.groupLineGrid}>
        <div className={styles.span12}>
          <MedViewMultipleSelectInput
            label="Причина оплаты за прерванный случай"
            values={
              clinicalGroupFiltersSubgroupDraft.interruptedCasePaymentReasons
            }
            onChange={(newValue: string[]) =>
              setClinicalGroupFiltersSubgroupDraft({
                ...clinicalGroupFiltersSubgroupDraft,
                interruptedCasePaymentReasons: newValue,
              })
            }
            options={[{ label: "V042_NAME", value: "V042_VALUES" }]}
          />
        </div>
      </div>
    </div>
  );
};
