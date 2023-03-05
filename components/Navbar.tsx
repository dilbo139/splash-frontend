import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Input,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import {
  useAddress,
  useNetworkMismatch,
  useNetwork,
  ConnectWallet,
  ChainId,
  MediaRenderer,
  useDisconnect,
} from "@thirdweb-dev/react";
import React from "react";
import useLensUser from "../lib/auth/useLensUser";
import useLogin from "../lib/auth/useLogin";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const address = useAddress(); // Detect the connected address
  const isOnWrongNetwork = useNetworkMismatch(); // Detect if the user is on the wrong network
  const [, switchNetwork] = useNetwork(); // Function to switch the network.
  const { isSignedInQuery, profileQuery } = useLensUser();
  const { mutate: requestLogin } = useLogin();
  const disconnect = useDisconnect();

  return (
    <Box>
      <Flex
        bg={"#111827"}
        color={"white"}
        minH={"76px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
        position={"fixed"}
        width={"100%"}
        zIndex={"99"}
        top={"0"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 7 }}
          justify={{ base: "center", md: "start" }}
          paddingX={{ base: "none", md: "3" }}
        >
          {/*
           */}
          <Link href="/" _hover={{ opacity: 0.7 }}>
            <Image width={"80%"} src="/images/splash-logo.svg" alt="Splash" />
          </Link>
          {/* Search */}
          <Flex
            display={"flex"}
            width={{ base: "100px" }}
            ml={{ base: "unset", md: "10" }}
          >
            <Search />
          </Flex>
          {/* <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex> */}
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          align={"center"}
        >
          {/* <Button
            display={{ base: "end", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"brand.purple"}
            _hover={{
              bg: "pink.300",
            }}
          >
            Connect Wallet
          </Button> */}
          {address ? (
            <Button
              bgColor="brand.purple"
              textColor="white"
              onClick={disconnect}
              _hover={{
                opacity: 0.8,
              }}
            >
              Disconnect Wallet
            </Button>
          ) : (
            <Button
              onClick={() => console.log("sign in with magic...")}
              display={{ base: "end", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"brand.purple"}
              _hover={{
                bg: "pink.300",
              }}
            >
              Sign in Email (Magic)
            </Button>
          )}

          {!address ? (
            <ConnectWallet accentColor="#7554FA" />
          ) : isSignedInQuery.isLoading ? (
            <div>Loading...</div>
          ) : !isSignedInQuery.data ? (
            <>
              <Button
                onClick={() => requestLogin()}
                display={{ base: "end", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"brand.purple"}
                _hover={{
                  bg: "pink.300",
                }}
              >
                Sign in with Lens
              </Button>
            </>
          ) : profileQuery.isLoading ? (
            <div>Loading...</div>
          ) : !profileQuery.data?.defaultProfile ? (
            <div>No Lens Profile.</div>
          ) : profileQuery.data?.defaultProfile ? (
            <Text>{profileQuery.data.defaultProfile.handle}</Text>
          ) : (
            <div>Something went wrong.</div>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
      {/* Left Menu Bar */}
      <Flex
        display={{ base: "none", md: "flex" }}
        ml={10}
        left={0}
        width={"240px"}
        height={"full"}
        bg={"#111827"}
        marginLeft={"none"}
        top={"76px"}
        paddingX={"8"}
        position={"fixed"}
      >
        <DesktopNav />
      </Flex>
    </Box>
  );
}

const Search = () => {
  return (
    <>
      <Stack
        spacing={3}
        minWidth={{ base: "50px", md: "300px" }}
        marginLeft={{ base: "none", md: "5px" }}
      >
        <Input variant="search" placeholder="Search" bg={"gray.700"} />
      </Stack>
    </>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("white", "white");
  const linkHoverColor = useColorModeValue("brand.lightPurple", "lightPurple");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"column"} spacing={6} height={"full"}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                <Flex
                  flexDirection={"row"}
                  width={"full"}
                  gap={"15px"}
                  fontSize={"1.3em"}
                  fontWeight={"Bold"}
                >
                  <Image src={navItem.icon} />
                  {navItem.label}
                </Flex>
              </Link>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              ></PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={"white"} p={4} display={{ md: "none" }} marginTop={"76px"}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  icon: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
    icon: "/images/home.svg",
  },
  {
    label: "My Profile",
    href: "/MyProfile",
    icon: "/images/user-circle.svg",
  },
  {
    label: "Earnings",
    href: "/Earnings",
    icon: "/images/currency-dollar.svg",
  },
  {
    label: "DAO",
    href: "#",
    icon: "/images/view-grid.svg",
  },
  {
    label: "Your Videos",
    href: "/YourVideo",
    icon: "/images/video-camera.svg",
  },
];
