import { Divider } from "../../../../../../../components/ui/Divider/Divider";
import { AppButton } from "../../../../../../../components/ui/AppButton/AppButton";
import AddIcon from "@mui/icons-material/Add";
import styles from "./styles.module.scss";

export const FiltersPanel = () => {
  return (
    <section className={styles.filtersPanelRoot}>
      <header className={styles.filtersPanelHeader}>
        <h2>Фильтры</h2>
      </header>
      <div className={styles.filtersList}>
        <ul>
          <li>
            <div className={styles.namingGroup}>
              <AddIcon />
              <p>Основное</p>
            </div>
          </li>
          <li>
            <div className={styles.namingGroup}>
              <AddIcon />
              <p>Онкология</p>
            </div>
          </li>
          <li>
            <div className={styles.namingGroup}>
              <AddIcon />
              <p>Персональная данные</p>
            </div>
          </li>
          <li>
            <div className={styles.namingGroup}>
              <AddIcon />
              <p>МКБ</p>
            </div>
          </li>
          <li>
            <div className={styles.namingGroup}>
              <AddIcon />
              <p>Диспансеризация</p>
            </div>
          </li>
          <li>
            <div className={styles.namingGroup}>
              <AddIcon />
              <p>Дополнительно</p>
            </div>
          </li>
        </ul>
      </div>
      <Divider />
      <div className={styles.actionsField}>
        <AppButton size="md" variant="secondary">
          Сбросить фильтры
        </AppButton>
      </div>
    </section>
  );
};
