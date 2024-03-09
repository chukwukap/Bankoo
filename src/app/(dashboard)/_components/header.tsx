"use client";
import React from "react";
import SearchBar from "./search-bar";
import { BellIcon, SettingsIcon, User } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { montserrat } from "@/lib/fonts";
import Hamburger from "./hamburger";

function Header({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        className,
        montserrat.className,
        "bg-foreground w-full h-20  py-2 px-7 grid items-center"
      )}
    >
      <div className="flex items-center justify-between gap-4 p-2">
        <Hamburger className="sm:hidden" />
        <h1 className="mr-auto mx-auto sm:mx-0 text-primary-foreground font-[500] text-2xl">
          {"Overview"}
        </h1>
        <SearchBar
          className="hidden sm:flex"
          placeholder="Search..."
          onSearch={(searchTerm) => {
            console.log(searchTerm);
            return Promise.resolve();
          }}
        />
        <Button
          className={cn(
            buttonVariants({
              variant: "secondary",
              size: "sm",
              className: "hidden sm:block",
            })
          )}
        >
          <SettingsIcon className="text-[#718EBF] " />
        </Button>
        <Button
          className={cn(
            "sm:hidden",
            buttonVariants({
              variant: "secondary",
              size: "sm",
              className: "hidden sm:block",
            })
          )}
        >
          {" "}
          <BellIcon className="text-[#FE5C73]" />
        </Button>
        <button className={cn("relative w-10 h-10")}>
          <Image
            className="aspect-square object-cover object-top rounded-full"
            src={"/assets/images/chukwuka.png"}
            fill
            alt="chukwuka"
          />
        </button>
      </div>
      {/* <div className="sm:hidden">
        <SearchBar />
      </div> */}
    </div>
  );
}

export default Header;
