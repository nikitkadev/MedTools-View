import type { ClinicalGroupsFiltersSubgroupDraft } from "../../../../../model/types/FiltersDraft";
import { MedViewMultipleSelectInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewMultipleSelectInput/MedViewMultipleSelectInput";
import { useFilterOptionsQuery } from "../../../../../model/queries/useFilterOptionsQuery";
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
  const { data: complexityCoefficientFilterOptions } = useFilterOptionsQuery(
    "/med-view/filter-options/complexity-coefficients",
    "complexity-coefficient",
  );

  const { data: interruptedCasePaymentReason } = useFilterOptionsQuery(
    "/med-view/filter-options/interrupted-case-payment-reasons",
    "interrupted-case-payment-reason",
  );

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
            options={
              complexityCoefficientFilterOptions?.map((option) => ({
                label: option.value,
                value: option.key,
              })) ?? []
            }
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
            options={
              interruptedCasePaymentReason?.map((option) => ({
                label: option.value,
                value: option.key,
              })) ?? []
            }
          />
        </div>
      </div>
    </div>
  );
};
