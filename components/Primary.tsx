import React from "react";
import {
  Flex,
  Heading,
  Text,
  Button,
  Link,
  Image,
  Container,
  Box,
} from "@chakra-ui/react";
import Showcase from "./Showcase";
import Leaderboard from "./Leaderboard";
import RecomendedVideoSection from "./RecomendedVideoSection";
import TrendingVideoSection from "./TrendingVideoSection";
import PopularCreatorSection from "./PopularCreatorSection";
import {
  PublicationSortCriteria,
  useExplorePublicationsQuery,
} from "@/graphql/generated";

const Primary: React.FC = () => {
  const {
    isLoading,
    error,
    data: publicationsData,
  } = useExplorePublicationsQuery(
    {
      request: {
        sortCriteria: PublicationSortCriteria.Latest,
      },
    },
    {
      // Don't refetch the user comes back
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  console.log("publicationsData: ", publicationsData);

  return (
    <Container
      centerContent
      maxWidth={"100%"}
      my={12}
      marginLeft={{ base: "none", md: "200px" }}
      // marginTop={"80px"}
      height={{ base: "auto", md: "auto" }}
      width={"90vw"}
    >
      <Showcase />
      <Leaderboard />
      <RecomendedVideoSection
        mainTitle="Recommended Videos"
        publicationsData={publicationsData}
      />
      <TrendingVideoSection mainTitle="Trending Videos" />
      <PopularCreatorSection mainTitle="Popular Creator" />
    </Container>
  );
};

export default Primary;
