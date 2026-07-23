export interface BillingPeriodsQueryResult {
    billingPeriods: BillingPeriod[]
}

export interface BillingPeriod {
    year: number,
    month: number
}