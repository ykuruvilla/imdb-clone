import Header from "@/components/Header/Header";
import "./globals.css";
import Providers from "./Providers";
import NavBar from "@/components/NavBar/NavBar";
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
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
