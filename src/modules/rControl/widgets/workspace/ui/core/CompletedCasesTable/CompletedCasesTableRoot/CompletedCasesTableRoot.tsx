import { Divider } from "../../../../../../../../components/ui/Divider/Divider";
import { DataState } from "../../../../../../../../shared/ui/DataState/DataState";
import { useFiltersStore } from "../../../../../filters/model/store/useFiltersStore";
import { useCompletedCaseListItemsQuery } from "../../../../model/queries/core/useCompletedCaseListItemsQuery";
import { useWorkspaceStore } from "../../../../model/store/useWorkspaceStore";
import { CompletedCasesTableBody } from "../CompletedCasesTableBody/CompletedCasesTableBody";
import { CompletedCasesTableHeader } from "../CompletedCasesTableHeader/CompletedCasesTableHeader";
import styles from "./styles.module.scss";

export const CompletedCasesTableRoot = () => {
  const {
    completedCasesTablePagination,
    setCompletedCasesTablePagination,
    selectedInvoiceUid,
    selectedCompletedCaseUid,
    selectCompletedCase,
  } = useWorkspaceStore();

  const { targetDb } = useFiltersStore();

  const {
    data: getCompletedCasesResult,
    isLoading,
    isPending,
    isFetching,
    isError,
    error,
  } = useCompletedCaseListItemsQuery({
    invoiceUid: selectedInvoiceUid,
    page: completedCasesTablePagination.page,
    pageSize: completedCasesTablePagination.pageSize,
    targetDb: targetDb,
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
  const isReady = selectedInvoiceUid !== null && targetDb !== null;

  return (
    <section className={styles.CompletedCasesTableRoot}>
      <CompletedCasesTableHeader
        totalCount={getCompletedCasesResult?.totalCount ?? 0}
        pagination={completedCasesTablePagination}
        onRowsPerPageChange={onRowsPerPageChange}
        onPageChange={onPageChange}
        isLoading={isLoading}
        disabled={isFetching}
      />
      <Divider />
      {!isReady ? (
        <DataState
          variant="waiting"
          title="Выберите счет"
          description="Кликните на строку в таблице счетов для отображения законченных случаев"
        />
      ) : isError ? (
        <DataState
          variant="error"
          title="Невероятная ошибка"
          description={error.message}
        />
      ) : completedCases.length === 0 && !isPending ? (
        <DataState
          variant="empty"
          title="Данных не найдено"
          description="Не найдены законченные случая по выбранному счету"
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
