import { useMedViewStore } from "../../../model/stores/useMedViewStore";
import { FiltersGroupRender } from "../FilterRender/FiltersGroupRender";
import { FiltersPanel } from "../FiltersPanel/FiltersPanel";
import styles from "./styles.module.scss";

export const FiltersRoot = () => {
  const { selectedfilterGroupId } = useMedViewStore();

  return (
    <section className={styles.filtersRoot}>
      <FiltersPanel />
      <FiltersGroupRender filterGroupId={selectedfilterGroupId} />
    </section>
  );
};
