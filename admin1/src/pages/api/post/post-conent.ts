import { getServerSession } from "next-auth";
import type { NextApiRequest, NextApiResponse } from "next/types";
import { buildAuthOptions } from "../auth/[...nextauth]";
import { apiServices } from "@/services/apiServices";
import { TPostContentParams, TSessionToken } from "@/types/mainSchema";
import getRequestConfig from "@/utilities/bearerUtils";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const session: null | TSessionToken = await getServerSession(req, res, buildAuthOptions(req as NextApiRequest, res as NextApiResponse) as any);

  if (!session) {
    return res.status(401).json({ unauthenticated: true });
  }

  try {
    const { title, content, author, symbols, institution, sector, category, tags, isPublished, isPinned, sourceUrl }: TPostContentParams = req.body;
    const params = { title, content, author, symbols, institution, sector, category, tags, isPublished, isPinned, sourceUrl };

    const currentHeaders = getRequestConfig(req, session?.token);
    const response = await apiServices.postContent({ params, config: currentHeaders });

    return res.status(200).json(response?.data);
  } catch (e: any) {
    console.error(e);
    return res.status(500).json({ error: e.message || "Internal Server Error" });
  }
}
