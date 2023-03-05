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

const Primary: React.FC = () => {
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
      <RecomendedVideoSection mainTitle="Recommended Videos" />
      <TrendingVideoSection mainTitle="Trending Videos" />
      <PopularCreatorSection mainTitle="Popular Creator" />
    </Container>
  );
};

export default Primary;
