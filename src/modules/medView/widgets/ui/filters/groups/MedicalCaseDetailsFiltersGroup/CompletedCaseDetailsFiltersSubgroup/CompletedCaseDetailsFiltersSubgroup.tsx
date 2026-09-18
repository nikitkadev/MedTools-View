import type { Dayjs } from "dayjs";
import type { CompletedCaseDetailsFiltersSubgroupDraft } from "../../../../../model/types/FiltersDraft";
import { MedViewDateInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewDateInput/MedViewDateInput";
import { MedViewMultipleSelectInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewMultipleSelectInput/MedViewMultipleSelectInput";
import styles from "../styles.module.scss";

interface CompletedCaseDetailsFiltersSubgroupProps {
  completedCaseDetailsFiltersSubgroupDraft: CompletedCaseDetailsFiltersSubgroupDraft;
  setCompletedCaseDetailsFiltersSubgroupDraft: (
    completedCaseDetailsFiltersSubgroupDraft: CompletedCaseDetailsFiltersSubgroupDraft,
  ) => void;
}

export const CompletedCaseDetailsFiltersSubgroup = ({
  completedCaseDetailsFiltersSubgroupDraft,
  setCompletedCaseDetailsFiltersSubgroupDraft,
}: CompletedCaseDetailsFiltersSubgroupProps) => {
  return (
    <div className={styles.medicalCaseDetailsSubgroup}>
      <header className={styles.subgroupHeader}>
        <h3>Детали законченного случая</h3>
      </header>
      <div className={styles.groupLineGrid}>
        <div className={styles.span4}>
          <MedViewMultipleSelectInput
            label="Условия оказания медицинской помощи"
            values={completedCaseDetailsFiltersSubgroupDraft.careConditions}
            onChange={(newValue: string[]) =>
              setCompletedCaseDetailsFiltersSubgroupDraft({
                ...completedCaseDetailsFiltersSubgroupDraft,
                careConditions: newValue,
              })
            }
            options={[{ label: "V006_NAME", value: "V006_VALUES" }]}
          />
        </div>
        <div className={styles.span4}>
          <MedViewMultipleSelectInput
            label="Вид медицинской помощи"
            values={completedCaseDetailsFiltersSubgroupDraft.medicalCareTypes}
            onChange={(newValue: string[]) =>
              setCompletedCaseDetailsFiltersSubgroupDraft({
                ...completedCaseDetailsFiltersSubgroupDraft,
                medicalCareTypes: newValue,
              })
            }
            options={[{ label: "V008_NAME", value: "V008_VALUES" }]}
          />
        </div>
        <div className={styles.span4}>
          <MedViewMultipleSelectInput
            label="Форма оказания медицинской помощи"
            values={completedCaseDetailsFiltersSubgroupDraft.careForms}
            onChange={(newValue: string[]) =>
              setCompletedCaseDetailsFiltersSubgroupDraft({
                ...completedCaseDetailsFiltersSubgroupDraft,
                careForms: newValue,
              })
            }
            options={[{ label: "V014_NAME", value: "V014_VALUES" }]}
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
            options={[{ label: "F003_NAME", value: "F003_VALUES" }]}
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
            options={[{ label: "F003_NAME", value: "F003_VALUES" }]}
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
            options={[{ label: "V012_NAME", value: "V012_VALUES" }]}
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
            options={[{ label: "V017_NAME", value: "V017_VALUES" }]}
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
            options={[{ label: "V009_NAME", value: "V009_VALUES" }]}
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
            options={[{ label: "V010_NAME", value: "V010_VALUES" }]}
          />
        </div>
      </div>
    </div>
  );
};
