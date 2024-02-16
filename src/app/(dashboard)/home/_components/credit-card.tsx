import Image from "next/image";
import React from "react";

export function CreditCardDark() {
  return (
    <article className="w-[350px] h-[235px] bg-gradient-to-br from-[#4C49ED] to-[#0A06F4] rounded-3xl p-7  grid items-center text-white">
      <div className="flex items-center justify-between ">
        <span>
          <p className="opacity-70">Balance</p>
          <h3 className="font-bold">$10,500</h3>
        </span>
        <div className="w-6 h-6 relative">
          <Image src={"/assets/icons/chip-card.png"} fill alt="chip card " />
        </div>
      </div>
      <div className="flex items-center justify-between ">
        <span>
          <p className="opacity-70 uppercase text-xs">Card Holder</p>
          <h3 className="font-bold">Chukwuka Uba</h3>
        </span>
        <span>
          <p className="opacity-70 uppercase text-xs">Valid Thru</p>
          <h3 className="font-bold">02/26</h3>
        </span>
      </div>
      <div className="flex items-center justify-between ">
        <p>198 **** **** 1235</p>
        <svg
          width="44"
          height="30"
          viewBox="0 0 44 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15" cy="15" r="15" fill="white" fill-opacity="0.5" />
          <circle cx="29" cy="15" r="15" fill="white" fill-opacity="0.5" />
        </svg>
      </div>
    </article>
  );
}
export function CreditCardLight() {
  return (
    <article className="w-[350px] h-[235px] bg-gradient-to-br from-[#fff] to-[#fff] rounded-3xl p-7  grid items-center text-black">
      <div className="flex items-center justify-between ">
        <span>
          <p className="opacity-70">Balance</p>
          <h3 className="font-bold">$10,500</h3>
        </span>
        <div className="w-6 h-6 relative">
          <Image
            src={"/assets/icons/chip-card-dark.png"}
            fill
            alt="chip card "
          />
        </div>
      </div>
      <div className="flex items-center justify-between ">
        <span>
          <p className="opacity-70 uppercase text-xs">Card Holder</p>
          <h3 className="font-bold">Chukwuka Uba</h3>
        </span>
        <span>
          <p className="opacity-70 uppercase text-xs">Valid Thru</p>
          <h3 className="font-bold">02/26</h3>
        </span>
      </div>
      <div className="flex items-center justify-between ">
        <p>198 **** **** 1235</p>
        <svg
          width="44"
          height="30"
          viewBox="0 0 44 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15" cy="15" r="15" fill="#9199AF" fill-opacity="0.5" />
          <circle cx="29" cy="15" r="15" fill="#9199AF" fill-opacity="0.5" />
        </svg>
      </div>
    </article>
  );
}
