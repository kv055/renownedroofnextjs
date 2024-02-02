import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Sites/NavigationHeader";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Renowned Roof Restorations",
  description: "Perth Roof Restorations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Header /> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
