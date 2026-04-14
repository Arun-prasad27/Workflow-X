"use client"; // This file is a client component because it uses React Query, which relies on client-side state management.

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";   
import { ReactNode } from "react"; 

const queryClient = new QueryClient();  // Create a QueryClient instance to manage the cache and state of your queries.

export function Providers({ children }: { children: ReactNode }) { // Define a Providers component that takes children as props. This component will wrap the application and provide the QueryClient context to all child components.
  return (
    <QueryClientProvider client={queryClient}> 
      {children}
    </QueryClientProvider>
  );
}