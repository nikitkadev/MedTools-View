import type { DataState } from "../../../../../../../../../../shared/types/DataState";
import { StatusBadge } from "../../../../../../../../../../shared/ui/StatusBadge/StatusBadge";
import styles from "./styles.module.scss";

interface ConsultationsListHeaderProps {
  dataState: DataState;
}

export const ConsultationsListHeader = ({
  dataState,
}: ConsultationsListHeaderProps) => {
  return (
    <header className={styles.consultationsListHeader}>
      <h2>Консилиум</h2>
      <StatusBadge state={dataState} />
    </header>
  );
};
