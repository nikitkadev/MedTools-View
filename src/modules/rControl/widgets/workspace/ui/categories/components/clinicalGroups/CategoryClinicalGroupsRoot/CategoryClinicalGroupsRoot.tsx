import { TreatmentComplexityCoefficientsTable } from "../TreatmentComplexityCoefficientsTable/TreatmentComplexityCoefficientsTable";
import { useHighTechMedicalCareQuery } from "../../../../../model/queries/categories/clinicalGroups/useHighTechMedicalCareQuery";
import { HighTechMedicalCareCardSkeleton } from "../HighTechMedicalCareCard/HighTechMedicalCareCardSkeleton";
import { CategoryLineHeader } from "../../../../../../../../../shared/ui/CategoryLineHeader/CategoryLineHeader";
import { ClassificationCriteriaTable } from "../ClassificationCriteriaTable/ClassificationCriteriaTable";
import { useClinicalGroupQuery } from "../../../../../model/queries/categories/clinicalGroups/useClinicalGroupQuery";
import { ClinicalGroupsCardSkeleton } from "../ClinicalGroupsCard/ClinicalGroupsCardSkeleton";
import { HighTechMedicalCareCard } from "../HighTechMedicalCareCard/HighTechMedicalCareCard";
import { useWorkspaceStore } from "../../../../../model/store/useWorkspaceStore";
import { useFiltersStore } from "../../../../../../filters/model/store/useFiltersStore";
import { CardState } from "../../../../../../../../../shared/ui/CardState/CardState";
import { Divider } from "../../../../../../../../../components/ui/Divider/Divider";
import { ClinicalGroupsCard } from "../ClinicalGroupsCard/ClinicalGroupsCard";
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
      <Divider />
      <div className={styles.categoryLine}>
        <CategoryLineHeader
          number={2}
          title="Данные по клинической группе"
          description="Все, что относится к клинической группе в рамках категории"
        />
        <ClassificationCriteriaTable
          clinicalGroupUid={clinicalGroup?.clinicalGroupUid ?? null}
          targetDb={targetDb}
        />
        <TreatmentComplexityCoefficientsTable
          clinicalGroupUid={clinicalGroup?.clinicalGroupUid ?? null}
          targetDb={targetDb}
        />
      </div>
    </section>
  );
};

export default ClinicalGroups;
