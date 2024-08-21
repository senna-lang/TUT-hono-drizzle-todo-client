'use client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface queryClientProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const TanstackProvider = ({ children }: queryClientProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackProvider;
