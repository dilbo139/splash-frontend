import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { getPosts, addPost, updatePost, deletePost } from "@/lib/dbHandlers";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET": {
      return getPosts(req, res);
    }
    case "POST": {
      return addPost(req, res);
    }
    case "PUT": {
      return updatePost(req, res);
    }
    case "DELETE": {
      return deletePost(req, res);
    }
  }
}
