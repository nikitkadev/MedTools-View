import type { Dayjs } from "dayjs";
import type { CompletedCaseDetailsFiltersSubgroupDraft } from "../../../../../model/types/FiltersDraft";
import type { FilterOption } from "../../../../../model/types/FilterOptions";
import { MedViewDateInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewDateInput/MedViewDateInput";
import { MedViewMultipleSelectInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewMultipleSelectInput/MedViewMultipleSelectInput";
import styles from "../styles.module.scss";

interface CompletedCaseDetailsFiltersSubgroupProps {
  completedCaseDetailsFiltersSubgroupDraft: CompletedCaseDetailsFiltersSubgroupDraft;
  setCompletedCaseDetailsFiltersSubgroupDraft: (
    completedCaseDetailsFiltersSubgroupDraft: CompletedCaseDetailsFiltersSubgroupDraft,
  ) => void;

  careConditionFilterOptions: FilterOption[];
  medicalCareTypeFilterOptions: FilterOption[];
  medicalCareFormFilterOptions: FilterOption[];
  medicalOrgsInCompletedCaseFilterOptions: FilterOption[];
  referringMedicalOrgsInCompletedCaseFilterOptions: FilterOption[];
  diseaseOutcomeFilterOptions: FilterOption[];
  screeningResultFilterOptions: FilterOption[];
  hospitalizationOutcomeFilterOptions: FilterOption[];
  paymentMethodFilterOptions: FilterOption[];
}

export const CompletedCaseDetailsFiltersSubgroup = ({
  completedCaseDetailsFiltersSubgroupDraft,
  setCompletedCaseDetailsFiltersSubgroupDraft,

  careConditionFilterOptions,
  medicalCareTypeFilterOptions,
  medicalCareFormFilterOptions,
  medicalOrgsInCompletedCaseFilterOptions,
  referringMedicalOrgsInCompletedCaseFilterOptions,
  diseaseOutcomeFilterOptions,
  screeningResultFilterOptions,
  hospitalizationOutcomeFilterOptions,
  paymentMethodFilterOptions,
}: CompletedCaseDetailsFiltersSubgroupProps) => {
  return (
    <div className={styles.medicalCaseDetailsSubgroup}>
      <header className={styles.subgroupHeader}>
        <h3>Детали законченного случая</h3>
      </header>
      <div className={styles.groupLineGrid}>
        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Условия оказания медицинской помощи"
            values={completedCaseDetailsFiltersSubgroupDraft.careConditions}
            onChange={(newValue: string[]) =>
              setCompletedCaseDetailsFiltersSubgroupDraft({
                ...completedCaseDetailsFiltersSubgroupDraft,
                careConditions: newValue,
              })
            }
            options={careConditionFilterOptions.map((option) => ({
              label: option.value,
              value: option.key,
            }))}
          />
        </div>

        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Форма оказания медицинской помощи"
            values={completedCaseDetailsFiltersSubgroupDraft.careForms}
            onChange={(newValue: string[]) =>
              setCompletedCaseDetailsFiltersSubgroupDraft({
                ...completedCaseDetailsFiltersSubgroupDraft,
                careForms: newValue,
              })
            }
            options={medicalCareFormFilterOptions.map((option) => ({
              label: option.value,
              value: option.key,
            }))}
          />
        </div>
      </div>

      <div className={styles.groupLineGrid}>
        <div className={styles.span12}>
          <MedViewMultipleSelectInput
            label="Вид медицинской помощи"
            values={completedCaseDetailsFiltersSubgroupDraft.medicalCareTypes}
            onChange={(newValue: string[]) =>
              setCompletedCaseDetailsFiltersSubgroupDraft({
                ...completedCaseDetailsFiltersSubgroupDraft,
                medicalCareTypes: newValue,
              })
            }
            options={medicalCareTypeFilterOptions.map((option) => ({
              label: option.value,
              value: option.key,
            }))}
          />
        </div>
      </div>

      <div className={styles.groupLineGrid}>
        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Медицинская организация"
            values={
              completedCaseDetailsFiltersSubgroupDraft.medicalOrganizations
            }
            onChange={(newValue: string[]) =>
              setCompletedCaseDetailsFiltersSubgroupDraft({
                ...completedCaseDetailsFiltersSubgroupDraft,
                medicalOrganizations: newValue,
              })
            }
            options={medicalOrgsInCompletedCaseFilterOptions.map((option) => ({
              label: option.value,
              value: option.key,
            }))}
          />
        </div>

        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Направившая медицинская организация"
            values={
              completedCaseDetailsFiltersSubgroupDraft.referringMedicalOrganizations
            }
            onChange={(newValue: string[]) =>
              setCompletedCaseDetailsFiltersSubgroupDraft({
                ...completedCaseDetailsFiltersSubgroupDraft,
                referringMedicalOrganizations: newValue,
              })
            }
            options={referringMedicalOrgsInCompletedCaseFilterOptions.map(
              (option) => ({
                label: option.value,
                value: option.key,
              }),
            )}
          />
        </div>
      </div>

      <div className={styles.groupLineGrid}>
        <div className={styles.span3}>
          <MedViewDateInput
            value={completedCaseDetailsFiltersSubgroupDraft.treatmentStartDate}
            handleDateInputChange={(newValue: Dayjs | null) =>
              setCompletedCaseDetailsFiltersSubgroupDraft({
                ...completedCaseDetailsFiltersSubgroupDraft,
                treatmentStartDate: newValue,
              })
            }
            label="Начало лечения"
          />
        </div>

        <div className={styles.span3}>
          <MedViewDateInput
            value={completedCaseDetailsFiltersSubgroupDraft.treatmentEndDate}
            handleDateInputChange={(newValue: Dayjs | null) =>
              setCompletedCaseDetailsFiltersSubgroupDraft({
                ...completedCaseDetailsFiltersSubgroupDraft,
                treatmentEndDate: newValue,
              })
            }
            label="Окончание лечения"
          />
        </div>
        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Исход заболевания"
            values={completedCaseDetailsFiltersSubgroupDraft.diseaseOutcomes}
            onChange={(newValue: string[]) =>
              setCompletedCaseDetailsFiltersSubgroupDraft({
                ...completedCaseDetailsFiltersSubgroupDraft,
                diseaseOutcomes: newValue,
              })
            }
            options={diseaseOutcomeFilterOptions.map((option) => ({
              label: option.value,
              value: option.key,
            }))}
          />
        </div>
      </div>

      <div className={styles.groupLineGrid}>
        <div className={styles.span4}>
          <MedViewMultipleSelectInput
            label="Результат диспансеризации"
            values={completedCaseDetailsFiltersSubgroupDraft.screeningResults}
            onChange={(newValue: string[]) =>
              setCompletedCaseDetailsFiltersSubgroupDraft({
                ...completedCaseDetailsFiltersSubgroupDraft,
                screeningResults: newValue,
              })
            }
            options={screeningResultFilterOptions.map((option) => ({
              label: option.value,
              value: option.key,
            }))}
          />
        </div>
        <div className={styles.span4}>
          <MedViewMultipleSelectInput
            label="Результат обращения / госпитализации"
            values={
              completedCaseDetailsFiltersSubgroupDraft.hospitalizationOutcomes
            }
            onChange={(newValue: string[]) =>
              setCompletedCaseDetailsFiltersSubgroupDraft({
                ...completedCaseDetailsFiltersSubgroupDraft,
                hospitalizationOutcomes: newValue,
              })
            }
            options={hospitalizationOutcomeFilterOptions.map((option) => ({
              label: option.value,
              value: option.key,
            }))}
          />
        </div>
        <div className={styles.span4}>
          <MedViewMultipleSelectInput
            label="Код способа оплаты"
            values={completedCaseDetailsFiltersSubgroupDraft.paymentMethods}
            onChange={(newValue: string[]) =>
              setCompletedCaseDetailsFiltersSubgroupDraft({
                ...completedCaseDetailsFiltersSubgroupDraft,
                paymentMethods: newValue,
              })
            }
            options={paymentMethodFilterOptions.map((option) => ({
              label: option.value,
              value: option.key,
            }))}
          />
        </div>
      </div>
    </div>
  );
};
