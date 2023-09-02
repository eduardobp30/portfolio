import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import "@styles/globals.css";
import { Open_Sans } from "next/font/google";
import { ThemeContextProvider } from "@contexts/ThemeContext";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Eduardo Barbosa - Front-end Developer",
  description: "My portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={open_sans.className}>
      <body>
        <ThemeContextProvider>
          <div className="min-h-screen py-4 md:py-8 flex justify-center transition ease-in-out duration-500 bg-[#eaebed] text-[#2e424d] dark:bg-[#181818] dark:text-[#ffffff]">
            <div className="px-4 flex flex-col max-w-6xl lg:px-6">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
