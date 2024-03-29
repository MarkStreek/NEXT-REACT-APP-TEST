import '@/app/ui/globals.css';
import { inter } from '@/app/ui/fonts';

import React from "react";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}) {
  return (
    React.createElement("html", { lang: "en" },
      React.createElement("body", { className: `${inter.className} antialiased` }, children)
    )
  );
}
