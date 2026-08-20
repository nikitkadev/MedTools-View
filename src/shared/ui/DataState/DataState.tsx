import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import FolderOffIcon from "@mui/icons-material/FolderOff";
import GppBadIcon from "@mui/icons-material/GppBad";

import styles from "./styles.module.scss";

interface DataState {
  title: string;
  description: string;
  variant: "waiting" | "error" | "empty";
}

export const DataState = ({ title, description, variant }: DataState) => {
  return (
    <section className={`${styles.dataStateRoot} ${styles[variant]}`}>
      {variant === "empty" ? (
        <div className={styles.logo}>
          <FolderOffIcon />
        </div>
      ) : variant === "error" ? (
        <div className={styles.logo}>
          <GppBadIcon />
        </div>
      ) : (
        <div className={styles.logo}>
          <HourglassBottomIcon />
        </div>
      )}

      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </section>
  );
};
