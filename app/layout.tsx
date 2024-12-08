import FigmaFooter from "@/components/figma_footer";
import "./globals.css";
import FigmaNavbar from "@/components/figma_navbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FigmaNavbar/>
        {children}
        <FigmaFooter/>
      </body>
    </html>
  );
}
