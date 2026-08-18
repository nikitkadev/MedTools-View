import { CardState } from "../../../../../../shared/ui/CardState/CardState";
import { CategoryLineHeader } from "../../../../../../shared/ui/CategoryLineHeader/CategoryLineHeader";
import { useFiltersStore } from "../../../filters/model/store/useFiltersStore";
import { useWorkspaceStore } from "../../../workspace/model/store/useWorkspaceStore";
import { useClinicalGroupQuery } from "../../model/queries/ClinicalGroups/useClinicalGroupQuery";
import { useHighTechMedicalCareQuery } from "../../model/queries/ClinicalGroups/useHighTechMedicalCareQuery";
import { ClinicalGroupsCard } from "./ClinicalGroups/ClinicalGroupsCard";
import { ClinicalGroupsCardSkeleton } from "./ClinicalGroups/ClinicalGroupsCardSkeleton";
import { HighTechMedicalCareCard } from "./HighTechMedicalCare/HighTechMedicalCareCard";
import { HighTechMedicalCareCardSkeleton } from "./HighTechMedicalCare/HighTechMedicalCareCardSkeleton";
import styles from "./styles.module.scss";

const ClinicalGroups = () => {
  const { targetDb } = useFiltersStore();
  const { selectedMedicalCaseUid } = useWorkspaceStore();
  const {
    data: clinicalGroup,
    isLoading: isClinicalGroupLoading,
    isError: isClinicalGroupError,
    error: clinicalGroupError,
  } = useClinicalGroupQuery(selectedMedicalCaseUid, targetDb);
  const {
    data: highTechMedicalCare,
    isLoading: isHighTechMedicalCareLoading,
    isError: isHighTechMedicalCareError,
    error: highTechMedicalCareError,
  } = useHighTechMedicalCareQuery(selectedMedicalCaseUid, targetDb);

  return (
    <section className={styles.clinicalGroupsRoot}>
      <div className={styles.categoryLine}>
        <CategoryLineHeader
          number={1}
          title="Данные по медицинскому случаю"
          description="Все, что относится к медицинскому случаю в рамках категории"
        />
        <div className={styles.twoGridLine}>
          {isClinicalGroupLoading ? (
            <ClinicalGroupsCardSkeleton />
          ) : isClinicalGroupError ? (
            <CardState
              headline="Клиническая группа"
              title="Ошибка загрузки данных"
              description={clinicalGroupError.message}
            />
          ) : !clinicalGroup ? (
            <CardState
              headline="Клиническая группа"
              title="Данные не найдены"
              description="Не удалось найти данных о КСГ/КПГ"
            />
          ) : (
            <ClinicalGroupsCard clinicalGroup={clinicalGroup} />
          )}

          {isHighTechMedicalCareLoading ? (
            <HighTechMedicalCareCardSkeleton />
          ) : isHighTechMedicalCareError ? (
            <CardState
              headline="ВМП"
              title="Ошибка загрузки данных"
              description={highTechMedicalCareError.message}
            />
          ) : !highTechMedicalCare ? (
            <CardState
              headline="ВМП"
              title="Данные не найдены"
              description="Не удалось найти данные о ВМП"
            />
          ) : (
            <HighTechMedicalCareCard
              highTechMedicalCare={highTechMedicalCare}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ClinicalGroups;
