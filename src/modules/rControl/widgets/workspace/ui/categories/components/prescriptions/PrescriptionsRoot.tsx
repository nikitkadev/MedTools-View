import { PrescriptionsSection } from "./prescriptions/PrescriptionsSection/PrescriptionsSection";
import { ReferralsRoot } from "./referrals/ReferralsRoot/ReferralsRoot";
import styles from "./styles.module.scss";

const Prescriptions = () => {
  return (
    <section className={styles.prescriptionsRoot}>
      <PrescriptionsSection />
      <ReferralsRoot />
    </section>
  );
};

export default Prescriptions;
