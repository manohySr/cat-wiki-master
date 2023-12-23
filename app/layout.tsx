import Footer from "@/app/ui/components/footer/footer";
import { Suspense } from "react";
import Loading from "./loading";
import "./styles/globals.css";
import Logo from "./ui/components/logo/logo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CAT-WIKI-MASTER",
  description: "Manohy RAJAONAH",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>
          <Logo />
          <div>{children}</div>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
