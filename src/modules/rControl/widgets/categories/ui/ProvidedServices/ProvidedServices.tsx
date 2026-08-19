import { CategoryLineHeader } from "../../../../../../shared/ui/CategoryLineHeader/CategoryLineHeader";
import { useWorkspaceStore } from "../../../workspace/model/store/useWorkspaceStore";
import { ProvidedServicesTable } from "./ProvidedServices/ProvidedServicesTable";
import { useFiltersStore } from "../../../filters/model/store/useFiltersStore";
import styles from "./styles.module.scss";
import { MedicalDevicesTable } from "./MedicalDevices/MedicalDevicesTable";

const ProvidedServices = () => {
  const { targetDb } = useFiltersStore();
  const {
    selectedMedicalCaseUid,
    selectedProvidedServiceUid,
    selectProvidedService,
  } = useWorkspaceStore();

  return (
    <section className={styles.providedServicesRoot}>
      <div className={styles.categoryLine}>
        <CategoryLineHeader
          number={1}
          title="Данные по медицинскому случаю"
          description="Все, что относится к медицинскому случаю в рамках категории"
        />
        <ProvidedServicesTable
          medicalCaseUid={selectedMedicalCaseUid}
          targetDb={targetDb}
          selectProvidedService={selectProvidedService}
          selectedProvidedServiceUid={selectedProvidedServiceUid}
        />
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
