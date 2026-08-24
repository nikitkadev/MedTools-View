import { Divider } from "../../../components/ui/Divider/Divider";
import { CategoriesWorkspaceFilterPanel } from "../widgets/filters/ui/CategoriesWorkspaceFilterPanel/CategoriesWorkspaceFilterPanel";
import { WorkspaceFilterPanel } from "../widgets/filters/ui/WorkspaceFilterPanel/WorkspaceFilterPanel";
import { CategoriesWorkspace } from "../widgets/workspace/ui/categories/CategoriesWorkspace";
import { Workspace } from "../widgets/workspace/ui/core/Workspace";
import styles from "./styles.module.scss";

export const RControl = () => {
  return (
    <>
      <div className={styles.workspaceGroup}>
        <WorkspaceFilterPanel />
        <Workspace />
      </div>
      <Divider />
      <div className={styles.workspaceGroup}>
        <CategoriesWorkspaceFilterPanel />
        <CategoriesWorkspace />
      </div>
    </>
  );
};
