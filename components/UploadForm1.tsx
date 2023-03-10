import React from "react";
import {
  Flex,
  Text,
  Container,
  Box,
  Avatar,
  Image,
  useDisclosure,
  Button,
  Input,
  Collapse,
  Textarea,
} from "@chakra-ui/react";

const UploadForm: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <>
      <Box
        borderRadius={"13px"}
        width={"98%"}
        height={"auto"}
        background="linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)"
        display={"flex"}
        flexDirection={"column"}
        alignItems="center"
        gap={"5"}
        paddingY={"10"}
        marginY={{ base: "4", md: "10" }}
      >
        <Flex
          justifyContent={"center"}
          alignContent={"center"}
          paddingBottom={{ base: "0", md: "5" }}
          gap={"5"}
        >
          <Image src="/images/upload.svg" />
          <Text fontSize={"2xl"} fontWeight={"500"} onClick={handleToggle}>
            Upload Video
          </Text>
        </Flex>
        <Collapse startingHeight={0} in={show}>
          <Flex
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            width={"100%"}
            justifyContent={"center"}
            paddingX={{ base: "5", md: "unset" }}
            gap={"10"}
            height={{ base: "440px", md: "250px" }}
          >
            <Box
              width={{ base: "95%", md: "40%" }}
              background={"gray.900"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"5"}
              flexDirection={{ base: "row", md: "column" }}
              paddingY={{ base: "4", md: "10" }}
              borderRadius={"8px"}
              borderStyle={"dashed"}
              borderWidth={"1px"}
              borderColor={"rgba(117, 84, 250, 0.5)"}
            >
              <Image src="/images/upload-video.svg" />
              <Text fontWeight={"500"} fontSize={"xl"}>
                Drag & Drop
              </Text>
            </Box>
            <Box
              width={{ base: "100%", md: "45%" }}
              display={"flex"}
              flexDirection={"column"}
              gap={"5"}
              paddingX={{ base: "5", md: "unset" }}
            >
              <Text fontSize={""} fontWeight={"500"}>
                Title
              </Text>
              <Input
                placeholder="Add a title that describes your video"
                borderRadius={"13px"}
              />
              <Text fontSize={"xl"} fontWeight={"500"}>
                {" "}
                Description
              </Text>
              <Textarea
                borderRadius={"13px"}
                fontSize={"lg"}
                placeholder="Tell viewers about your video"
                size="sm"
              />
            </Box>
          </Flex>
          {/* stake box */}
          <Box
            display={"flex"}
            flexDirection={"column"}
            bgColor={"#252A41"}
            width={{ base: "100%", md: "100%" }}
            justifyContent={"center"}
            paddingX={{ base: "10", md: "10" }}
            paddingY={{ base: "5", md: "10" }}
            marginY={"10"}
            borderRadius={"13px"}
            mt={{ base: "10" }}
          >
            <Text fontWeight={"500"} fontSize={"x-large"} paddingBottom={"2"}>
              Stake
            </Text>
            <Flex gap={"10"} flexDirection={{ base: "column", md: "row" }}>
              <Box
                fontWeight={"500"}
                fontSize={{ base: "lg" }}
                width={{ base: "unset", md: "63%" }}
              >
                Staking is required to upload a video to ensure compliance with
                community guidelines.
              </Box>
              <Box
                display={"flex"}
                flexDirection={{ base: "row", md: "column" }}
                gap={{ base: "10", md: "5" }}
              >
                <Box fontWeight={"500"} fontSize={{ base: "2xl", md: "xl" }}>
                  Amount
                </Box>
                <Flex gap={"5"}>
                  <Image src="/images/splash-token.svg" width={"7"} />
                  <Text fontWeight={"600"} fontSize={{ base: "2xl", md: "xl" }}>
                    15
                  </Text>
                </Flex>
              </Box>
              <Box
                display={"flex"}
                alignItems={{ base: "center", md: "center" }}
              >
                <Button
                  bg={"brand.purple"}
                  borderRadius={"13px"}
                  fontSize={"xl"}
                  paddingY={"2"}
                >
                  Stake and Upload
                </Button>
              </Box>
            </Flex>
          </Box>
        </Collapse>
      </Box>
    </>
  );
};

export default UploadForm;
