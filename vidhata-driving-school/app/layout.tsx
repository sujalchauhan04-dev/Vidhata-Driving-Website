import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vidhata Driving School | Porbandar",
  description:
    "Vidhata Motor Driving School — learn to drive with Rajesh Chauhan. Four-wheeler, two-wheeler, and refresher lessons in Porbandar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
