import { Inter } from "next/font/google";
import "./styles/globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const siteTitle = "CAT-WIKI-MASTER";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
