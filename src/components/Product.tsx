import { ArrowRight } from "@mui/icons-material";
import React from "react";

const Product = ({ name }: { name: string }) => {
  return (
    <li className="border border-primary bg-secondary rounded-[20px] px-[60px] py-[30px] h-[448px] w-full lg:w-[356px] flex flex-col gap-4">
      <h2 className="font-semibold text-3xl text-center">{name}</h2>
      <img className="w-full h-full object-cover"></img>
      <button className="rounded-[10px] bg-secondary border border-primary w-full min-h-[54px] font-semibold text-lg items-center flex justify-center">
        See More <ArrowRight />
      </button>
    </li>
  );
};

export default Product;
