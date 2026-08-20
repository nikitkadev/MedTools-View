import { useWorkspaceStore } from "../../model/store/useWorkspaceStore";
import { CategoryPanel } from "./panel/CategoryPanel/CategoryPanel";
import { CategoryRender } from "./render/CategoryRender/CategoryRender";
import styles from "./styles.module.scss";

export const CategoriesWorkspace = () => {
  const { targetCategory } = useWorkspaceStore();

  return (
    <section className={styles.categoriesRoot}>
      <CategoryPanel />
      <CategoryRender targetCategory={targetCategory} />
    </section>
  );
};
