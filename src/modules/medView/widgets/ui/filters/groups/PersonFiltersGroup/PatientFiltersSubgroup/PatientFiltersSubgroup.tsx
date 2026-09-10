import type { Dayjs } from "dayjs";
import type { Sex } from "../../../../../model/types/Sex";
import { MedViewDateInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewDateInput/MedViewDateInput";
import { MedViewDefaultInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewDefaultInput/MedViewDefaultInput";
import { MedViewSelectInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewSelectInput/MedViewSelectInput";
import { useState } from "react";
import styles from "../styles.module.scss";

export const PatientFiltersSubgroup = () => {
  const [patientLastName, setPatientLastName] = useState<string>("");
  const [patientFirstName, setPatientFirstName] = useState<string>("");
  const [patientMiddleName, setPatientMiddleName] = useState<string>("");
  const [patientBirthDate, setPatientBirthDate] = useState<Dayjs | null>(null);
  const [patientSex, setPatientSex] = useState<Sex | null>(null);

  return (
    <div className={styles.patientSubgroup}>
      <header className={styles.subgroupHeader}>
        <h3>Пациент</h3>
      </header>

      <div className={styles.groupLineGrid}>
        <div className={styles.span4}>
          <MedViewDefaultInput
            label="Фамилия"
            placeholder="Иванов"
            handleInputChange={setPatientLastName}
            value={patientLastName}
          />
        </div>
        <div className={styles.span4}>
          <MedViewDefaultInput
            label="Имя"
            placeholder="Иван"
            handleInputChange={setPatientFirstName}
            value={patientFirstName}
          />
        </div>
        <div className={styles.span4}>
          <MedViewDefaultInput
            label="Отчество"
            placeholder="Иванович"
            handleInputChange={setPatientMiddleName}
            value={patientMiddleName}
          />
        </div>
      </div>

      <div className={styles.groupLineGrid}>
        <div className={styles.span2}>
          <MedViewDateInput
            label="Дата рождения"
            value={patientBirthDate}
            handleDateInputChange={setPatientBirthDate}
          />
        </div>

        <div className={styles.span2}>
          <MedViewSelectInput
            label="Пол"
            onChange={setPatientSex}
            options={[
              { label: "Мужской", value: "male" },
              { label: "Женский", value: "female" },
            ]}
            value={patientSex ?? ""}
          />
        </div>
      </div>
    </div>
  );
};
