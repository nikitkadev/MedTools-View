import { CardState } from "../../../../../../../../../shared/ui/CardState/CardState";
import { useFiltersStore } from "../../../../../../filters/model/store/useFiltersStore";
import { useWorkspaceStore } from "../../../../../model/store/useWorkspaceStore";
import { useMedicalCaseDetailsQuery } from "../../../../../model/queries/categories/medicalCaseDetails/useMedicalCaseDetailsQuery";
import { CompletedCaseCardSkeleton } from "../CompletedCaseCard/CompletedCaseCardSkeleton";
import { MedicalCaseCardSkeleton } from "../MedicalCaseCard/MedicalCaseCardSkeleton";
import { MedicalCaseCard } from "../MedicalCaseCard/MedicalCaseCard";
import { useCompletedCaseDetailsQuery } from "../../../../../model/queries/categories/medicalCaseDetails/useCompletedCaseDetailsQuery";
import { CompletedCaseCard } from "../CompletedCaseCard/CompletedCaseCard";
import styles from "./styles.module.scss";

const MedicalCaseDetails = () => {
  const { targetDb } = useFiltersStore();
  const { selectedCompletedCaseUid, selectedMedicalCaseUid } =
    useWorkspaceStore();
  const {
    data: medicalCaseDetails,
    isLoading: isMedicalCaseDetailsLoading,
    isError: isMedicalCaseDetailsError,
  } = useMedicalCaseDetailsQuery(selectedMedicalCaseUid, targetDb);

  const {
    data: completedCaseDetails,
    isLoading: isCompletedCaseDetailsLoading,
    isError: isCompletedCaseDetailsError,
  } = useCompletedCaseDetailsQuery(selectedCompletedCaseUid, targetDb);

  return (
    <section className={styles.medicalCaseDetailsRoot}>
      {isMedicalCaseDetailsLoading ? (
        <MedicalCaseCardSkeleton />
      ) : isMedicalCaseDetailsError ? (
        <CardState
          headline="Детали медицинского случая"
          title="Ошибка данных"
          description="Не удалось получить данные из-за внутренней ошибки"
        />
      ) : !medicalCaseDetails ? (
        <CardState
          headline="Детали медицинского случая"
          title="Данные не найдены"
          description="Не удалось получить детальную информацию"
        />
      ) : (
        <MedicalCaseCard medicalCaseDetails={medicalCaseDetails} />
      )}

      {isCompletedCaseDetailsLoading ? (
        <CompletedCaseCardSkeleton />
      ) : isCompletedCaseDetailsError ? (
        <CardState
          headline="Детали законченного случая"
          title="Ошибка данных"
          description="Не удалось получить данные из-за внутренней ошибки"
        />
      ) : !completedCaseDetails ? (
        <CardState
          headline="Детали законченного случая"
          title="Данные не найдены"
          description="Не удалось получить детальную информацию"
        />
      ) : (
        <CompletedCaseCard completedCaseDetails={completedCaseDetails} />
      )}
    </section>
  );
};

export default MedicalCaseDetails;
