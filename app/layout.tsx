import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Button_back from "./components/button_back";

export const metadata: Metadata = {
  title: "Benjamin AUGER - Portfolio",
  description: "Modern and minimalist portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='scrollbar-hide' >
        <Header />
        {children}
        <Button_back />
      </body>
    </html>
  );
}
