import { useConsultationsQuery } from "../../../../../../model/queries/categories/oncology/useConsultationsQuery";
import { ConsultationsListHeader } from "../ConsultationsListHeader/ConsultationsListHeader";
import { useFiltersStore } from "../../../../../../../filters/model/store/useFiltersStore";
import { ConsultationsListBody } from "../ConsultationsListBody/ConsultationsListBody";
import { useWorkspaceStore } from "../../../../../../model/store/useWorkspaceStore";
import { resolveDataState } from "../../../../../../../../../../shared/helpers/resolveDataStatel";
import { DataState } from "../../../../../../../../../../shared/ui/DataState/DataState";
import styles from "./styles.module.scss";

export const ConsultationsListRoot = () => {
  const { selectedMedicalCaseUid } = useWorkspaceStore();
  const { targetDb } = useFiltersStore();
  const {
    data: consultations,
    isPending,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useConsultationsQuery(selectedMedicalCaseUid, targetDb);

  const dataState = resolveDataState({
    isEnabled: selectedMedicalCaseUid !== null && targetDb !== null,
    isLoading: isLoading,
    isEmpty: consultations?.length === 0 && isSuccess,
    isError: isError,
    isSuccess: isSuccess,
  });

  return (
    <section className={styles.consultationsListRoot}>
      <ConsultationsListHeader dataState={dataState} />
      {dataState === "waiting" ? (
        <DataState
          title="Выберите медицинский случай"
          description="Кликните по карточке медицинского случая для отображение информации о консилиумах"
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
          description="Данный медицинский случай не содержит информации о консилиумах"
          variant="empty"
        />
      ) : (
        <ConsultationsListBody
          consultations={consultations ?? []}
          isPending={isPending}
        />
      )}
    </section>
  );
};
