import type { MedicalCaseDetailsFiltersGroupDraft } from "../../../../model/types/FiltersDraft";
import { MedViewFilterStandartInput } from "../../../../../../../shared/ui/medView/inputs/MedViewFilterStandartInput/MedViewFilterStandartInput";
import styles from "./styles.module.scss";
import { MedicalCaseDetailsFiltersSubgroup } from "./MedicalCaseDetailsFiltersSubgroup/MedicalCaseDetailsFiltersSubgroup";

interface MedicalCaseDetailsFiltersGroupProps {
  medicalCaseDetailsFiltersGroupDraft: MedicalCaseDetailsFiltersGroupDraft;
  setMedicalCaseDetailsFiltersGroupDraft: (
    medicalCaseDetailsFiltersGroupDraft: MedicalCaseDetailsFiltersGroupDraft,
  ) => void;
}

const MedicalCaseDetailsFiltersGroup = ({
  medicalCaseDetailsFiltersGroupDraft,
  setMedicalCaseDetailsFiltersGroupDraft,
}: MedicalCaseDetailsFiltersGroupProps) => {
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

      <MedicalCaseDetailsFiltersSubgroup
        medicalCaseDetailsFiltersSubgroupDraft={
          medicalCaseDetailsFiltersGroupDraft.medicalCaseDetails
        }
        setMedicalCaseDetailsFiltersSubgroupDraft={(medicalCaseDetails) =>
          setMedicalCaseDetailsFiltersGroupDraft({
            ...medicalCaseDetailsFiltersGroupDraft,
            medicalCaseDetails: medicalCaseDetails,
          })
        }
      />

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
