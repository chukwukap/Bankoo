"use client";

import { sidebarNavItems } from "@/config/ui-data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

interface NavItemProps {
  name: string;
  link: string;
  icon: HTMLElement;
}

function NavItem({ item }: { item: any }) {
  const [isActive, setIsActive] = useState(false);

  const segment = usePathname();
  console.log(`segment: ${segment}`);
  useEffect(() => {
    segment.includes(item.name) ? setIsActive(true) : setIsActive(false);
  }, [item.name, segment]);

  return (
    <li
      className={cn(
        "text-[#B1B1B1] px-5 ",
        isActive && "flex px-0 gap-5 h-12 text-primary "
        // " relative before:content-[''] before:w-7 before:h-full before:absolute   before:bg-primary "
      )}
    >
      {isActive && <div className="h-full w-1.5 rounded-r-lg bg-primary " />}
      <Link
        href={item.path}
        className={cn("flex  items-center capitalize gap-5 py-2")}
      >
        {<item.icon />} <span>{item.name}</span>
      </Link>
    </li>
  );
}

export function Nav() {
  return (
    <ul className="w-full ">
      {sidebarNavItems.map((item) => {
        return <NavItem item={item} key={item.name} />;
      })}
    </ul>
  );
}
