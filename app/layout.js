import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "./Sites/NavigationHeader";
const LB = Libre_Baskerville({ 
  subsets: ["latin"],
  weight: '400'
});

export const metadata = {
  title: "Renowned Roof Restorations",
  description: "Perth Roof Restorations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Header /> */}
      <body className={LB.className}>{children}</body>
    </html>
  );
}
