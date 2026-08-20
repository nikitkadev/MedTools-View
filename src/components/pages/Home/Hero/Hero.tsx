import styles from "./styles.module.scss";

export const Hero = () => {
  return (
    <section className={styles.heroRoot}>
      <header>
        <h1>Добро пожаловать в MedTools Web</h1>

        <p className={styles.primaryText}>
          Единая точка доступа к внутренним сервисам и приложениям ТФОМС
          Республики Хакасия.
        </p>
      </header>
    </section>
  );
};
