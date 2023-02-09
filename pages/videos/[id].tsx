import VideoDetail from "@/components/VideoDetail";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const VideoPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const fetchPosts = async () => {
    const response = await fetch("/api/videos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const post = await response.json();
    // setPosts(post);
    return post;
  };

  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  // console.log("posts:", posts);
  // console.log("postData:", postData?.message);
  const postData = data?.message;
  console.log("postData:", postData);

  const currentPost = postData?.filter((post: any, index: number) =>
    post?.videoIpfsUrl?.includes(id)
  )[0];

  console.log("currentPost:", currentPost);
  const parseUrlArr = currentPost?.videoIpfsUrl?.split("ipfs://");
  const ipfsUrl = parseUrlArr?.[1];
  console.log("ipfsUrl:", ipfsUrl);
  const cid = currentPost?.videoIpfsUrl?.split("/")[2];
  console.log("cid:", cid);

  return (
    <VideoDetail videoIpfsUrl={`https://lens.infura-ipfs.io/ipfs/${ipfsUrl}`} />

    // <h1>Hello!!!</h1>
  );
};

export default VideoPage;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const data = await getData();
//   const pathsWithParams = data.stars.map((star: starInterface) => ({ params: { something: star.id }}))

//   return {
//       paths: pathsWithParams,
//       fallback: true
//   }
// }
