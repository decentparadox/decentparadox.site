import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "next-themes";
export const metadata: Metadata = {
  title: "Sasank Reddy | DecentParadox | Portfolio",
  description: "Personal Portfolio and blog of Sasank Reddy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className="text-[10px] md:text-[12px] xl:text-[14px] noise">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
