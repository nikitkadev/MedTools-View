import apiClient from "../../../../../../../app/providers/apiClient";
import type { ResultResponse } from "../../../../../../../shared/types/ResultResponse";
import type { TargetDbType } from "../../../../../../../shared/types/TargetDbType";
import type { GetReferralsResult, ReferralDto } from "../../../model/types/categories/prescriptions/GetReferralsResult";

export const getReferrals = async (
  medicalCaseUid: number,
  targetDb: TargetDbType,
): Promise<ReferralDto[]> => {
  const response = await apiClient.get<ResultResponse<GetReferralsResult>>(
    `/rcontrol/medical-cases/${medicalCaseUid}/referrals`,
    {
      params: {
        targetDb: targetDb,
      },
    },
  );
  if (response.data.isFailure) {
    throw new Error(response.data.error);
  }

  if (!response.data.value) {
    throw new Error("Сервер прислал невалидный ответ");
  }

  return response.data.value.referrals;
};
