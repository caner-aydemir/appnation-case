"use client";

import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { store } from "@/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeToggle from "@/components/common/ThemeToggle";
import TemperatureToggle from "@/components/common/TemperatureToggle";
import { TemperatureProvider } from "@/context/TemperatureContext";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <NextThemeProvider attribute="class" defaultTheme="light">
          <TemperatureProvider>
            <div className="absolute top-4 right-4 flex flex-row md:flex-col gap-2 items-center">
              <ThemeToggle />
              <TemperatureToggle />
            </div>
            {children}
          </TemperatureProvider>
        </NextThemeProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
}
