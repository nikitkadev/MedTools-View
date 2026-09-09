import { MedViewFilterStandartInput } from "../../../../../../../shared/ui/inputs/MedViewFilterStandartInput/MedViewFilterStandartInput";
import styles from "./styles.module.scss";

const MedicalCaseDetailsFiltersGroup = () => {
  return (
    <section className={styles.medicalCaseDetailsFiltersGroup}>
      <header className={styles.medicalCaseDetailsFiltersGroupHeader}>
        <div className={styles.titleGroup}>
          <h2>Фильтрация по медицинскому случаю</h2>
          <p className={styles.description}>
            Все поля, которые относятся к данным по медицинскому и законченному
            случаям
          </p>
        </div>
      </header>
      <div className={styles.medicalCaseDetailsSubgroup}>
        <header className={styles.subgroupHeader}>
          <h3>Детали медицинского случая</h3>
        </header>
        <div className={styles.groupLineGrid}>
          <div className={styles.span6}>
            <MedViewFilterStandartInput label="Профиль" placeholder="00" />
          </div>
          <div className={styles.span3}>
            <MedViewFilterStandartInput
              label="Профиль медицинской помощи"
              placeholder="00"
            />
          </div>
          <div className={styles.span3}>
            <MedViewFilterStandartInput
              label="Профиль койки"
              placeholder="00"
            />
          </div>
        </div>

        <div className={styles.groupLineGrid}>
          <div className={styles.span6}>
            <MedViewFilterStandartInput
              label="Структурное подразделение"
              placeholder="190001"
            />
          </div>
          <div className={styles.span6}>
            <MedViewFilterStandartInput
              label="Место обращения"
              placeholder="00"
            />
          </div>
        </div>

        <div className={styles.groupLineGrid}>
          <div className={styles.span6}>
            <MedViewFilterStandartInput
              label="Цель посещения"
              placeholder="00"
            />
          </div>
          <div className={styles.span6}>
            <MedViewFilterStandartInput
              label="Место проведения профилактического мероприятия"
              placeholder="Место проведения профилактического мероприятия"
            />
          </div>
        </div>

        <div className={styles.groupLineGrid}>
          <div className={styles.span3}>
            <MedViewFilterStandartInput
              label="Период лечения"
              placeholder="01.01.2001 — 01.02.2001"
            />
          </div>
          <div className={styles.span3}>
            <MedViewFilterStandartInput
              label="Номер истории"
              placeholder="Номер истории"
            />
          </div>

          <div className={styles.span3}>
            <MedViewFilterStandartInput
              label="Характер основного заболевания"
              placeholder="Характер основного заболевания"
            />
          </div>

          <div className={styles.span3}>
            <MedViewFilterStandartInput
              label="Специальность лечащего врача"
              placeholder="Специальность лечащего врача"
            />
          </div>
        </div>
      </div>
      <div className={styles.medicalCaseDetailsSubgroup}>
        <header className={styles.subgroupHeader}>
          <h3>Детали законченного случая</h3>
        </header>
        <div className={styles.groupLineGrid}>
          <div className={styles.span4}>
            <MedViewFilterStandartInput
              label="Условия оказания медицинской помощи"
              placeholder="V006"
            />
          </div>
          <div className={styles.span4}>
            <MedViewFilterStandartInput
              label="Вид медицинской помощи"
              placeholder="V008"
            />
          </div>
          <div className={styles.span4}>
            <MedViewFilterStandartInput
              label="Форма оказания медицинской помощи"
              placeholder="V014"
            />
          </div>
        </div>

        <div className={styles.groupLineGrid}>
          <div className={styles.span6}>
            <MedViewFilterStandartInput
              label="Медицинская организация"
              placeholder="190001"
            />
          </div>
          <div className={styles.span6}>
            <MedViewFilterStandartInput
              label="Направившая медицинская организация"
              placeholder="190001"
            />
          </div>
        </div>

        <div className={styles.groupLineGrid}>
          <div className={styles.span3}>
            <MedViewFilterStandartInput
              label="Период лечения"
              placeholder="01.01.2001 — 01.02.2001"
            />
          </div>
          <div className={styles.span3}>
            <MedViewFilterStandartInput
              label="Результат диспансеризации"
              placeholder="Результат диспансеризации"
            />
          </div>
          <div className={styles.span3}>
            <MedViewFilterStandartInput
              label="Результат обращения/ госпитализации"
              placeholder="Результат обращения/ госпитализации"
            />
          </div>
          <div className={styles.span3}>
            <MedViewFilterStandartInput
              label="Исход заболевания"
              placeholder="Исход заболевания"
            />
          </div>
        </div>
        <div className={styles.groupLineGrid}>
          <div className={styles.span6}>
            <MedViewFilterStandartInput
              label="Код способа оплаты медицинской помощи"
              placeholder="Код способа оплаты медицинской помощи"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalCaseDetailsFiltersGroup;
