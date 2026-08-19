import type { CategoryId } from "../CategoryRender/CategoryRender";
import styles from "./styles.module.scss";
import { AppSelect } from "../../../../../../components/ui/Select/AppSelect";
import { useCategoriesStore } from "../../model/stores/useCategoriesStore";

export const CategoryPanel = () => {
  const { setTargetCategory, targetCategory } = useCategoriesStore();
  return (
    <section className={styles.categoryPanelRoot}>
      <p className={styles.title}>
        Расширенная информация по медицинскому случаю
      </p>
      <AppSelect
        label="Категория"
        value={targetCategory === "default" ? "" : targetCategory}
        disabled={false}
        onChange={(value: string) => setTargetCategory(value as CategoryId)}
        options={[
          { label: "Пациент", value: "patient" },
          { label: "Детали случая", value: "case-details" },
          { label: "Онкология", value: "oncology" },
          { label: "Назначения / направления", value: "referrals" },
          { label: "КСГ / ВМП", value: "clinical-groups" },
          { label: "Оказанные услуги", value: "provided-services" },
          { label: "Дефекты / Санкции", value: "defects" },
        ]}
      />
    </section>
  );
};
