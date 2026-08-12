import { AppSelect } from '../../../../components/ui/Select/AppSelect';
import { useFiltersStore } from '../../stores/filters/useFiltersStore';
import { isCategoryId } from '../../types/CategoryId';
import { Render } from './Render/Render';
import styles from './styles.module.scss';

export const Categories = () => {

    const { setSelectedCategory, selectedCategory } = useFiltersStore();

    const categorySelectHandle = (value: string) => {
        if (isCategoryId(value)) {
            setSelectedCategory(value);
        } else {
            setSelectedCategory('default');
        }
    }

    return (
        <section className={styles.categoriesRoot}>

            <header className={styles.categoriesHeader}>
                <h1>Развернутая информация о случае</h1>

                <AppSelect
                    label='Категория'
                    onChange={categorySelectHandle}
                    value={selectedCategory}
                    options={
                        [
                            { label: "Пациент / СМО", value: "patientSmoId" },
                            { label: "Случаи", value: "casesId" },
                            { label: "Онкозаболевания", value: "onkId" },
                            { label: "Услуги", value: "uslId" },
                            { label: "КСГ / ВМП", value: "ksgVmpId" },
                            { label: "Назначения / Направления", value: "nazNaprId" },
                            { label: "Дефекты / Санкции", value: "defectsId" }
                        ]} />
            </header>


            <div className={styles.renderArea}>
                <Render caregoryId={selectedCategory} />
            </div>

        </section>
    )
}