"use client";

import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { store } from "@/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeToggle from "@/components/ThemeToggle";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <NextThemeProvider attribute="class" defaultTheme="light">
          <div className="min-h-screen w-full dark:bg-gray-950 bg-amber-50 transition-all duration-700">
            <div className="absolute top-4 right-4">
              <ThemeToggle />
            </div>
            {children}
          </div>
        </NextThemeProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
}
