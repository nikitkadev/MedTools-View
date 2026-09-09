import { FiltersGroupRender } from "../../render/FilterRender/FiltersGroupRender";
import { FiltersPanel } from "../FiltersPanel/FiltersPanel";
import styles from "./styles.module.scss";

export const FiltersRoot = () => {
  return (
    <section className={styles.filtersRoot}>
      <FiltersPanel />
      <FiltersGroupRender filterGroupId="none" />
    </section>
  );
};
