import { resolveDataState } from "../../../../../../../../../../shared/helpers/resolveDataStatel";
import { DataState } from "../../../../../../../../../../shared/ui/DataState/DataState";
import { useFiltersStore } from "../../../../../../../filters/model/store/useFiltersStore";
import { useOncologyCaseQuery } from "../../../../../../model/queries/categories/oncology/useOncologyCaseQuery";
import { useWorkspaceStore } from "../../../../../../model/store/useWorkspaceStore";
import { OncologyCaseCardBody } from "../OncologyCaseCardBody/OncologyCaseCardBody";
import { OncologyCaseCardHeader } from "../OncologyCaseCardHeader/OncologyCaseCardHeader";

export const OncologyCaseCardRoot = () => {
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
      <OncologyCaseCardHeader />
      {dataState === "waiting" ? (
        <DataState
          title="Выберите медицинский случай"
          description="Кликните по карточке медицинского случая для получения данных о онкологическом случае"
          variant="waiting"
        />
      ) : dataState === "error" ? (
        <DataState
          title="Ошибка получения данных"
          description={error?.message ?? "-"}
          variant="error"
        />
      ) : dataState === "empty" ? (
        <DataState
          title="Данных не найдено"
          description="Медицинский случай не содержит информации об онкологическом случае"
          variant="empty"
        />
      ) : (
        <OncologyCaseCardBody
          oncologyCase={oncologyCase!}
          isPending={isPending}
        />
      )}
    </section>
  );
};
