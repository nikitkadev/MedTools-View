import { CategoryLineHeader } from "../../../../../../../../shared/ui/CategoryLineHeader/CategoryLineHeader";
import { DataState } from "../../../../../../../../shared/ui/DataState/DataState";
import { useWorkspaceStore } from "../../../../model/store/useWorkspaceStore";
import { PrescriptionsSection } from "./prescriptions/PrescriptionsSection/PrescriptionsSection";
import { ReferralsRoot } from "./referrals/ReferralsRoot/ReferralsRoot";
import styles from "./styles.module.scss";

const PrescriptionsCategoryRoot = () => {
  const { selectedMedicalCaseUid } = useWorkspaceStore();

  return (
    <section className={styles.prescriptionsRoot}>
      <div className={styles.categoryLine}>
        <CategoryLineHeader
          number={1}
          title="Данные по медицинскому случаю"
          description="Все, что относится к медицинскому случаю в рамках категории"
        />
        {selectedMedicalCaseUid === null ? (
          <DataState
            title="Выберите медицинский случай"
            description="Нажмите на карточку медицинского случая для отображения данных о назначениях и направлениях"
            variant="waiting"
          />
        ) : (
          <div className={styles.prescriptionsGroup}>
            <PrescriptionsSection />
            <ReferralsRoot />
          </div>
        )}
      </div>
    </section>
  );
};

export default PrescriptionsCategoryRoot;
