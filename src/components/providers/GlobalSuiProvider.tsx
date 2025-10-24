import {
  createNetworkConfig,
  SuiClientProvider,
  WalletProvider,
} from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@mysten/dapp-kit/dist/index.css";
import { createContext, useContext } from "react";
import { walrusClient, WalrusClient } from "../../lib/walrus";

// Config options for the networks you want to connect to
const { networkConfig } = createNetworkConfig({
  testnet: { url: getFullnodeUrl("testnet") },
  mainnet: { url: getFullnodeUrl("mainnet") },
});

// Tạo QueryClient singleton để tránh tạo lại nhiều lần
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Tăng staleTime để tránh refetch không cần thiết
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

// Walrus Context
const WalrusContext = createContext<WalrusClient | null>(null);

export function useWalrus() {
  const context = useContext(WalrusContext);
  if (!context) {
    throw new Error("useWalrus must be used within GlobalSuiProvider");
  }
  return context;
}

export function GlobalSuiProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
        <WalletProvider autoConnect>
          <WalrusContext.Provider value={walrusClient}>
            {children}
          </WalrusContext.Provider>
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
}
