import "./globals.css";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./_fontawesome.js";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "jobs",
  description: "categories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
