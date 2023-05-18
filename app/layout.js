import Header from "@/components/Header/Header";
import "./globals.css";
import Providers from "./Providers";
export const metadata = {
  title: "IMDb Clone",
  description: "A clone of the IMDb Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
