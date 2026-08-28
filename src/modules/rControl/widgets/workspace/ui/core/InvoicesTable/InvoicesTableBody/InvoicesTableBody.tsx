import { TableSkeleton } from "../../../../../../../../shared/ui/TableSkeleton/TableSkeleton";
import type { InvoiceListItemDto } from "../../../../model/types/core/results/GetInvoiceListItemsResult";
import dayjs from "dayjs";

interface InvoicesTableBodyProps {
  invoices: InvoiceListItemDto[];
  selectedInvoiceUid: number | null;
  isPending: boolean;
  pageSize: number;
  selectInvoice: (invoiceUid: number | null) => void;
}

export const InvoicesTableBody = ({
  invoices,
  selectedInvoiceUid,
  isPending,
  pageSize,
  selectInvoice,
}: InvoicesTableBodyProps) => {
  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>№ счета</th>
            <th>Дата счета</th>
            <th>Сумма, ₽</th>
            <th>Случаев</th>
            <th className="thCenter">Статус</th>
          </tr>
        </thead>
        <tbody>
          {isPending ? (
            <TableSkeleton columns={5} rows={pageSize} />
          ) : (
            invoices.map((invoice) => (
              <tr
                className={
                  invoice.invoiceUid === selectedInvoiceUid ? "selectedRow" : ""
                }
                key={invoice.invoiceUid}
                onClick={() => selectInvoice(invoice.invoiceUid)}
              >
                <td>{invoice.number}</td>
                <td>{dayjs(invoice.billingDate).format("DD.MM.YYYY")}</td>
                <td>{invoice.amount}</td>
                <td>{invoice.medicalCasesCount}</td>
                <td className="tdCenter">{invoice.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
