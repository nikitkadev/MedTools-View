import { useMedViewStore } from "../../../model/stores/useMedViewStore";
import { AppButton } from "../../../../../../components/ui/AppButton/AppButton";
import { Divider } from "../../../../../../components/ui/Divider/Divider";
import AddIcon from "@mui/icons-material/Add";
import styles from "./styles.module.scss";

export const FiltersPanel = () => {
  const { selectedfilterGroupId, selectFilterGroup } = useMedViewStore();

  return (
    <section className={styles.filtersPanelRoot}>
      <div className={styles.filtersList}>
        <header className={styles.filtersListHeader}>
          <h2>Фильтры</h2>
        </header>
        <ul>
          <li
            className={
              selectedfilterGroupId === "persons"
                ? styles.selectedRow
                : styles.noneSelected
            }
            onClick={() => selectFilterGroup("persons")}
          >
            <div className={styles.namingGroup}>
              <AddIcon />
              <p>Персональные данные</p>
            </div>
          </li>

          <li
            className={
              selectedfilterGroupId === "case-details"
                ? styles.selectedRow
                : styles.noneSelected
            }
            onClick={() => selectFilterGroup("case-details")}
          >
            <div className={styles.namingGroup}>
              <AddIcon />
              <p>Детали медицинского случая</p>
            </div>
          </li>

          <li
            className={
              selectedfilterGroupId === "oncology"
                ? styles.selectedRow
                : styles.noneSelected
            }
            onClick={() => selectFilterGroup("oncology")}
          >
            <div className={styles.namingGroup}>
              <AddIcon />
              <p>Онкология</p>
            </div>
          </li>
          <li
            className={
              selectedfilterGroupId === "prescriptions"
                ? styles.selectedRow
                : styles.noneSelected
            }
            onClick={() => selectFilterGroup("prescriptions")}
          >
            <div className={styles.namingGroup}>
              <AddIcon />
              <p>Назначения и направления</p>
            </div>
          </li>
          <li
            className={
              selectedfilterGroupId === "clinical-groups"
                ? styles.selectedRow
                : styles.noneSelected
            }
            onClick={() => selectFilterGroup("clinical-groups")}
          >
            <div className={styles.namingGroup}>
              <AddIcon />
              <p>Клинические группы и ВМП</p>
            </div>
          </li>
          <li
            className={
              selectedfilterGroupId === "provided-services"
                ? styles.selectedRow
                : styles.noneSelected
            }
            onClick={() => selectFilterGroup("provided-services")}
          >
            <div className={styles.namingGroup}>
              <AddIcon />
              <p>Оказанные услуги</p>
            </div>
          </li>
          <li
            className={
              selectedfilterGroupId === "sanctions"
                ? styles.selectedRow
                : styles.noneSelected
            }
            onClick={() => selectFilterGroup("sanctions")}
          >
            <div className={styles.namingGroup}>
              <AddIcon />
              <p>Санкции</p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.footer}>
        <Divider />
        <div className={styles.actionsField}>
          <AppButton size="md" variant="secondary">
            Сбросить фильтры
          </AppButton>
        </div>
      </div>
    </section>
  );
};
