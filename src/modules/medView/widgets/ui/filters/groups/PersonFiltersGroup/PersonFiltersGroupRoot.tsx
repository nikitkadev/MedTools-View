import { InsuranceFiltersSubgroup } from "./InsuranceFiltersSubgroup/InsuranceFiltersSubgroup";
import { PatientFiltersSubgroup } from "./PatientFiltersSubgroup/PatientFiltersSubgroup";
import { RepresentativeFiltersSubgroup } from "./RepresentativeFiltersSubgroup/RepresentativeFiltersSubgroup";
import styles from "./styles.module.scss";

const PersonFiltersGroupRoot = () => {
  return (
    <section className={styles.generalFiltersGroup}>
      <header className={styles.generalFiltersGroupHeader}>
        <div className={styles.titleGroup}>
          <h2>Фильтрация по персональным данным</h2>
          <p className={styles.description}>
            Все поля, которые относятся к данным пациента
          </p>
        </div>
      </header>

      <PatientFiltersSubgroup />
      <RepresentativeFiltersSubgroup />
      <InsuranceFiltersSubgroup />
    </section>
  );
};

export default PersonFiltersGroupRoot;
