import FigmaFooter from "@/components/figma_footer";
import "./globals.css";
import FigmaNavbar from "@/components/figma_navbar";
import { CartProvider } from "../app/context/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <FigmaNavbar />
          {children}
          <FigmaFooter />
        </CartProvider>
      </body>
    </html>
  );
}