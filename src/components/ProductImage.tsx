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
import Link from "next/link";

interface ProductImageProps {
  imageRef: any;
  image: string;
  title: string;
  onClick: any;
  onClose: any;
  selected: boolean;
  href: string;
}

const ProductImage = ({
  imageRef,
  image,
  title,
  onClick,
  onClose,
  selected,
  href,
}: ProductImageProps) => {
  return (
    <Link href={href}>
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
    </Link>
  );
};

export default ProductImage;
