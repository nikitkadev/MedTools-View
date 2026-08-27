import { CategoryLineHeader } from "../../../../../../../../../shared/ui/CategoryLineHeader/CategoryLineHeader";
import { useWorkspaceStore } from "../../../../../model/store/useWorkspaceStore";
import { useFiltersStore } from "../../../../../../filters/model/store/useFiltersStore";
import styles from "./styles.module.scss";
import { MedicalDevicesTable } from "../MedicalDevicesTable/MedicalDevicesTable";
import { ProvidedServicesSection } from "../providedServices/ProvidedServicesSection/ProvidedServicesSection";

const ProvidedServices = () => {
  const { targetDb } = useFiltersStore();
  const { selectedProvidedServiceUid } = useWorkspaceStore();

  return (
    <section className={styles.providedServicesRoot}>
      <div className={styles.categoryLine}>
        <CategoryLineHeader
          number={1}
          title="Данные по медицинскому случаю"
          description="Все, что относится к медицинскому случаю в рамках категории"
        />
        <ProvidedServicesSection />
      </div>
      <div className={styles.categoryLine}>
        <CategoryLineHeader
          number={2}
          title="Данные по оказанной услуге"
          description="Все, что относится к оказанной услуге в рамках категории"
        />
        <MedicalDevicesTable
          providedServiceUid={selectedProvidedServiceUid}
          targetDb={targetDb}
        />
      </div>
    </section>
  );
};

export default ProvidedServices;
