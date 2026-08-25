import { resolveDataState } from "../../../../../../../../../../shared/helpers/resolveDataStatel";
import { DataState } from "../../../../../../../../../../shared/ui/DataState/DataState";
import { useFiltersStore } from "../../../../../../../filters/model/store/useFiltersStore";
import { useContraindicationsQuery } from "../../../../../../model/queries/categories/oncology/useContraindicationsQuery";
import { ContraindicationsListBody } from "../ContraindicationsListBody/ContraindicationsListBody";
import { ContraindicationsListHeader } from "../ContraindicationsListHeader/ContraindicationsListHeader";
import styles from "./styles.module.scss";

interface ContraindicationsListRootProps {
  oncologyCaseUid: number | null;
}

export const ContraindicationsListRoot = ({
  oncologyCaseUid,
}: ContraindicationsListRootProps) => {
  const { targetDb } = useFiltersStore();
  const {
    data: contraindications,
    isLoading,
    isPending,
    isError,
    isSuccess,
    error,
  } = useContraindicationsQuery(oncologyCaseUid, targetDb);

  const dataState = resolveDataState({
    isEnabled: oncologyCaseUid !== null && targetDb !== null,
    isLoading: isLoading,
    isError: isError,
    isSuccess: isSuccess,
    isEmpty: contraindications?.length === 0 && isSuccess,
  });

  return (
    <section className={styles.contraindicationsListRoot}>
      <ContraindicationsListHeader />
      {dataState === "waiting" ? (
        <DataState
          title="Выберите онкологический случай"
          description="Кликните по карточке онкологического случая для отображение информации о консилиумах"
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
          description="Данный онкологический случай не содержит информации о противопоказаниях"
          variant="empty"
        />
      ) : (
        <ContraindicationsListBody
          contraindications={contraindications ?? []}
          isPending={isPending}
        />
      )}
    </section>
  );
};
