import localFont from "next/font/local";
import "./globals.css";

const dmSans = localFont({
  src: "./fonts/DMSans.ttf",
  variable: "--font-dmsans-serif",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link data-rh="true" rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${dmSans.variable}  antialiased`}>{children}</body>
    </html>
  );
}
