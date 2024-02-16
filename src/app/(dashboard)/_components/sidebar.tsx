import { sidebarNavItems } from "@/config/ui-data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { Nav } from "./nav";
import Image from "next/image";

function Sidebar({ className }: { className?: string }) {
  return (
    <aside className={cn(className, "h-full w-56 bg-foreground ")}>
      <div>
        <div className="w-full h-20 flex items-center p-3 pl-7">
          <div className="w-full h-1/2 relative">
            <Image
              className="object-contain"
              alt="bank dash logo"
              fill
              src={"/assets/images/logo.png"}
            />
          </div>
        </div>
        <Nav />
      </div>
    </aside>
  );
}

export default Sidebar;
