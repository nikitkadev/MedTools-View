import { MedViewDateInput } from "../../../../../../../shared/ui/medView/inputs/MedViewDateInput/MedViewDateInput";
import { MedViewDefaultInput } from "../../../../../../../shared/ui/medView/inputs/MedViewDefaultInput/MedViewDefaultInput";
import { MedViewFilterStandartInput } from "../../../../../../../shared/ui/medView/inputs/MedViewFilterStandartInput/MedViewFilterStandartInput";
import styles from "./styles.module.scss";

const GeneralFiltersGroup = () => {
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
      <div className={styles.patientSubgroup}>
        <header className={styles.subgroupHeader}>
          <h3>Пациент</h3>
        </header>

        <div className={styles.groupLineGrid}>
          <div className={styles.span4}>
            <MedViewDefaultInput label="Фамилия" placeholder="Иванов" />
          </div>
          <div className={styles.span4}>
            <MedViewDefaultInput label="Имя" placeholder="Иван" />
          </div>
          <div className={styles.span4}>
            <MedViewDefaultInput label="Отчество" placeholder="Иванович" />
          </div>
        </div>

        <div className={styles.groupLineGrid}>
          <div className={styles.span2}>
            {/* <MedViewFilterStandartInput
              label="Дата рождения"
              placeholder="20.07.2001"
            /> */}
            <MedViewDateInput label="Дата рождения" />
          </div>
          <div className={styles.span2}>
            <MedViewFilterStandartInput label="Пол" placeholder="Мужской" />
          </div>
        </div>
      </div>

      <div className={styles.representativeSubgroup}>
        <header className={styles.subgroupHeader}>
          <h3>Представитель</h3>
        </header>

        <div className={styles.groupLineGrid}>
          <div className={styles.span4}>
            <MedViewDefaultInput label="Фамилия" placeholder="Иванов" />
          </div>
          <div className={styles.span4}>
            <MedViewDefaultInput label="Имя" placeholder="Иван" />
          </div>
          <div className={styles.span4}>
            <MedViewDefaultInput label="Отчество" placeholder="Иванович" />
          </div>
        </div>

        <div className={styles.groupLineGrid}>
          <div className={styles.span2}>
            <MedViewFilterStandartInput
              label="Дата рождения"
              placeholder="20.07.2001"
            />
          </div>
          <div className={styles.span2}>
            <MedViewFilterStandartInput label="Пол" placeholder="Мужской" />
          </div>
        </div>
      </div>
      <div className={styles.insuranceSubgroup}>
        <header className={styles.subgroupHeader}>
          <h3>Страхование</h3>
        </header>
        <div className={styles.groupLineGrid}>
          <div className={styles.span12}>
            <MedViewFilterStandartInput
              label="Страховая медицинская организация"
              placeholder="ИНГОССТРАХ-М"
            />
          </div>
        </div>
        <div className={styles.groupLineGrid}>
          <div className={styles.span3}>
            <MedViewFilterStandartInput
              label="Серия полиса"
              placeholder="0000"
            />
          </div>
          <div className={styles.span3}>
            <MedViewFilterStandartInput
              label="Номер полиса"
              placeholder="00000000"
            />
          </div>
          <div className={styles.span3}>
            <MedViewFilterStandartInput label="Тип" placeholder="1" />
          </div>
          <div className={styles.span3}>
            <MedViewFilterStandartInput label="ЕНП" placeholder="0000000000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralFiltersGroup;
