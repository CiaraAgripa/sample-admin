import { IRequestConfig } from "@/types/mainSchema";
import { AxiosRequestConfig } from "axios";
import { NextApiRequest } from "next/types";

const getRequestConfig = (req: NextApiRequest, token?: string): { headers: IRequestConfig } => {
  return {
    headers: {
      Authorization: `${token}`,
      "Content-Type": "application/json",
    },
  };
};

export type TRequestConfig = AxiosRequestConfig & ReturnType<typeof getRequestConfig>;

export default getRequestConfig;
