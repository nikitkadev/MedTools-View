import { useRControlStore } from '../RControlStore';
import { Toggle } from '../../../ui/Toggle/Toggle';
import { AppSelect } from '../../../ui/Select/AppSelect';
import styles from './styles.module.scss';

export const FilterPanel = () => {

    const { dbType, setDbType, setSelectedOrgCode } = useRControlStore();

    const handleToggle = (
        event: React.MouseEvent<HTMLElement>,
        newValue: string) => {

        if (newValue !== null) {
            setDbType(newValue);

            if (event) {
                return;
            }
        }
    }

    const handleSelectOrg = (value: string) => {
        if (value !== null) {
            setSelectedOrgCode(value);
        }
    }

    return (
        <section className={styles.filterPanel}>

            <Toggle
                value={dbType}
                onChange={handleToggle} />

            <div className={styles.selections}>

                <AppSelect
                    label='Код МО'
                    value='OrgCode'
                    options={[{
                        value: '190001',
                        label: '190001'
                    }]}
                    onChange={handleSelectOrg}
                />

                <AppSelect
                    label='Год'
                    value='OrgCode'
                    options={[{
                        value: '2026',
                        label: '2026'
                    }]}
                    onChange={handleSelectOrg}
                />

                <AppSelect
                    label='Месяц'
                    value='OrgCode'
                    options={[{
                        value: '3',
                        label: 'Март'
                    }]}
                    onChange={handleSelectOrg}
                />

            </div>



        </section>
    )
}