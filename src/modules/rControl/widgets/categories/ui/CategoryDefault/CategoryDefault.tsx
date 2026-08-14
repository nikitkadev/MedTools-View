import styles from "./styles.module.scss";

const CategoryDefault = () => {
  return (
    <section className={styles.categoryDefaultRoot}>
      <div className={styles.gitAction} />
      <p className={styles.title}>Выберите желаемую категорию</p>
      <p className={styles.description}>
        Убедитесь, что вы выбрали запись в таблице медицинских случаев!
      </p>
    </section>
  );
};

export default CategoryDefault;
