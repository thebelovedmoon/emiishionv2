import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import "@/app/_global/_main.css";
import "@/app/ArthurLeidram/nav.css";
import { Footer } from "@/app/_global/_global";

export const metadata: Metadata = {
  title: "Arthur Regina Leidram (アーサー王)👑",
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
          href="/web/pfp_Leidram.png"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="/web/pfp_Leidram.png"
          type="image/x-icon"
        />
        <meta name="theme-color" content="#d6d8e5" />
        <meta name="msapplication-TileColor" content="#d6d8e5" />
        <meta name="msapplication-navbutton-color" content="#d6d8e5" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#d6d8e5" />
      </head>
      <body className={`antialiased`}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
