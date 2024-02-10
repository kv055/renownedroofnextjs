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
      {/* <meta name="ahrefs-site-verification" content="33651fb8e8ae37b5ab3e448023993b4e0613a53f16acacb34057ed0ce7bb8a67"></meta>
      <meta name="google-site-verification" content="DHni2_22zM6y1yQe3RqcSppu7R7iIJ1_5yup0NYP5OM" /> */}
      <meta name="google-site-verification" content="ki_nLSSiswIeV1E2ZRm1q9ho-eddZnb65xWbuINHk3g" />
      <body className={LB.className}>{children}</body>
    </html>
  );
}
