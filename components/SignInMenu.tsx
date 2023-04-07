import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList, Image } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import useLogin from "@/lib/auth/useLogin";
import { useMagicUser } from "@/lib/useMagicUser";
import {
  useWalletConnect,
  useCoinbaseWallet,
  useMetamask,
  useAddress,
} from "@thirdweb-dev/react";
import useLensUser from "@/lib/auth/useLensUser";

type Props = {};

const SignInMenu = (props: Props) => {
  const { mutate: requestLogin } = useLogin();
  const { connectWithMagic, accounts } = useMagicUser();
  const connectWithMetamask = useMetamask();
  const connectWithCoinbaseWallet = useCoinbaseWallet();
  const connectWithWalletConnect = useWalletConnect();
  const { isSignedInQuery, profileQuery } = useLensUser();
  const address = useAddress();

  return (
    <Menu>
      {!address && (
        <MenuButton
          px={4}
          py={2}
          transition="all 0.2s"
          borderRadius="md"
          borderWidth="1px"
          bg={"brand.purple"}
          borderColor={"brand.purple"}
          _hover={{ opacity: 0.8 }}
          // _expanded={{ bg: "gray.700" }}
          minW={"150px"}
          _focus={{ boxShadow: "none" }}
        >
          Sign In <ChevronDownIcon />
        </MenuButton>
      )}

      <MenuList background={"gray.800"} borderColor={"gray.700"}>
        <MenuItem
          as={"button"}
          background={"gray.800"}
          _hover={{ bg: "gray.700" }}
          onClick={async () => {
            await connectWithMagic();
          }}
        >
          <EmailIcon w={"30px"} mr={3} />
          Sign In With Email
        </MenuItem>
        <MenuItem
          as={"button"}
          background={"gray.800"}
          _hover={{ bg: "gray.700" }}
          onClick={async () => {
            await connectWithMetamask();
          }}
        >
          <Image
            src="/images/metamask-logo.png"
            maxWidth={"30px"}
            borderRadius="sm"
            mr={3}
          />
          Connect Metamask
        </MenuItem>
        <MenuItem
          as={"button"}
          background={"gray.800"}
          _hover={{ bg: "gray.700" }}
          onClick={async () => {
            await connectWithCoinbaseWallet();
          }}
        >
          <Image
            src="/images/coinbase-wallet-logo.jpeg"
            maxWidth={"30px"}
            borderRadius="sm"
            mr={3}
          />
          Connect Coinbase
        </MenuItem>
        <MenuItem
          as={"button"}
          background={"gray.800"}
          _hover={{ bg: "gray.700" }}
          onClick={async () => {
            await connectWithWalletConnect();
          }}
        >
          <Image
            src="/images/walletconnect-logo.png"
            maxWidth={"30px"}
            minHeight={"25px"}
            borderRadius="sm"
            mr={3}
          />
          Connect Wallet Connect
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SignInMenu;
