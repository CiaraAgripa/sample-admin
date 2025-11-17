import { initialPagination } from "@/initialStateData/initialStateData";
import { localService } from "@/services/localServices";
import { TGetLogsParams, TLogs, TPagination } from "@/types/mainSchema";
import { asyncHandler } from "@/utilities/asyncHandler";
import { useState } from "react";

const useLogs = () => {
  const [logList, setLogList] = useState<TLogs[]>([]);
  const [logPagination, setLogPagination] = useState<TPagination>(initialPagination);

  const getLogList = async ({ params }: { params: TGetLogsParams }) => {
    const response = await asyncHandler(() => localService.getLogsLocal({ params }));

    console.log("res", response)
    if (response) {
      setLogList(response.logs);
      setLogPagination(response.pagination);
    }
  };

  return { getLogList, logList, setLogList, logPagination, setLogPagination };
};

export default useLogs;
