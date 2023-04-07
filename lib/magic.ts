import { Magic } from "magic-sdk";
import { ethers } from "ethers";
import { ChainId, getRpcUrl } from "@thirdweb-dev/sdk";

const MAGIC_KEY = (process.env.MAGIC_PUBLISHABLE_KEY as string) || "";

export const magic =
  typeof window !== "undefined"
    ? new Magic(MAGIC_KEY, {
        network: {
          rpcUrl: getRpcUrl("mumbai"),
          chainId: ChainId.Mumbai,
        },
      })
    : null;
