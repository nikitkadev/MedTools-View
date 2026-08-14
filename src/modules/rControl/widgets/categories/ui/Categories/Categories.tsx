import { useCategoriesStore } from "../../model/stores/useCategoriesStore";
import { CategoryPanel } from "../CategoryPanel/CategoryPanel";
import { CategoryRender } from "../CategoryRender/CategoryRender";
import styles from "./styles.module.scss";

export const Categories = () => {
  const { targetCategory } = useCategoriesStore();

  return (
    <section className={styles.categoriesRoot}>
      <CategoryPanel />
      <CategoryRender targetCategory={targetCategory} />
    </section>
  );
};
