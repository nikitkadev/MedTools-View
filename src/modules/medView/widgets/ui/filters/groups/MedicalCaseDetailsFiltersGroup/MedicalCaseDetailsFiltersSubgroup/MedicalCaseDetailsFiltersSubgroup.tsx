import type { MedicalCaseDetailsFiltersSubgroupDraft } from "../../../../../model/types/FiltersDraft";
import type { Dayjs } from "dayjs";
import { MedViewMultipleSelectInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewMultipleSelectInput/MedViewMultipleSelectInput";
import { MedViewDefaultInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewDefaultInput/MedViewDefaultInput";
import { MedViewDateInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewDateInput/MedViewDateInput";
import styles from "../styles.module.scss";

interface MedicalCaseDetailsFiltersSubgroupProps {
  medicalCaseDetailsFiltersSubgroupDraft: MedicalCaseDetailsFiltersSubgroupDraft;
  setMedicalCaseDetailsFiltersSubgroupDraft: (
    medicalCaseDetailsFiltersSubgroupDraft: MedicalCaseDetailsFiltersSubgroupDraft,
  ) => void;
}

export const MedicalCaseDetailsFiltersSubgroup = ({
  medicalCaseDetailsFiltersSubgroupDraft,
  setMedicalCaseDetailsFiltersSubgroupDraft,
}: MedicalCaseDetailsFiltersSubgroupProps) => {
  return (
    <div className={styles.medicalCaseDetailsSubgroup}>
      <header className={styles.subgroupHeader}>
        <h3>Детали медицинского случая</h3>
      </header>

      <div className={styles.groupLineGrid}>
        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Профиль медицинской помощи"
            values={medicalCaseDetailsFiltersSubgroupDraft.medicalProfiles}
            onChange={(newValue: string[]) =>
              setMedicalCaseDetailsFiltersSubgroupDraft({
                ...medicalCaseDetailsFiltersSubgroupDraft,
                medicalProfiles: newValue,
              })
            }
            options={[{ label: "V002_NAME", value: "V002_VALUES" }]}
          />
        </div>

        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Профиль койки"
            values={medicalCaseDetailsFiltersSubgroupDraft.bedProfiles}
            onChange={(newValue: string[]) =>
              setMedicalCaseDetailsFiltersSubgroupDraft({
                ...medicalCaseDetailsFiltersSubgroupDraft,
                bedProfiles: newValue,
              })
            }
            options={[{ label: "V020_NAME", value: "V020_VALUES" }]}
          />
        </div>
      </div>

      <div className={styles.groupLineGrid}>
        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Структурное подразделение"
            values={medicalCaseDetailsFiltersSubgroupDraft.divisions}
            onChange={(newValue: string[]) =>
              setMedicalCaseDetailsFiltersSubgroupDraft({
                ...medicalCaseDetailsFiltersSubgroupDraft,
                divisions: newValue,
              })
            }
            options={[{ label: "F033_NAME", value: "F033_VALUES" }]}
          />
        </div>
        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Место обращения"
            values={
              medicalCaseDetailsFiltersSubgroupDraft.encounterMedicalOrganizations
            }
            onChange={(newValue: string[]) =>
              setMedicalCaseDetailsFiltersSubgroupDraft({
                ...medicalCaseDetailsFiltersSubgroupDraft,
                encounterMedicalOrganizations: newValue,
              })
            }
            options={[{ label: "V040_NAME", value: "V040_VALUES" }]}
          />
        </div>
      </div>

      <div className={styles.groupLineGrid}>
        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Цель посещения"
            values={medicalCaseDetailsFiltersSubgroupDraft.visitPurposes}
            onChange={(newValue: string[]) =>
              setMedicalCaseDetailsFiltersSubgroupDraft({
                ...medicalCaseDetailsFiltersSubgroupDraft,
                visitPurposes: newValue,
              })
            }
            options={[{ label: "V025_NAME", value: "V025_VALUES" }]}
          />
        </div>
      </div>

      <div className={styles.groupLineGrid}>
        <div className={styles.span12}>
          <MedViewDefaultInput
            label="Место проведения профилактического мероприятия"
            placeholder="Место проведения профилактического мероприятия"
            value={medicalCaseDetailsFiltersSubgroupDraft.preventiveCarePlace}
            handleInputChange={(newValue: string) =>
              setMedicalCaseDetailsFiltersSubgroupDraft({
                ...medicalCaseDetailsFiltersSubgroupDraft,
                preventiveCarePlace: newValue,
              })
            }
          />
        </div>
      </div>

      <div className={styles.groupLineGrid}>
        <div className={styles.span3}>
          <MedViewDateInput
            label="Начало лечения"
            value={medicalCaseDetailsFiltersSubgroupDraft.treatmentStartDate}
            handleDateInputChange={(newValue: Dayjs | null) =>
              setMedicalCaseDetailsFiltersSubgroupDraft({
                ...medicalCaseDetailsFiltersSubgroupDraft,
                treatmentStartDate: newValue,
              })
            }
          />
        </div>
        <div className={styles.span3}>
          <MedViewDateInput
            label="Окончание лечения"
            value={medicalCaseDetailsFiltersSubgroupDraft.treatmentEndDate}
            handleDateInputChange={(newValue: Dayjs | null) =>
              setMedicalCaseDetailsFiltersSubgroupDraft({
                ...medicalCaseDetailsFiltersSubgroupDraft,
                treatmentEndDate: newValue,
              })
            }
          />
        </div>
        <div className={styles.span6}>
          <MedViewDefaultInput
            label="Номер истории"
            placeholder="Номер истории"
            value={medicalCaseDetailsFiltersSubgroupDraft.medicalRecordNumber}
            handleInputChange={(newValue: string) =>
              setMedicalCaseDetailsFiltersSubgroupDraft({
                ...medicalCaseDetailsFiltersSubgroupDraft,
                medicalRecordNumber: newValue,
              })
            }
          />
        </div>
      </div>
      <div className={styles.groupLineGrid}>
        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Характер основного заболевания"
            values={medicalCaseDetailsFiltersSubgroupDraft.diseaseCharacters}
            onChange={(newValue: string[]) =>
              setMedicalCaseDetailsFiltersSubgroupDraft({
                ...medicalCaseDetailsFiltersSubgroupDraft,
                diseaseCharacters: newValue,
              })
            }
            options={[{ label: "V027_NAME", value: "V027_VALUES" }]}
          />
        </div>

        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Специальность лечащего врача"
            values={medicalCaseDetailsFiltersSubgroupDraft.physicianSpecialties}
            onChange={(newValue: string[]) =>
              setMedicalCaseDetailsFiltersSubgroupDraft({
                ...medicalCaseDetailsFiltersSubgroupDraft,
                physicianSpecialties: newValue,
              })
            }
            options={[{ label: "V021_NAME", value: "V021_VALUES" }]}
          />
        </div>
      </div>
    </div>
  );
};
