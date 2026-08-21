import { useMedicalCasesListItemsQuery } from "../../../../model/queries/core/useMedicalCasesListItemsQuery";
import { MedicalCasesTableHeader } from "../MedicalCasesTableHeader/MedicalCasesTableHeader";
import { MedicalCasesTableBody } from "../MedicalCasesTableBody/MedicalCasesTableBody";
import { useWorkspaceStore } from "../../../../model/store/useWorkspaceStore";
import { useFiltersStore } from "../../../../../filters/model/store/useFiltersStore";
import { DataState } from "../../../../../../../../shared/ui/DataState/DataState";
import { Divider } from "../../../../../../../../components/ui/Divider/Divider";
import styles from "./styles.module.scss";

export const MedicalCasesTableRoot = () => {
  const { targetDb } = useFiltersStore();
  const {
    selectedCompletedCaseUid,
    selectedMedicalCaseUid,
    selectMedicalCase,
  } = useWorkspaceStore();
  const {
    data: medicalCases,
    isPending,
    isError,
    error,
  } = useMedicalCasesListItemsQuery(selectedCompletedCaseUid, targetDb);

  const isReady = selectedCompletedCaseUid !== null && targetDb !== null;

  return (
    <section className={styles.medicalCasesTableRoot}>
      <MedicalCasesTableHeader />
      <Divider />
      {!isReady ? (
        <DataState
          title="Выберите законченный случай"
          description="Кликните на строку в таблице законченных случаев для отображение случаев"
          variant="waiting"
        />
      ) : isError ? (
        <DataState
          title="Невероятная ошибка"
          description={error.message}
          variant="error"
        />
      ) : medicalCases?.length === 0 && !isPending ? (
        <DataState
          title="Данных не найдено"
          description="Не найдены медицинские случаи по выбранному законченному случаю"
          variant="error"
        />
      ) : (
        <MedicalCasesTableBody
          isPending={isPending}
          medicalCases={medicalCases ?? []}
          selectMedicalCase={selectMedicalCase}
          selectedMedicalCaseUid={selectedMedicalCaseUid}
        />
      )}
    </section>
  );
};
