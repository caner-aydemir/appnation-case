import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers/Providers";

export const metadata: Metadata = {
  title: "| AppNation Weather App",
  description: "Created by Caner Aydemir",
  icons: {
    icon: "https://cdn.prod.website-files.com/679c8d3e7c513e31b271d21b/679c8d3e7c513e31b271d2c9_favicon.png",
  },
  authors: [{ name: "Caner Aydemir", url: "https://github.com/caner-aydemir" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen w-full dark:bg-gray-950 bg-amber-50 transition-all duration-700">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
