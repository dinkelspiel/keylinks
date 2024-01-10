import Image from "next/image";
import { Inter } from "next/font/google";
import Product from "@/components/Product";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-background min-h-[100dvh] text-text font-poppins">
      <Header />
      <div className="px-4 lg:px-[165px] pt-[150px] pb-[100px] grid grid-cols-1 lg:grid-cols-2 border-b border-accent">
        <div></div>
        <div className="font-semibold flex flex-col gap-8">
          <div className="text-6xl">Keylinks: Where Elegance Meets Utility</div>
          <div className="text-accent text-3xl">
            Your Key to Modern Convenience and Personalized Style!
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 border-b border-accent py-8">
        <h2 className="font-semibold text-3xl">Our Products</h2>
        <ul className="grid grid-cols-1 w-full px-4 lg:grid-cols-3 lg:w-max gap-4">
          <Product name="KeyClips" />
          <Product name="KeyRings" />
          <Product name="KeyHub" />
        </ul>
      </div>
      <Footer />
    </main>
  );
}
