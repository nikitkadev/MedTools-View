import { Divider } from "../../../../../../../../components/ui/Divider/Divider";
import type { InsuranceDto } from "../../../../model/types/GetInsuranceResult";
import styles from "../styles.module.scss";

interface InsuranceCardProps {
  insurance: InsuranceDto;
}

export const InsuranceCard = ({ insurance }: InsuranceCardProps) => {
  return (
    <article className={`${styles.cardRoot} ${styles.insuranceCard}`}>
      <header className={styles.cardHeader}>
        <h2>СМО</h2>
      </header>
      <Divider />

      <div className={styles.cardContent}>
        <div className={styles.oneGrid}>
          <div className={styles.field}>
            <label>Реестровый номер СМО</label>
            <p>{insurance.insuranceCompanyCode ?? "-"}</p>
          </div>
        </div>
        <div className={styles.oneGrid}>
          <div className={styles.field}>
            <label>Наименование СМО</label>
            <p>{insurance.insuranceCompanyName ?? "-"}</p>
          </div>
        </div>
        <div className={styles.twoGrid}>
          <div className={styles.field}>
            <label>ОГРН</label>
            <p>{insurance.ogrn ?? "-"}</p>
          </div>
          <div className={styles.field}>
            <label>ОКАТО</label>
            <p>{insurance.okato}</p>
          </div>
        </div>
        <div className={styles.twoGrid}>
          <div className={styles.field}>
            <label>Номер полиса (старый)</label>
            <p>{insurance.insurancePolicyUnifiedNumber ?? "-"}</p>
          </div>
          <div className={styles.field}>
            <label>Номер полиса (новый)</label>
            <p>{insurance.insurancePolicyNumber}</p>
          </div>
        </div>
        <div className={styles.oneGrid}>
          <div className={styles.field}>
            <label>Серия полиса</label>
            <p>{insurance.insurancePolicySeries ?? "-"}</p>
          </div>
        </div>
        <div className={styles.oneGrid}>
          <div className={styles.field}>
            <label>Тип полиса</label>
            <p>
              {`${insurance.insurancePolicyTypeCode} : ${insurance.insurancePolicyTypeName}`}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
