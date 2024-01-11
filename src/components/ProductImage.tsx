import React from "react";
import styles from "./ProductImage.module.css";
import { Close, ShoppingCart } from "@mui/icons-material";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { DialogTitle } from "@mui/material";
import { DialogDescription } from "@radix-ui/react-dialog";
import Image from "next/image";

interface ProductImageProps {
  imageRef: any;
  image: string;
  title: string;
  onClick: any;
  onClose: any;
  selected: boolean;
}

const ProductImage = ({
  imageRef,
  image,
  title,
  onClick,
  onClose,
  selected,
}: ProductImageProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <li className={`relative list-none ${styles.image}`} onClick={() => {}}>
          <div className="absolute p-5 w-full font-semibold text-4xl bg-[#ffffff11] backdrop-blur-lg text-white">
            {title}
          </div>
          <img
            src={image}
            alt={`Image of ${title}`}
            className={`w-full h-full object-cover shadow-2xl shadow-neutral-400 cursor-pointer transition-all duration-300`}
            ref={imageRef}
          />
        </li>
      </DialogTrigger>
      <DialogContent className="max-w-none w-[90dvw] h-[90dvh] p-0 border-none !rounded-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          <img
            src={image}
            alt={`Image of ${title}`}
            className="h-full w-full object-cover hidden lg:block"
          />
          <div className="py-24 px-6 md:p-24 flex flex-col">
            <div>
              <img
                src={image}
                className="absolute top-0 left-0 h-[200px] w-full object-cover block lg:hidden"
              />
              <div className="top-0 left-0 h-[200px] w-full bg-[#00000022] backdrop-blur-lg absolute block lg:hidden"></div>
              <h2 className="text-4xl font-semibold absolute -translate-y-1/2 lg:translate-y-0 text-white lg:text-text">
                {title}
              </h2>
            </div>
            <Button className="px-24 flex flex-row gap-4 mt-auto w-max mx-auto">
              <ShoppingCart />
              Purchase
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductImage;
