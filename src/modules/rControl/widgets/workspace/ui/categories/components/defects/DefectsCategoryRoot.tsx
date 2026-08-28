import { CategoryLineHeader } from "../../../../../../../../shared/ui/CategoryLineHeader/CategoryLineHeader";
import { DataState } from "../../../../../../../../shared/ui/DataState/DataState";
import { useWorkspaceStore } from "../../../../model/store/useWorkspaceStore";
import { DefectsRoot } from "./defects/DefectsRoot/DefectsRoot";
import { MedicalSanctionsSection } from "./medicalSanctions/MedicalSanctionsSection/MedicalSanctionsSection";
import styles from "./styles.module.scss";

const DefectsCategoryRoot = () => {
  const { selectedMedicalCaseUid } = useWorkspaceStore();

  return (
    <section className={styles.defectsRoot}>
      <div className={styles.categoryLine}>
        <CategoryLineHeader
          number={1}
          title="Данные по медицинскому случаю"
          description="Все, что относится к медицинскому случаю в рамках категории"
        />
        {selectedMedicalCaseUid === null ? (
          <DataState
            title="Выберите медицинский случай"
            description="После выбора станут доступны данные о пациенте и СМО"
            variant="waiting"
          />
        ) : (
          <div className={styles.defectsGroup}>
            <DefectsRoot />
            <MedicalSanctionsSection />
          </div>
        )}
      </div>
    </section>
  );
};

export default DefectsCategoryRoot;
