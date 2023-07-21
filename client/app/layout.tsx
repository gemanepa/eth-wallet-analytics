import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const MissingEtherscanKey = () => (
  <html lang="en">
    <body className="h-[100vh] w-[100vw]">
      <h1>Missing etherscan API key</h1>
      <h2>Add it to .env.local</h2>
    </body>
  </html>
);

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const ethersKey = process.env.NEXT_PUBLIC_ETHERSCAN_KEY;

  if (!ethersKey) return <MissingEtherscanKey />;

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export const metadata: Metadata = {
  title: "Securitize Full Stack Developer Assignment",
  description: "Assignment of Gabriel Martinez Canepa",
};

export default RootLayout;
