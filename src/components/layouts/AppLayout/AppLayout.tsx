import { Outlet } from "react-router";
import { AppHeader } from "../../widgets/AppHeader/AppHeader"

import styles from './styles.module.scss';
import { AppFooter } from "../../widgets/AppFooter/AppFooter";

export const AppLayout = () => {
    return (
        <main className={styles.appRoot}>
            
            <AppHeader />

            <div className={styles.contentRoot}>
                <Outlet />
            </div>

            <AppFooter />

        </main>
    )
}