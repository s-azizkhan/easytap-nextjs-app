import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

import PageHeader from "@/components/page-header";
import PageFooter from "@/components/page-footer";

// const inter = Inter({ subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "EasyTap | Extend your hospitality with EasyTap",
  description: "Extend your hospitality with EasyTap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={`${bricolage.className} bg-background`}>
          <PageHeader />
          <main>{children}</main>
          <PageFooter />
        </body>
      </ThemeProvider>
    </html>
  );
}
