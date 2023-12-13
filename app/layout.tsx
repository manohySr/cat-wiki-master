import Footer from "@/app/ui/components/footer/footer";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Logo from "./ui/components/logo/logo";

// const inter = Inter({ subsets: ["latin"] });

export const siteTitle = "CAT-WIKI-MASTER";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Logo />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
