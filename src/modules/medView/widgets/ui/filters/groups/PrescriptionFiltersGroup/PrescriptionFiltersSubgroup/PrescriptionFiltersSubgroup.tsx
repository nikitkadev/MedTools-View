import type { Dayjs } from "dayjs";
import type { PrescriptionFiltersSubgroupDraft } from "../../../../../model/types/FiltersDraft";
import { MedViewDateInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewDateInput/MedViewDateInput";
import { MedViewMultipleSelectInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewMultipleSelectInput/MedViewMultipleSelectInput";
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
        <h3>Назначения</h3>
      </header>
      <div className={styles.groupLineGrid}>
        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Вид назначения"
            values={prescriptionFiltersSubgroup.prescriptionTypes}
            onChange={(newValue: string[]) =>
              setPrescriptionFiltersSubgroup({
                ...prescriptionFiltersSubgroup,
                prescriptionTypes: newValue,
              })
            }
            options={[
              {
                label:
                  "Направлен на консультацию в медицинскую организацию по месту прикрепления",
                value: "1",
              },
              {
                label:
                  "Направлен на консультацию в иную медицинскую организацию",
                value: "2",
              },
            ]}
          />
        </div>
        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Метод  диагностического исследования"
            values={prescriptionFiltersSubgroup.diagnosticMethods}
            onChange={(newValue: string[]) =>
              setPrescriptionFiltersSubgroup({
                ...prescriptionFiltersSubgroup,
                diagnosticMethods: newValue,
              })
            }
            options={[{ label: "V029_NAME", value: "V029_VALUES" }]}
          />
        </div>
      </div>

      <div className={styles.groupLineGrid}>
        <div className={styles.span3}>
          <MedViewDateInput
            label="Дата направления"
            value={prescriptionFiltersSubgroup.referralDate}
            handleDateInputChange={(newValue: Dayjs | null) =>
              setPrescriptionFiltersSubgroup({
                ...prescriptionFiltersSubgroup,
                referralDate: newValue,
              })
            }
          />
        </div>
        <div className={styles.span9}>
          <MedViewMultipleSelectInput
            label="МО направления"
            values={prescriptionFiltersSubgroup.referredToMedicalOrganizations}
            onChange={(newValue: string[]) =>
              setPrescriptionFiltersSubgroup({
                ...prescriptionFiltersSubgroup,
                referredToMedicalOrganizations: newValue,
              })
            }
            options={[{ label: "F003_NAME", value: "F003_VALUES" }]}
          />
        </div>
      </div>
      <div className={styles.groupLineGrid}>
        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Профиль медицинской помощи"
            values={prescriptionFiltersSubgroup.medicalCareProfiles}
            onChange={(newValue: string[]) =>
              setPrescriptionFiltersSubgroup({
                ...prescriptionFiltersSubgroup,
                medicalCareProfiles: newValue,
              })
            }
            options={[{ label: "V002_NAME", value: "V002_VALUES" }]}
          />
        </div>
        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Профиль койки"
            values={prescriptionFiltersSubgroup.bedProfiles}
            onChange={(newValue: string[]) =>
              setPrescriptionFiltersSubgroup({
                ...prescriptionFiltersSubgroup,
                bedProfiles: newValue,
              })
            }
            options={[{ label: "V020_NAME", value: "V020_VALUES" }]}
          />
        </div>
      </div>
      <div className={styles.groupLineGrid}>
        <div className={styles.span12}>
          <MedViewMultipleSelectInput
            label="Услуги, указанные в направлении"
            values={prescriptionFiltersSubgroup.services}
            onChange={(newValue: string[]) =>
              setPrescriptionFiltersSubgroup({
                ...prescriptionFiltersSubgroup,
                services: newValue,
              })
            }
            options={[{ label: "V001_NAME", value: "V001_VALUES" }]}
          />
        </div>
      </div>
    </div>
  );
};
