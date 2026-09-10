import type { Dayjs } from "dayjs";
import type { Sex } from "../../../../../model/types/Sex";
import { MedViewDateInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewDateInput/MedViewDateInput";
import { MedViewDefaultInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewDefaultInput/MedViewDefaultInput";
import { MedViewSelectInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewSelectInput/MedViewSelectInput";
import { useState } from "react";
import styles from "../styles.module.scss";

export const RepresentativeFiltersSubgroup = () => {
  const [representativeLastName, setRepresentativeLastName] =
    useState<string>("");
  const [representativeFirstName, setRepresentativeFirstName] =
    useState<string>("");
  const [representativeMiddleName, setRepresentativeMiddleName] =
    useState<string>("");
  const [representativeBirthDate, setRepresentativeBirthDate] =
    useState<Dayjs | null>(null);
  const [representativeSex, setRepresentativeSex] = useState<Sex | null>(null);

  return (
    <div className={styles.representativeSubgroup}>
      <header className={styles.subgroupHeader}>
        <h3>Представитель</h3>
      </header>

      <div className={styles.groupLineGrid}>
        <div className={styles.span4}>
          <MedViewDefaultInput
            label="Фамилия"
            placeholder="Иванов"
            value={representativeLastName}
            handleInputChange={setRepresentativeLastName}
          />
        </div>
        <div className={styles.span4}>
          <MedViewDefaultInput
            label="Имя"
            placeholder="Иван"
            value={representativeFirstName}
            handleInputChange={setRepresentativeFirstName}
          />
        </div>
        <div className={styles.span4}>
          <MedViewDefaultInput
            label="Отчество"
            placeholder="Иванович"
            value={representativeMiddleName}
            handleInputChange={setRepresentativeMiddleName}
          />
        </div>
      </div>

      <div className={styles.groupLineGrid}>
        <div className={styles.span2}>
          <MedViewDateInput
            label="Дата рождения"
            value={representativeBirthDate}
            handleDateInputChange={setRepresentativeBirthDate}
          />
        </div>

        <div className={styles.span2}>
          <MedViewSelectInput
            label="Пол"
            onChange={setRepresentativeSex}
            options={[
              { label: "Мужской", value: "male" },
              { label: "Женский", value: "female" },
            ]}
            value={representativeSex ?? ""}
          />
        </div>
      </div>
    </div>
  );
};
