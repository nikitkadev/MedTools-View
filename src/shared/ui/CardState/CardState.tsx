import { Divider } from "../../../components/ui/Divider/Divider";
import styles from "./styles.module.scss";

interface CardStateProps {
  headline?: string;
  title: string;
  description: string;
}

export const CardState = ({ headline, title, description }: CardStateProps) => {
  return (
    <article className={styles.cardRoot}>
      <header className={styles.cardRootHeader}>
        <h2>{headline}</h2>
      </header>
      <Divider />
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};
