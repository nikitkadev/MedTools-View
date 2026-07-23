import { useMemo } from 'react';
import { Toggle } from '../../../ui/Toggle/Toggle';
import { AppSelect } from '../../../ui/Select/AppSelect';
import { useMedOrganizations } from '../../../../api/services/RControl/hooks/useMedOrganizations';
import { useBillingPeriods } from '../../../../api/services/RControl/hooks/useBillingPeriods';
import { useInvoicesShortly } from '../../../../api/services/RControl/hooks/useInvoicesShortly';
import { useFiltersStore } from '../../../../api/services/RControl/stores/filters/useFiltersStore';
import { useDictionariesStore } from '../../../../api/services/RControl/stores/dictionaries/useDictionariesStore';

import styles from './styles.module.scss';

export const FilterPanel = () => {

    useMedOrganizations();
    useBillingPeriods();
    useInvoicesShortly();

    const {
        medOrganizations,
        periods } = useDictionariesStore();

    const {
        targetDb,
        selectedOrgCode,
        selectedYear,
        selectedMonth,
        setTargetDb,
        setSelectedOrgCode,
        setSelectedYear,
        setSelectedMonth } = useFiltersStore();


    const handleToggle = (
        _event: React.MouseEvent<HTMLElement>,
        newValue: string) => {

        if (newValue === "SMODB18" || newValue === "INOGOROD18") {
            setTargetDb(newValue);
        }
    };

    const handleSelectOrg = (value: string) => {
        if (value !== null) {
            setSelectedOrgCode(value);
        }
    };

    const handleSelectYear = (value: string) => {
        if (value !== null) {
            setSelectedYear(value);
        }
    };

    const handleSelectMonth = (value: string) => {
        if (value !== null) {
            setSelectedMonth(value);
        }
    }

    const orgOptions = medOrganizations.map((med) => ({
        value: med.code,
        label: med.code
    }));

    const yearOptions = useMemo(() => {

        const uniqueYears = [...new Set(periods.map(period => period.year))];

        return uniqueYears.map(year => ({
            value: year.toString(),
            label: year.toString()
        }))

    }, [periods]);

    const monthOptions = useMemo(() => {

        const months = periods.filter(f => f.year.toString() === selectedYear).map(period => period.month);

        return months.map(month => ({
            value: month.toString(),
            label: month.toString()
        }));

    }, [selectedYear])

    return (

        <section className={styles.filterPanel}>

            <Toggle
                value={targetDb ?? ''}
                onChange={handleToggle} />

            <div className={styles.selections}>

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

            </div>

        </section>
    )
}