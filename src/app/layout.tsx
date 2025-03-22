import type { Metadata } from "next";
import 'boxicons/css/boxicons.min.css';
import "./globals.css";
import { AosInit } from "./_components/aos-init";


export const metadata: Metadata = {
  title: "Portifolio Max",
  description: "cv maxleme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" />      
      </head>
      <body className="bg-gray-50">
        {children}
        <AosInit />
      </body>
    </html>
  );
}
