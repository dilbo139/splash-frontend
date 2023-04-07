import useLensUser from "@/lib/auth/useLensUser";
import useLogin from "@/lib/auth/useLogin";
import { useMagicUser } from "@/lib/useMagicUser";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  VStack,
  Flex,
  Image,
} from "@chakra-ui/react";
import {
  ConnectWallet,
  useAddress,
  useCoinbaseWallet,
  useMetamask,
  useWalletConnect,
} from "@thirdweb-dev/react";
import React from "react";

interface SignInModalProps {}

const SignInModal: React.FC<SignInModalProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const { mutate: requestLogin } = useLogin();
  const { connectWithMagic, accounts } = useMagicUser();
  const connectWithMetamask = useMetamask();
  const connectWithCoinbaseWallet = useCoinbaseWallet();
  const connectWithWalletConnect = useWalletConnect();
  const { isSignedInQuery, profileQuery } = useLensUser();
  const address = useAddress();

  return (
    <>
      {!address && (
        <Button
          onClick={onOpen}
          display={{ base: "end", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"brand.purple"}
          _hover={{
            opacity: 0.8,
          }}
        >
          Sign In
        </Button>
      )}

      {/* <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />
          {/* <Flex justify="center"> */}
          <ModalBody pb={6} justifyContent="center">
            <FormControl>
              {/* <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="First name" /> */}
              <Flex justify="center" mb={6}>
                {/* <Button
                  onClick={async () => {
                    await connectWithMagic();
                  }}
                  display={{ base: "end", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"brand.purple"}
                  _hover={{
                    opacity: 0.8,
                  }}
                  width="full"
                >
                  Sign In With Email
                </Button> */}
                <Button
                  onClick={async () => {
                    await connectWithMagic();
                    onClose();
                  }}
                  display={{ base: "end", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"brand.purple"}
                  _hover={{
                    opacity: 0.8,
                  }}
                  width="full"
                >
                  Sign In With Email
                </Button>
              </Flex>
            </FormControl>
            <VStack>
              <Divider />
              <Text textAlign="center" fontWeight="medium">
                OR
              </Text>
              <Divider />
            </VStack>
            <FormControl mt={4}>
              {/* <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" /> */}
              {/* <ConnectWallet accentColor="#7554FA" className="connect-btn" /> */}
              <Flex justify="center" mb={6}>
                <Button
                  display={{ base: "end", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"brand.purple"}
                  _hover={{
                    opacity: 0.8,
                  }}
                  onClick={async () => {
                    await connectWithMetamask();
                    onClose();
                  }}
                  w="full"
                >
                  <Image
                    src="/images/metamask-logo.png"
                    maxWidth={"30px"}
                    borderRadius="sm"
                    mr={3}
                  />
                  Connect Metamask Wallet
                </Button>
              </Flex>
              <Flex justify="center" mb={6}>
                <Button
                  display={{ base: "end", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"brand.purple"}
                  _hover={{
                    opacity: 0.8,
                  }}
                  onClick={async () => {
                    await connectWithCoinbaseWallet();
                    onClose();
                  }}
                  w="full"
                >
                  <Image
                    src="/images/coinbase-wallet-logo.jpeg"
                    maxWidth={"30px"}
                    borderRadius="sm"
                    mr={3}
                  />
                  Connect Coinbase Wallet
                </Button>
              </Flex>
              <Flex justify="center" mb={6}>
                <Button
                  display={{ base: "end", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"brand.purple"}
                  _hover={{
                    opacity: 0.8,
                  }}
                  onClick={async () => {
                    await connectWithWalletConnect();
                    onClose();
                  }}
                  w="full"
                >
                  <Image
                    src="/images/walletconnect-logo.png"
                    maxWidth={"30px"}
                    borderRadius="sm"
                    mr={3}
                  />
                  Connect Wallet Connect
                </Button>
              </Flex>
            </FormControl>
          </ModalBody>
          {/* </Flex> */}

          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignInModal;
