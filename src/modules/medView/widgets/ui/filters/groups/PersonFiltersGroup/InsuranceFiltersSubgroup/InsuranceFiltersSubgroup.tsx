import { useState } from "react";
import { MedViewDefaultInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewDefaultInput/MedViewDefaultInput";
import { MedViewMultipleSelectInput } from "../../../../../../../../shared/ui/medView/inputs/MedViewMultipleSelectInput/MedViewMultipleSelectInput";
import styles from "../styles.module.scss";

export const InsuranceFiltersSubgroup = () => {
  const [insurances, setInsurances] = useState<string[]>([]);
  const [selectedPolisTypes, setSelectedPolisTypes] = useState<string[]>([]);
  const [insurancePolicySeries, setInsurancePolicySeries] =
    useState<string>("");
  const [insurancePolicyNumber, setInsurancePolicyNumber] =
    useState<string>("");
  const [unifiedPolicyNumber, setUnifiedPolicyNumber] = useState<string>("");

  return (
    <div className={styles.insuranceSubgroup}>
      <header className={styles.subgroupHeader}>
        <h3>Страхование</h3>
      </header>
      <div className={styles.groupLineGrid}>
        <div className={styles.span12}>
          <MedViewMultipleSelectInput
            label="Страховая медицинская организация"
            options={[{ label: "F002_NAME", value: "F002_VALUE" }]}
            onChange={setInsurances}
            values={insurances}
          />
        </div>
      </div>
      <div className={styles.groupLineGrid}>
        <div className={styles.span2}>
          <MedViewMultipleSelectInput
            label="Тип полиса"
            options={[{ label: "F008_NAME", value: "F008_VALUE" }]}
            onChange={setSelectedPolisTypes}
            values={selectedPolisTypes}
          />
        </div>
        <div className={styles.span2}>
          <MedViewDefaultInput
            label="Серия полиса"
            placeholder="0000"
            value={insurancePolicySeries}
            handleInputChange={setInsurancePolicySeries}
          />
        </div>
        <div className={styles.span4}>
          <MedViewDefaultInput
            label="Номер полиса"
            placeholder="00000000"
            value={insurancePolicyNumber}
            handleInputChange={setInsurancePolicyNumber}
          />
        </div>
        <div className={styles.span4}>
          <MedViewDefaultInput
            label="ЕНП"
            placeholder="0000000000000000"
            value={unifiedPolicyNumber}
            handleInputChange={setUnifiedPolicyNumber}
          />
        </div>
      </div>
    </div>
  );
};
