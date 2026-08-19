import { useFiltersStore } from "../../../filters/model/store/useFiltersStore";
import { useWorkspaceStore } from "../../../workspace/model/store/useWorkspaceStore";
import { DefectsTable } from "./Defects/DefectsTable";
import { MedicalSanctionsTable } from "./MedicalSanctions/MedicalSanctionsTable";
import styles from "./styles.module.scss";

const Defects = () => {
  const { targetDb } = useFiltersStore();
  const {
    selectedMedicalCaseUid,
    defectsTablePagination,
    setDefectsTablePagination,
  } = useWorkspaceStore();

  const onPageChange = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    page: number,
  ) => {
    if (page >= 0) {
      setDefectsTablePagination({ page: page });
    }
  };

  const onRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const pageSize = parseInt(event.target.value, 10);

    setDefectsTablePagination({
      pageSize: pageSize,
      page: 0,
    });
  };

  return (
    <section className={styles.defectsRoot}>
      <div className={styles.categoryLine}>
        <DefectsTable
          medicalCaseUid={selectedMedicalCaseUid}
          targetDb={targetDb}
          page={defectsTablePagination.page}
          pageSize={defectsTablePagination.pageSize}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
        />

        <MedicalSanctionsTable
          medicalCaseUid={selectedMedicalCaseUid}
          targetDb={targetDb}
        />
        
      </div>
    </section>
  );
};

export default Defects;
