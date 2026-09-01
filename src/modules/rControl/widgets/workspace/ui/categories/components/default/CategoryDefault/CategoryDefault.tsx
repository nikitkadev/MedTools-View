import { DataState } from "../../../../../../../../../shared/ui/DataState/DataState";
import styles from "./styles.module.scss";

const CategoryDefault = () => {
  return (
    <section className={styles.categoryDefaultRoot}>
      <DataState
        variant="waiting"
        title="Укажите категорию"
        description="Выберите интересующую категорию из представленного списка для отображения более подробной информации по медицинскому случаю"
      />
    </section>
  );
};

export default CategoryDefault;
