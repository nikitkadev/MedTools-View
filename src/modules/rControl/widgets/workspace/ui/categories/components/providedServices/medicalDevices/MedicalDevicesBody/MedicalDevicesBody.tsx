import { CardField } from "../../../../../../../../../../shared/ui/CardField/CardField";
import type { MedicalDeviceDto } from "../../../../../../model/types/categories/providedServices/GetMedicalDevicesResult";
import styles from "./styles.module.scss";
import dayjs from "dayjs";

interface MedicalDevicesBodyProps {
  medicalDevices: MedicalDeviceDto[];
  isPending: boolean;
}

export const MedicalDevicesBody = ({
  medicalDevices,
  isPending,
}: MedicalDevicesBodyProps) => {
  return (
    <div className="cardContent">
      <div className={styles.listContainer}>
        {isPending ? (
          <div></div>
        ) : (
          medicalDevices.map((medicalDevice, _index) => (
            <div className={styles.listRow}>
              <div className={styles.number}>
                <p>{_index + 1}</p>
              </div>
              <div className={styles.listRowContent}>
                <CardField
                  label="Дата установки"
                  value={dayjs(medicalDevice.implantationDate).format(
                    "DD.MM.YYYY",
                  )}
                  inline={true}
                />
                <CardField
                  label="Код вида"
                  value={medicalDevice.medicalDeviceTypeCode}
                  inline={true}
                />
                <CardField
                  label="Серийный номер"
                  value={medicalDevice.serialNumber}
                  inline={true}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
