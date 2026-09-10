import AddIcon from "@mui/icons-material/Add";
import styles from "./styles.module.scss";
import { useMedViewStore } from "../../../model/stores/useMedViewStore";
import { Divider } from "@mui/material";
import { AppButton } from "../../../../../../components/ui/AppButton/AppButton";

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
