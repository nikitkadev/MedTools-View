export interface BillingPeriodsResult {
  billingPeriods: BillingPeriodDto[];
}

export interface BillingPeriodDto {
  billingYear: string;
  billingMonths: string[];
}
