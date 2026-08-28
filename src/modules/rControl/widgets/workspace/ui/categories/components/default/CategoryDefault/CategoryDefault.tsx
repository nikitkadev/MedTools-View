import { DataState } from "../../../../../../../../../shared/ui/DataState/DataState";
import styles from "./styles.module.scss";

const CategoryDefault = () => {
  return (
    <section className={styles.categoryDefaultRoot}>
      <DataState
        variant="waiting"
        title="Выберите категорию"
        description="Укажите категорию для просмотра расширенной информации о медицинском случае"
      />
    </section>
  );
};

export default CategoryDefault;
