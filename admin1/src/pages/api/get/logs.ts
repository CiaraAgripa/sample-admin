import { getServerSession } from "next-auth";
import type { NextApiRequest, NextApiResponse } from "next/types";
import { buildAuthOptions } from "../auth/[...nextauth]";
import { apiServices } from "@/services/apiServices";
import getRequestConfigWithParams from "@/utilities/geMethodUtils";
import { TGetLogsParams, TGetMemberListParams, TSessionToken } from "@/types/mainSchema";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const session: null | TSessionToken = await getServerSession(req, res, buildAuthOptions(req as NextApiRequest, res as NextApiResponse) as any);

  if (!session) {
    return res.status(401).json({ unauthenticated: true });
  }

  try {
    const { page, limit, action, adminId, startDate, endDate }: TGetLogsParams = req.query;
    const params = { page, limit, action, adminId, startDate, endDate };

    const config = getRequestConfigWithParams(req, session.token, params);
    const response = await apiServices.getLogs({ config });

    return res.status(200).json(response?.data);
  } catch (e: any) {
    console.error(e);
    return res.status(500).json({ error: e.message || "Internal Server Error" });
  }
}
