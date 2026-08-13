import { Divider } from "../../../../../../components/ui/Divider/Divider";
import { AppTablePagination } from "../../../../../../shared/ui/AppTablePagination/AppTablePagination";
import { SearchInput } from "../../../../../../shared/ui/SearchInput/SearchInput";
import { TableSkeleton } from "../../../../../../shared/ui/TableSkeleton/TableSkeleton";
import { TableStateRow } from "../../../../../../shared/ui/TableStateRow/TableStateRow";
import { useFiltersStore } from "../../../filters/model/store/useFiltersStore";
import { useCompletedCaseListItemsQuery } from "../../model/queries/useCompletedCaseListItemsQuery";
import { useWorkspaceStore } from "../../model/store/useWorkspaceStore";
import styles from "./styles.module.scss";

export const CompletedCasesTable = () => {
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

  const completedCases = getCompletedCasesResult?.completedCases;

  return (
    <section className={styles.CompletedCasesTableRoot}>
      <header className={styles.CompletedCasesTableRootHeader}>
        <h2>Законченные случаи</h2>
        <SearchInput />
        <AppTablePagination
          pagination={completedCasesTablePagination}
          totalCount={getCompletedCasesResult?.totalCount ?? 0}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
          disabled={isFetching}
        />
      </header>
      <Divider />
      <div className="tableContainer">
        <table>
          <colgroup>
            <col style={{ width: "1.5rem" }} />
            <col style={{ width: "1.5rem" }} />
            <col style={{ width: "3rem" }} />
            <col style={{ width: "3rem" }} />
            <col style={{ width: "3rem" }} />
            <col style={{ width: "1.5rem" }} />
            <col style={{ width: "3rem" }} />
            <col style={{ width: "3rem" }} />
            <col style={{ width: "2rem" }} />
            <col style={{ width: "2rem" }} />
            <col style={{ width: "2rem" }} />
          </colgroup>
          <thead>
            <tr>
              <th>№ поз.</th>
              <th>№ зап.</th>
              <th>Фамилия</th>
              <th>Имя</th>
              <th>Отчество</th>
              <th>Усл. ок.</th>
              <th>С. полиса</th>
              <th>Н. полиса</th>
              <th>Предъявлено</th>
              <th>Принято</th>
              <th>Принято СМО</th>
            </tr>
          </thead>
          <tbody>
            {selectedInvoiceUid === null ? (
              <TableStateRow
                colSpan={11}
                title="Выберите счет"
                description="Кликните по счету в таблице сверху, а дальше произойдет магия!"
              />
            ) : isLoading ? (
              <TableSkeleton
                columns={11}
                rows={completedCasesTablePagination.pageSize}
              />
            ) : isError ? (
              <TableStateRow
                colSpan={11}
                title="Упс-с, произошла ошибка"
                description={error.message}
              />
            ) : (
              completedCases?.map((completedCase) => (
                <tr
                  className={
                    completedCase.completedCaseUid === selectedCompletedCaseUid
                      ? "selectedRow"
                      : ""
                  }
                  key={completedCase.completedCaseUid}
                  onClick={() =>
                    selectCompletedCase(completedCase.completedCaseUid)
                  }
                >
                  <td>{completedCase.entryPositionNumber}</td>
                  <td>{completedCase.entryNumber}</td>
                  <td>{completedCase.patientLastName}</td>
                  <td>{completedCase.patientFirstName}</td>
                  <td>{completedCase.patientMiddleName}</td>
                  <td>{completedCase.medicalCareConditions}</td>
                  <td>{completedCase.insurancePolicySeries ?? "-"}</td>
                  <td>{completedCase.insurancePolicyNumber}</td>
                  <td>{completedCase.amountBilled}</td>
                  <td>{completedCase.approvedAmount ?? "-"}</td>
                  <td>{completedCase.insuranceCompanyApprovedAmount ?? "-"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
