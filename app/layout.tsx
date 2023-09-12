import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";

const font = Roboto_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "isumi",
  description: "Front-end Engineer at Picpay"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
