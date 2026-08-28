import { CategoryLineHeader } from "../../../../../../../../shared/ui/CategoryLineHeader/CategoryLineHeader";
import { ProvidedServicesSection } from "./providedServices/ProvidedServicesSection/ProvidedServicesSection";
import { MedicalDevicesRoot } from "./medicalDevices/MedicalDevicesRoot/MedicalDevicesRoot";
import { DataState } from "../../../../../../../../shared/ui/DataState/DataState";
import { useWorkspaceStore } from "../../../../model/store/useWorkspaceStore";
import styles from "./styles.module.scss";
import { Divider } from "../../../../../../../../components/ui/Divider/Divider";

const ProvidedServices = () => {
  const { selectedProvidedServiceUid, selectedMedicalCaseUid } =
    useWorkspaceStore();

  return (
    <section className={styles.providedServicesRoot}>
      <div className={styles.categoryLine}>
        <CategoryLineHeader
          number={1}
          title="Данные по медицинскому случаю"
          description="Все, что относится к медицинскому случаю в рамках категории"
        />
        {selectedMedicalCaseUid === null ? (
          <DataState
            title="Выберите медицинский случай"
            description="После выбора станет доступна информация об оказанных услугах"
            variant="waiting"
          />
        ) : (
          <ProvidedServicesSection />
        )}
      </div>
      <Divider />
      <div className={styles.categoryLine}>
        <CategoryLineHeader
          number={2}
          title="Данные по оказанной услуге"
          description="Все, что относится к оказанной услуге в рамках категории"
        />
        {selectedProvidedServiceUid === null ? (
          <DataState
            title="Выберите оказанную услугу"
            description="После выбора станет доступна информация о медицинских изделиях"
            variant="waiting"
          />
        ) : (
          <MedicalDevicesRoot />
        )}
      </div>
    </section>
  );
};

export default ProvidedServices;
