import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
//import custom font

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      {/* the antialiased class is a tailwind class that helps smooth out the font */}
    </html>
  );
}
