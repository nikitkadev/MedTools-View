import { CategoriesWorkspace } from "../widgets/workspace/ui/categories/CategoriesWorkspace";
import { WorkspaceFilterPanel } from "../widgets/filters/ui/WorkspaceFilterPanel/WorkspaceFilterPanel";
import { Workspace } from "../widgets/workspace/ui/core/Workspace";
import styles from "./styles.module.scss";

export const RControl = () => {
  return (
    <>
      <div className={styles.workspaceGroup}>
        <WorkspaceFilterPanel />
        <Workspace />
      </div>
      <CategoriesWorkspace />
    </>
  );
};
