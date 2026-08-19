import { useFiltersStore } from "../../../filters/model/store/useFiltersStore";
import { useWorkspaceStore } from "../../../workspace/model/store/useWorkspaceStore";
import { PrescriptionsTable } from "./Prescriptions/PrescriptionsTable";
import { ReferralsTable } from "./Referrals/ReferralsTable";
import styles from "./styles.module.scss";

const Prescriptions = () => {
  const { targetDb } = useFiltersStore();
  const { selectedMedicalCaseUid } = useWorkspaceStore();

  return (
    <section className={styles.prescriptionsRoot}>
      <PrescriptionsTable
        medicalCaseUid={selectedMedicalCaseUid}
        targetDb={targetDb}
      />
      <ReferralsTable
        medicalCaseUid={selectedMedicalCaseUid}
        targetDb={targetDb}
      />
    </section>
  );
};

export default Prescriptions;
