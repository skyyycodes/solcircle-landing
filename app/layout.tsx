import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SolCircle - On-Chain Investment Clubs",
  description: "SolCircle turns Telegram groups into on-chain investment clubs — letting communities pool funds, vote, and trade together securely and transparently. Simple, scalable, and built for the future of group investing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
     
    
        {children}
      </body>
    </html>
  );
}
