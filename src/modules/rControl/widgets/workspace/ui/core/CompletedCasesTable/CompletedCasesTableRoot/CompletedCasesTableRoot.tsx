import { Divider } from "../../../../../../../../components/ui/Divider/Divider";
import { resolveDataState } from "../../../../../../../../shared/helpers/resolveDataState";
import { DataState } from "../../../../../../../../shared/ui/DataState/DataState";
import { useFiltersStore } from "../../../../../filters/model/store/useFiltersStore";
import { useCompletedCaseListItemsQuery } from "../../../../model/queries/core/useCompletedCaseListItemsQuery";
import { useWorkspaceStore } from "../../../../model/store/useWorkspaceStore";
import { CompletedCasesTableBody } from "../CompletedCasesTableBody/CompletedCasesTableBody";
import { CompletedCasesTableHeader } from "../CompletedCasesTableHeader/CompletedCasesTableHeader";
import styles from "./styles.module.scss";

export const CompletedCasesTableRoot = () => {
  const {
    selectedInvoiceUid,
    selectedCompletedCaseUid,
    completedCasesTablePagination,
    completedCasesTableSearchString,
    selectCompletedCase,
    setCompletedCasesTablePagination,
  } = useWorkspaceStore();

  const { targetDb } = useFiltersStore();

  const {
    data: getCompletedCasesResult,
    isLoading,
    isPending,
    isFetching,
    isError,
    isSuccess,
    error,
  } = useCompletedCaseListItemsQuery({
    invoiceUid: selectedInvoiceUid,
    page: completedCasesTablePagination.page,
    pageSize: completedCasesTablePagination.pageSize,
    targetDb: targetDb,
    searchString: completedCasesTableSearchString,
  });

  const onPageChange = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    page: number,
  ) => {
    if (page >= 0) {
      setCompletedCasesTablePagination({
        page: page,
      });
    }
  };

  const onRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newPageSize = parseInt(event.target.value, 10);
    setCompletedCasesTablePagination({
      pageSize: newPageSize,
      page: 0,
    });
  };

  const completedCases = getCompletedCasesResult?.completedCases ?? [];

  const dataState = resolveDataState({
    isEnabled: selectedInvoiceUid !== null && targetDb !== null,
    isEmpty: completedCases.length === 0,
    isError: isError,
    isLoading: isLoading,
    isSuccess: isSuccess,
    isFetching: isFetching,
  });

  return (
    <section className={styles.CompletedCasesTableRoot}>
      <CompletedCasesTableHeader
        totalCount={getCompletedCasesResult?.totalCount ?? 0}
        state={dataState}
        pagination={completedCasesTablePagination}
        onRowsPerPageChange={onRowsPerPageChange}
        onPageChange={onPageChange}
        isLoading={isLoading}
        disabled={isFetching}
      />
      <Divider />

      {dataState === "waiting" ? (
        <DataState
          variant="waiting"
          title="Выберите счет"
          description="Нажмите на строку в таблице счетов для просмотра законченных случаев"
        />
      ) : dataState === "error" ? (
        <DataState
          variant="error"
          title="Ошибка данных"
          description={error?.message ?? "Неизвестная ошибка"}
        />
      ) : dataState === "empty" ? (
        <DataState
          variant="empty"
          title="Данных не найдено"
          description="Законченные случаи не найдены по выбранному счету"
        />
      ) : (
        <CompletedCasesTableBody
          isPending={isPending}
          pageSize={completedCasesTablePagination.pageSize}
          completedCases={completedCases}
          selectCompletedCase={selectCompletedCase}
          selectedCompletedCaseUid={selectedCompletedCaseUid}
        />
      )}
    </section>
  );
};
