import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const font = localFont({
  src: [
    {
      path: "../public/din-round-light.ttf",
      weight: "200",
      style: 'normal'
    },

    {
      path: "../public/din-round-bold.woff",
      weight: "700",
      style: 'normal'
    },
  ]
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
