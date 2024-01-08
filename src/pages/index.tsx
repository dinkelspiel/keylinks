import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-background h-[100dvh] text-text font-poppins">
      <header className="h-[60px] bg-background border-b border-b-accent flex flex-row items-center px-[165px]">
        <div className="font-semibold text-3xl">KeyLinks</div>
        <nav className="ms-auto flex gap-14">
          <a href="/products">Products</a>
          <a href="/support">Support</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </header>
      <div className="px-[165px] py-[100px]"></div>
    </main>
  );
}
