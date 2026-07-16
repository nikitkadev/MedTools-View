import { FilterPanel } from "./FilterPanel/FilterPanel"
import { FinishedCasesTable } from "./FinishedCasesTable/FinishedCasesTable"
import { InvoicesSection } from "./InvoicesSection/InvoicesSection"

export const RControl = () => {
    return (
        <>
            <FilterPanel />
            <InvoicesSection />
            <FinishedCasesTable />
        </>
    )
}