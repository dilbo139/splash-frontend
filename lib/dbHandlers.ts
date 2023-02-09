import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "./mongodb";

export async function getPosts(req: NextApiRequest, res: NextApiResponse) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // fetch the posts
    let posts = await db
      .collection("posts")
      .find({})
      .sort({ published: -1 })
      .toArray();
    // return the posts
    return res.status(200).json({
      message: JSON.parse(JSON.stringify(posts)),
      success: true,
    });
  } catch (error: any) {
    // return the error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

export async function addPost(req: NextApiRequest, res: NextApiResponse) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // add the post
    await db.collection("posts").insertOne(JSON.parse(req.body));
    // return a message
    return res.json({
      message: "Post added successfully",
      success: true,
    });
  } catch (error: any) {
    // return an error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

export async function updatePost(req: NextApiRequest, res: NextApiResponse) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();

    // update the published status of the post
    await db.collection("posts").updateOne(
      {
        _id: new ObjectId(req.body),
      },
      { $set: { published: true } },
    );

    // return a message
    return res.json({
      message: "Post updated successfully",
      success: true,
    });
  } catch (error: any) {
    // return an error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

export async function deletePost(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Connecting to the database
    let { db } = await connectToDatabase();

    // Deleting the post
    await db.collection("posts").deleteOne({
      _id: new ObjectId(req.body),
    });

    // returning a message
    return res.json({
      message: "Post deleted successfully",
      success: true,
    });
  } catch (error: any) {
    // returning an error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
