import { resolveDataState } from "../../../../../../../../../../../shared/helpers/resolveDataStatel";
import { DataState } from "../../../../../../../../../../../shared/ui/DataState/DataState";
import { useFiltersStore } from "../../../../../../../../filters/model/store/useFiltersStore";
import { useInjectionDatesQuery } from "../../../../../../../model/queries/categories/oncology/useInjectionDatesQuery";
import { useWorkspaceStore } from "../../../../../../../model/store/useWorkspaceStore";
import { InjectionDatesBody } from "../InjectionDatesBody/InjectionDatesBody";
import { InjectionDatesHeader } from "../InjectionDatesHeader/InjectionDatesHeader";

export const InjectionDatesRoot = () => {
  const { targetDb } = useFiltersStore();
  const { selectedMedicationUid } = useWorkspaceStore();
  const {
    data: injectionDates,
    isLoading,
    isPending,
    isSuccess,
    isError,
    error,
  } = useInjectionDatesQuery(selectedMedicationUid, targetDb);

  const dataState = resolveDataState({
    isEnabled: selectedMedicationUid !== null && targetDb !== null,
    isLoading: isLoading,
    isError: isError,
    isSuccess: isSuccess,
    isEmpty: injectionDates?.length === 0 && isSuccess,
  });

  return (
    <section className="cardRoot">
      <InjectionDatesHeader />
      {dataState === "error" ? (
        <DataState
          title="Ошибка данных"
          description={error?.message ?? "-"}
          variant="error"
        />
      ) : dataState === "empty" ? (
        <DataState
          title="Данных не найдено"
          description="Лекарственный препарат не содержит сведений о дат инъекций"
          variant="empty"
        />
      ) : (
        <InjectionDatesBody
          injectionDates={injectionDates ?? []}
          isPending={isPending}
        />
      )}
    </section>
  );
};
