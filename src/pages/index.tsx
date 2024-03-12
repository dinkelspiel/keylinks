import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ProductImage from "@/components/ProductImage";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  const item1Ref = useRef<HTMLImageElement>(null);
  const item2Ref = useRef<HTMLImageElement>(null);
  const item3Ref = useRef<HTMLImageElement>(null);

  let [selectedImage, setSelectedImage] = useState<number>(0);

  useEffect(() => {
    if (window !== undefined) {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setScrollY(currentScrollY);
      };

      window.addEventListener("scroll", handleScroll);

      setWindowHeight(window.innerHeight);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  });

  return (
    <>
      <Head>
        <title>Keylinks UF</title>
        <meta
          name="description"
          content="Hemsidan för ungdomsföretaget Keylinks"
          key="desc"
        />
        <meta property="og:title" content="Keylinks UF" />
        <meta
          property="og:description"
          content="Hemsidan för ungdomsföretaget Keylinks"
        />
        <meta property="og:image" content="/logo.png" />
        <link rel="icon" type="image/x-icon" href="/logo.png"></link>
      </Head>
      <main className={`bg-background text-text ${inter.className}`}>
        <header
          className={`border-b-2 border-neutral-300 w-full flex items-center justify-center px-4 lg:px-24 fixed h-[100px] top-0`}
        >
          <div className={`uppercase font-bold text-lg`}>Keylinks</div>
          <a
            className="font-semibold text-sm flex-1 flex justify-end"
            href="mailto:keylinkuf@gmail.com"
          >
            Contact Us
          </a>
        </header>
        <div>
          <div className="px-4 lg:px-32 grid grid-cols-1 lg:grid-cols-[0.3fr,1fr] 2xl:grid-cols-[0.6fr,1fr] gap-8 lg:gap-36 min-h-[100dvh] pt-[128px] lg:pt-[100px]">
            <div className={`flex items-center h-full`}>
              <h1 className="text-6xl lg:text-[48px] lg:leading-[52px] 2xl:text-[72px] font-black leading-[58px] 2xl:leading-[68px] uppercase text-text">
                Where Elegance Meets Utility
                {/* <div className="hidden md:block">m</div>
              <div className="hidden lg:block">l</div>
              <div className="hidden xl:block">x</div>
              <div className="hidden 2xl:block">2</div> */}
              </h1>
            </div>
            <div className="grid grid-cols-[repeat(2,1fr)] my-auto items-center gap-8 lg:gap-12 2xl:gap-24 pb-4">
              <ProductImage
                imageRef={item1Ref}
                image="/1.jpg"
                title="KeyClip"
                onClick={() => setSelectedImage(1)}
                onClose={() => setSelectedImage(0)}
                selected={selectedImage === 1}
                href="https://docs.google.com/forms/d/1u2fQ84DSGyUuwgTVgxJRSqPO6PEm9UpsudQ7S0BJJLE/edit"
              />
              <ProductImage
                imageRef={item1Ref}
                image="/2.jpg"
                title="KeyRing"
                onClick={() => setSelectedImage(2)}
                onClose={() => setSelectedImage(0)}
                selected={selectedImage === 2}
                href="https://docs.google.com/forms/d/13UlWFiE7gsaVc1hkYAMohEUVnie5D1licLxsOwj9QlU/edit"
              />
              {/* <ProductImage ref={item1Ref} image="/3.jpg" title="KeyHub" /> */}
            </div>
          </div>
          <footer
            className={`grid grid-cols-3 px-24 items-center fixed h-[100px] w-[100dvw] bottom-0`}
          >
            <div className="font-semibold text-sm"></div>
            <div className="flex justify-center gap-4"></div>
            <div className="text-right text-sm text-neutral-600 flex items-center justify-end gap-4"></div>
          </footer>
        </div>
        <div className="w-[100dvw] py-16 text-lg flex flex-col gap-8 items-center px-6">
          <div className="w-full lg:w-1/2">
            Som VD för KeyLinks UF har jag sett hur vi har gått från en tanke
            till verklighet – vilken resa det har varit! framtagandet av vår
            produkt har inte varit enkelt. Det har tagit mer än ett år av
            designarbete, mer än tio olika versioner av produkten – vår resa har
            varit både utmanande och upplysande. Vi har finslipat, omformat, och
            förbättrat vår produkt och varje steg har vi lärt oss något nytt och
            viktigt. Men det stannar inte här. Vi tar emot feedback och kämpar
            varje dag för att förbättra produkten.
          </div>
          <div className="w-full lg:w-1/2">
            Vår resa har varit som en berg- och dalbana. Vi har varit på
            Nyhetsmorgon där vi har presenterat våra ideal och hur vi fungerar,
            samtidigt hamnade vi nästan i trubbel på grund av vårt namn. Trots
            allt som har skett har vi aldrig stannat upp, vi fortsätter eftersom
            vi har en vision som sträcker sig längre än en produkt. Vi vill
            utveckla och lansera fler produkter och sträcka oss till flera
            marknader. Vi fortsätter att designa och utveckla, i en ständig
            strävan att förbättra och innovera. Vi är ett företag som löser
            problem; vi är ett företag som ständigt söker nya lösningar.
          </div>
          <div className="text-right w-full lg:w-1/2 italic">
            Atilla Uygur, VD
          </div>
        </div>
      </main>
    </>
  );
}
