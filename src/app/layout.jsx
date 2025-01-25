import ThemeProvider from "@/lib/theme-provider";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Clipboard",
  description: "Clippy for clipboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="min-h-screen min-w-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
