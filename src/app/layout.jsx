import "./globals.css";
import Navbar from "@/components/Navbar";
import ConvexClientProvider from "./ConvexClientProvider";

export const metadata = {
  title: "Clipboard",
  description: "Clippy for clipboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="min-h-screen min-w-screen">
        <ConvexClientProvider>
          <Navbar />
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
