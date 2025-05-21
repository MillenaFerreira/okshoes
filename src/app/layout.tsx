// Imports
import type { Metadata } from "next";
import { Saira_Stencil_One, Saira } from "next/font/google";
import "./globals.css";

// Fonts config
const sairaStencil = Saira_Stencil_One({
  subsets: ['latin'],
  weight: ['400']
});

const saira = Saira({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

// Metadata
export const metadata: Metadata = {
  title: "OKNSHOES",
  description: "project developed for a front-end challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={
        `${sairaStencil.className} 
        ${saira.className}`}>
        {children}
      </body>
    </html>
  );
}
