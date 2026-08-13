import { useWorkspaceStore } from "../../model/store/useWorkspaceStore";
import { InvoiceDetails } from "../InvoiceDetails/InvoiceDetails";
import { InvoicesTable } from "../InvoicesTable/InvoicesTable";
import styles from "./styles.module.scss";

export const Workspace = () => {
  const selectedInvoiceUid = useWorkspaceStore(
    (state) => state.selectedInvoiceUid,
  );

  return (
    <section className={styles.workspaceRoot}>
      <div className={styles.invoiceLine}>
        <InvoicesTable />
        {selectedInvoiceUid && <InvoiceDetails />}
      </div>
    </section>
  );
};
