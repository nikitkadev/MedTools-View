import type { HighTechMedicalCareSubgroupDraft } from "../../../../../model/types/FiltersDraft";
import { MedViewMultipleSelectInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewMultipleSelectInput/MedViewMultipleSelectInput";
import styles from "../styles.module.scss";
import { MedViewDateInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewDateInput/MedViewDateInput";
import type { Dayjs } from "dayjs";
import { MedViewDefaultInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewDefaultInput/MedViewDefaultInput";

interface HighTechMedicalCareFiltersSubgroupProps {
  highTechMedicalCareFiltersSubgroupDraft: HighTechMedicalCareSubgroupDraft;
  setHighTechMedicalCareFiltersSubgroupDraft: (
    highTechMedicalCareFiltersSubgroupDraft: HighTechMedicalCareSubgroupDraft,
  ) => void;
}

export const HighTechMedicalCareFiltersSubgroup = ({
  highTechMedicalCareFiltersSubgroupDraft,
  setHighTechMedicalCareFiltersSubgroupDraft,
}: HighTechMedicalCareFiltersSubgroupProps) => {
  return (
    <div className={styles.highTechMedicalCareFiltersSubgroup}>
      <header className={styles.subgroupHeader}>
        <h3>ВМП</h3>
      </header>
      <div className={styles.groupLineGrid}>
        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Вид ВМП"
            values={highTechMedicalCareFiltersSubgroupDraft.highTechCareTypes}
            onChange={(newValue: string[]) =>
              setHighTechMedicalCareFiltersSubgroupDraft({
                ...highTechMedicalCareFiltersSubgroupDraft,
                highTechCareTypes: newValue,
              })
            }
            options={[{ label: "V018_NAME", value: "V018_VALUES" }]}
          />
        </div>

        <div className={styles.span6}>
          <MedViewMultipleSelectInput
            label="Метод ВМП"
            values={highTechMedicalCareFiltersSubgroupDraft.highTechCareMethods}
            onChange={(newValue: string[]) =>
              setHighTechMedicalCareFiltersSubgroupDraft({
                ...highTechMedicalCareFiltersSubgroupDraft,
                highTechCareMethods: newValue,
              })
            }
            options={[{ label: "V019_NAME", value: "V019_VALUES" }]}
          />
        </div>
      </div>
      <div className={styles.groupLineGrid}>
        <div className={styles.span4}>
          <MedViewDateInput
            label="Дата выдачи талона"
            value={highTechMedicalCareFiltersSubgroupDraft.voucherIssueDate}
            handleDateInputChange={(newValue: Dayjs | null) =>
              setHighTechMedicalCareFiltersSubgroupDraft({
                ...highTechMedicalCareFiltersSubgroupDraft,
                voucherIssueDate: newValue,
              })
            }
          />
        </div>
        <div className={styles.span4}>
          <MedViewDefaultInput
            label="Номер талона на ВМП"
            placeholder="00.0000.00000.000"
            value={highTechMedicalCareFiltersSubgroupDraft.voucherNumber}
            handleInputChange={(newValue: string) =>
              setHighTechMedicalCareFiltersSubgroupDraft({
                ...highTechMedicalCareFiltersSubgroupDraft,
                voucherNumber: newValue,
              })
            }
          />
        </div>

        <div className={styles.span4}>
          <MedViewDateInput
            label="Дата планируемой госпитализации"
            value={
              highTechMedicalCareFiltersSubgroupDraft.plannedAdmissionDates
            }
            handleDateInputChange={(newValue: Dayjs | null) =>
              setHighTechMedicalCareFiltersSubgroupDraft({
                ...highTechMedicalCareFiltersSubgroupDraft,
                plannedAdmissionDates: newValue,
              })
            }
          />
        </div>
      </div>
    </div>
  );
};
