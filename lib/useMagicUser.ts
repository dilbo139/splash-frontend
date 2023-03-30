import { useEffect, useState } from "react";
import Router from "next/router";
import useSWR from "swr";
import { magic } from "@/lib/magic";
import { WalletInfo } from "magic-sdk";

const fetcher = (url: string) =>
  fetch(url)
    .then((r) => r.json())
    .then((data) => {
      return { user: data?.user || null };
    });

export function useMagicUser({ redirectTo, redirectIfFound }: any = {}) {
  const { data, error } = useSWR("/api/user", fetcher);
  const user = data?.user;
  const finished = Boolean(data);
  const hasUser = Boolean(user);

  const [walletInfo, setWalletInfo] = useState<any>(null);
  const [accounts, setAccounts] = useState<string[] | []>([]);

  const getWalletInfo: () => Promise<WalletInfo | undefined> = async () => {
    const walletInfo = await magic?.wallet.getInfo();
    setWalletInfo(walletInfo);
    return walletInfo;
  };

  const connectWithMagic: () => Promise<string[] | undefined> = async () => {
    try {
      const accounts = await magic?.wallet.connectWithUI();
      if (accounts) {
        setAccounts(accounts);
      }
      return accounts || [];
    } catch (err: any) {
      console.error("error connecting with magic:", err);
    }
  };

  const disconnectWithMagic = async function () {
    try {
      await magic?.wallet.disconnect();
      Router.push("/");
    } catch (err: any) {
      console.error("error disconnecting with magic:", err);
    }
  };

  const showMagicWallet = async () => {
    try {
      const info = await getWalletInfo();
      const walletType = info?.walletType;

      if (walletType === "magic") {
        magic?.wallet.showUI();
      }
    } catch (err: any) {
      console.error("error showing magic wallet:", err);
    }
  };

  useEffect(() => {
    if (!redirectTo || !finished) return;
    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !hasUser) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && hasUser)
    ) {
      Router.push(redirectTo);
    }
  }, [redirectTo, redirectIfFound, finished, hasUser]);

  return {
    user: error ? null : user,
    getWalletInfo,
    walletInfo,
    accounts,
    connectWithMagic,
    disconnectWithMagic,
    showMagicWallet,
  };
}
