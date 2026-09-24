import { useQuery } from "@tanstack/react-query";
import { getPaymentMethodFilterOptions } from "../../../../api/filterOptions/medicalCaseDetailsGroup/getPaymentMethodFilterOptions";

export const usePaymentMethodFilterOptions = () => {
  return useQuery({
    queryKey: ["med-view", "filter-options", "payment-method"],
    queryFn: getPaymentMethodFilterOptions,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
