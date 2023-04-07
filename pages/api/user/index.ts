import { NextApiRequest, NextApiResponse } from "next";
import { getPosts } from "@/lib/dbHandlers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await getPosts(req, res);
  return res.status(200).json({ user: "Test User..." });
}
