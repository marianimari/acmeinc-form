import React from "react";
import ProductImage from "./UI/ProductImage";
import Image from "next/image";
import InstaIcon from "./../public/assets/instagram.png";
import LabelProduct from "./UI/LabelProduct";
import TitleProduct from "./UI/TitleProduct";
import Price from "./UI/Price";
import PriceDiscount from "./UI/PriceDiscount";
import DateProduct from "./UI/DateProduct";
import Link from "next/link";

const ProductCard = () => {
  return (
    <>
      <div className="block rounded-xl shadow-3xl bg-white w-full md:max-w-md border border-dark-100">
        <ProductImage />
        <div className="block px-4 pt-3 pb-4">
          <LabelProduct label="penting" />
          <TitleProduct title=" Jasa Perancangan Website e-Commerce" />
          <div className="font-normal text-dark-100 text-sm mt-2">
            Mulai dari &nbsp;
            <Price price={6000000} />
            &nbsp;
            <PriceDiscount price={5000000} />
          </div>
          <div className="flex justify-between mt-3 items-center">
            <DateProduct product="Jasa Perancangan Website e-Commerce" />

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contents"
            >
              <Image
                className="cursor-pointer"
                src={InstaIcon}
                height={24}
                width={24}
                alt="Insta Icon"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
