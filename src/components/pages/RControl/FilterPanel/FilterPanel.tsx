import { useMemo } from 'react';
import { Toggle } from '../../../ui/Toggle/Toggle';
import { useRControlStore } from '../RControlStore';
import { AppSelect } from '../../../ui/Select/AppSelect';
import { useMedOrganizations } from '../../../../api/services/RControl/hooks/useMedOrganizations';
import { useBillingPeriods } from '../../../../api/services/RControl/hooks/useBillingPeriods';

import styles from './styles.module.scss';
import { useInvoicesShortly } from '../../../../api/services/RControl/hooks/useInvoicesShortly';

export const FilterPanel = () => {

    useMedOrganizations();
    useBillingPeriods();
    useInvoicesShortly();

    const {
        dbType,
        selectedOrgCode,
        selectedYear,
        selectedMonth,
        medOrganizations,
        billingPeriods,
        setDbType,
        setSelectedOrgCode,
        setSelectedYear,
        setSelectedMonth } = useRControlStore();


    const handleToggle = (
        event: React.MouseEvent<HTMLElement>,
        newValue: string) => {

        if (newValue !== null) {
            setDbType(newValue);

            if (event) {
                return;
            }
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

        const uniqueYears = [...new Set(billingPeriods.map(period => period.year))];

        return uniqueYears.map(year => ({
            value: year.toString(),
            label: year.toString()
        }))

    }, [billingPeriods]);

    const monthOptions = useMemo(() => {

        const months = billingPeriods.filter(f => f.year.toString() === selectedYear).map(period => period.month);

        return months.map(month => ({
            value: month.toString(),
            label: month.toString()
        }));

    }, [selectedYear])

    return (

        <section className={styles.filterPanel}>

            <Toggle
                value={dbType}
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