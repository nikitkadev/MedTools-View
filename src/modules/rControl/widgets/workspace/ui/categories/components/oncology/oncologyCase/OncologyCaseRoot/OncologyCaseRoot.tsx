import { resolveDataState } from "../../../../../../../../../../shared/helpers/resolveDataState";
import { DataState } from "../../../../../../../../../../shared/ui/DataState/DataState";
import { useFiltersStore } from "../../../../../../../filters/model/store/useFiltersStore";
import { useOncologyCaseQuery } from "../../../../../../model/queries/categories/oncology/useOncologyCaseQuery";
import { useWorkspaceStore } from "../../../../../../model/store/useWorkspaceStore";
import { OncologyCaseBody } from "../OncologyCaseBody/OncologyCaseBody";
import { OncologyCaseHeader } from "../OncologyCaseHeader/OncologyCaseHeader";

export const OncologyCaseRoot = () => {
  const { targetDb } = useFiltersStore();
  const { selectedMedicalCaseUid } = useWorkspaceStore();
  const {
    data: oncologyCase,
    isLoading,
    isPending,
    isError,
    isSuccess,
    error,
  } = useOncologyCaseQuery(selectedMedicalCaseUid, targetDb);

  const dataState = resolveDataState({
    isEnabled: selectedMedicalCaseUid !== null && targetDb !== null,
    isLoading: isLoading,
    isError: isError,
    isSuccess: isSuccess,
    isEmpty: oncologyCase === null && isSuccess,
  });

  return (
    <section className="cardRoot">
      <OncologyCaseHeader />
      {dataState === "error" ? (
        <DataState
          title="Ошибка данных"
          description={error?.message ?? "Неизвестная ошибка"}
          variant="error"
        />
      ) : dataState === "empty" ? (
        <DataState
          title="Данных не найдено"
          description="Медицинский случай не содержит информации об онкологическом случае"
          variant="empty"
        />
      ) : (
        <OncologyCaseBody oncologyCase={oncologyCase!} isPending={isPending} />
      )}
    </section>
  );
};
