import { Magic } from "magic-sdk";
import { ethers } from "ethers";
import { ChainId, getRpcUrl } from "@thirdweb-dev/sdk";

export const magic =
  typeof window !== "undefined"
    ? new Magic(
        // process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY as string,
        "pk_live_5967692F876A4F29",
        {
          network: {
            rpcUrl: getRpcUrl("mumbai"),
            chainId: ChainId.Mumbai,
          },
        }
      )
    : null;
