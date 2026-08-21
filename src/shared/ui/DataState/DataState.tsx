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
    <section className={styles.dataStateRoot}>
      <div className={`${styles.logo} ${styles[variant]}`}>
        {variant === "waiting" ? (
          <HourglassBottomIcon />
        ) : variant === "error" ? (
          <GppBadIcon />
        ) : (
          <FolderOffIcon />
        )}
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
};
