import Header from "@/components/Header/Header";
import "./globals.css";
import Providers from "./Providers";
import NavBar from "@/components/NavBar/NavBar";
import { Suspense } from "react";
import Loading from "./loading";
import Search from "@/components/Search/Search";

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
          <Search />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}
