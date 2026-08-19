import apiClient from "../../../../../../app/providers/apiClient";
import type { ResultResponse } from "../../../../../../shared/types/ResultResponse";
import type { TargetDbType } from "../../../../../../shared/types/TargetDbType";
import type {
  DiagnosticListItemDto,
  GetDiagnosticsResult,
} from "../../model/types/Oncology/GetDiagnosticsResult";

export const getDiagnostics = async (
  oncologyCaseUid: number,
  targetDb: TargetDbType,
): Promise<DiagnosticListItemDto[]> => {
  const response = await apiClient.get<ResultResponse<GetDiagnosticsResult>>(
    `/rcontrol/oncology-cases/${oncologyCaseUid}/diagnostics`,
    {
      params: {
        targetDb: targetDb,
      },
    },
  );

  if (response.data.isFailure) {
    throw new Error(response.data.clientMessage);
  }

  if (!response.data.value) {
    throw new Error("Сервер прислал невалидный ответ");
  }
  
  return response.data.value.diagnostics;
};
