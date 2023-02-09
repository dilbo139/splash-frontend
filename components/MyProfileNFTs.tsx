import { Box, Text, Image, Flex, Button, Link, Grid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import EarningStatics from "./EarningStatics";
import Video from "./Video";

const MyProfileNFTs: React.FC = () => {
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

  return (
    <Grid
      templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
      paddingY={"10"}
      gap={"10"}
    >
      {/* NFT Videos List */}
      {postData?.map((post: any) => (
        <Video
          videoImage="/images/video-list-bg4.svg"
          videoEarn="25"
          videoTitle="The Art History of NFTs"
          videoAvatar="https://bit.ly/dan-abramov"
          avatarName="NFT Nerd"
          views="1.2M"
          time="13:34"
          uploadDate="1 week"
          NFTs="13"
          videoIpfsUrl={post.videoIpfsUrl}
        />
      ))}

      {/* <Video
        videoImage="/images/video-list-bg7.svg"
        videoEarn="24"
        videoTitle="Space-Based Blockchain: The Possibilities of Decentralized Systems in the Final Frontier"
        videoAvatar="/images/video-avatar-1.svg"
        avatarName="Mastermind"
        views="432K"
        time="13:12"
        uploadDate="3 days"
        NFTs="2"
      />
      <Video
        videoImage="/images/video-list-bg3.svg"
        videoEarn="33"
        videoTitle="The Art History of NFTs"
        videoAvatar="/images/video-avatar-5.svg"
        avatarName="Benjamin Lee"
        views="748K"
        time="19:46"
        uploadDate="1 week"
        NFTs="21"
      />
      <Video
        videoImage="/images/video-list-bg2.svg"
        videoEarn="16"
        videoTitle="An Objective Look at the Pros and Cons of Decentralized Tech"
        videoAvatar="/images/video-avatar-2.svg"
        avatarName="Akio Nakamura"
        views="153K"
        time="09:20"
        uploadDate="1 month"
        NFTs="9"
      />
      <Video
        videoImage="/images/video-list-bg10.svg"
        videoEarn="17"
        videoTitle="Owning the Future: The Cultural Significance and Impact of NFTs on the Arts and Collectibles"
        videoAvatar="/images/video-avatar-6.svg"
        avatarName="The Adventure"
        views="555K"
        time="10:15"
        uploadDate="18 hours"
        NFTs="5"
      /> */}
      <Video
        videoImage="/images/video-list-bg8.svg"
        videoEarn="10"
        videoTitle="Space-Based Blockchain: The Possibilities of Decentralized Systems in the Final Frontier"
        videoAvatar="/images/video-avatar-3.svg"
        avatarName="Kingmaking"
        views="76K"
        time="08:55"
        uploadDate="3 days"
        NFTs="46"
      />
    </Grid>
  );
};

export default MyProfileNFTs;
