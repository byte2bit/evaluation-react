import type { Metadata } from "next";
/* 
import { Geist, Geist_Mono } from "next/font/google"; */
import "./globals.css";
import Header from "@/components/Header";

/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/
export const metadata: Metadata = {
  title: "Avaliação de Desempenho",
  description: "Avaliação de Desempenho",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-br"
    // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="content">
          <header>
            <Header />
          </header>
          <main className="grow mt-20 p-4">{children}</main>
          <footer id="footer" className="bg-gray-800 text-center text-white text-sm m-0 p-1">&copy; Núcleo Engenharia - V2.0 </footer>
        </div>
      </body>
    </html>
  );
}
