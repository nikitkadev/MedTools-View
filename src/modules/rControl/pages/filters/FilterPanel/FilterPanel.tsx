import styles from './styles.module.scss';

import { Toggle } from '../../../../../components/ui/Toggle/Toggle';
import { useFiltersStore } from '../../../stores/filters/useFiltersStore';

export const FilterPanel = () => {

    const targetDb = useFiltersStore(store => store.targetDb);
    const selectDbType = useFiltersStore(store => store.selectTargetDb);

    const handleToggle = (
        _event: React.MouseEvent<HTMLElement>,
        newValue: string) => {

        if (newValue === "SMODB18" || newValue === "INOGOROD18") {
            selectDbType(newValue);
        }
    };

    return (

        <section className={styles.filterPanel}>

            <Toggle
                value={targetDb ?? ''}
                onChange={handleToggle} />

            {/* <div className={styles.selections}>

                <AppSelect
                    label='Код МО'
                    value={selectedOrgCode}
                    options={orgOptions}
                    onChange={handleSelectOrg}
                />

                <AppSelect
                    label='Год'
                    value={selectedYear}
                    options={yearOptions}
                    onChange={handleSelectYear}
                />

                <AppSelect
                    label='Месяц'
                    value={selectedMonth}
                    options={monthOptions}
                    onChange={handleSelectMonth}
                />

            </div> */}

        </section>
    )
}