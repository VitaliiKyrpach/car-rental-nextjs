import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal',],
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "CarRental",
  description: "rental service website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
