import { IRequestConfig } from "@/types/mainSchema";
import { AxiosRequestConfig } from "axios";
import { NextApiRequest } from "next/types";

const getRequestConfigWithParams = (req: NextApiRequest, token?: string, params?: Record<string, any>): AxiosRequestConfig & { headers: IRequestConfig } => {
  return {
    headers: {
      Authorization: `${token}`,
      "Content-Type": "application/json; charset=utf-8",
    },
    params: {
      ...(params || {}),
    },
  };
};

export type TGetRequestConfig = ReturnType<typeof getRequestConfigWithParams>;
export default getRequestConfigWithParams;
