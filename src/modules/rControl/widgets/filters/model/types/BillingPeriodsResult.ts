export interface BillingPeriodsResult {
  billingPeriods: BillingPeriodDto[];
}

export interface BillingPeriodDto {
  billingYear: number;
  billingMonths: number[];
}
