import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

import PageHeader from "@/components/page-header";
import PageFooter from "@/components/page-footer";
import { Providers } from "../../components/Providers";

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
    <html lang="en" className="scrollbar-none">
      <Providers>
        <body className={`${bricolage.className}`}>
          <div className="fixed left-0 top-0 -z-10 h-full w-full">
            <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,_hsla(0,0%,100%,0)_0,rgb(183_180_238/50%)_100%)] dark:rotate-0 dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          </div>

          <PageHeader />
          <main>{children}</main>
          <PageFooter />
        </body>
      </Providers>
    </html>
  );
}
