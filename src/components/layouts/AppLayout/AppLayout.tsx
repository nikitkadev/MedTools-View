import { Outlet } from "react-router";
import { AppHeader } from "../../widgets/AppHeader/AppHeader";
import { AppFooter } from "../../widgets/AppFooter/AppFooter";
import styles from "./styles.module.scss";

export const AppLayout = () => {
  return (
    <main className={styles.appRoot}>
      <AppHeader />

      <div className={styles.contentRoot}>
        <Outlet />
      </div>

      <AppFooter />
    </main>
  );
};
