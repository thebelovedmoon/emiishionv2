import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Fahkwang } from "next/font/google"

import "@/app/_global/_main.css";
import "@/app/EmiiShion/nav.css";
import { Footer } from "@/app/_global/_global";

const fahkwang = Fahkwang({
  weight: ["200", "300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Emii Shion (絵美紫苑)🐣",
  description:
    "will you join the Reincarnated Phoenix Queen and the Cursed Legend on the Round Table?👑🐣",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/web/pfp_Emii.png"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="/web/pfp_Emii.png"
          type="image/x-icon"
        />
        <meta name="theme-color" content="#fed962" />
        <meta name="msapplication-TileColor" content="#fed962" />
        <meta name="msapplication-navbutton-color" content="#fed962" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#fed962" />
      </head>
      <body className={`${fahkwang.className} antialiased`}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
