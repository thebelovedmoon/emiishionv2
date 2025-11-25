import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import "@/app/_global/_main.css";
import "@/app/nav.css";

export const metadata: Metadata = {
  title: "絵美紫苑とアーサー王👑🐣",
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
          href="/web/pfp_reginaCrown.png"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="/web/pfp_reginaCrown.png"
          type="image/x-icon"
        />
        <meta name="theme-color" content="#008080" />
        <meta name="msapplication-TileColor" content="#008080" />
        <meta name="msapplication-navbutton-color" content="#008080" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#008080" />
      </head>
      <body className={`antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
