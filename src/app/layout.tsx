import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";

const bellefair = Bellefair({
  subsets: ["latin"],
  variable: "--ff-serif",
  weight: ["400"],
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--ff-sans-cond",
  weight: ["400", "500", "600", "700"],
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--ff-sans-normal",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bellefair.variable} 
      ${barlowCondensed.variable} ${barlow.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
