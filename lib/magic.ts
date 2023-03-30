import { Magic } from "magic-sdk";
import { ethers } from "ethers";
import { ChainId, getRpcUrl } from "@thirdweb-dev/sdk";

export const magic = new Magic(
  process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY as string,
  {
    network: {
      rpcUrl: getRpcUrl("mumbai"),
      chainId: ChainId.Mumbai,
    },
  }
);
