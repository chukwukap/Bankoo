import React from "react";
import { CreditCardDark, CreditCardLight } from "./credit-card";
import Link from "next/link";
import { cn } from "@/lib/utils";

function CreditCardsSection({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <div>
        <div className="flex justify-between items-center pb-4">
          <h5 className="text-primary-foreground  font-[500] text-lg">
            My Cards
          </h5>
          <Link href={"cards"} className="text-blue-500">
            {" "}
            see all
          </Link>
        </div>
        <div className="flex gap-6 items-center ">
          <CreditCardDark />
          <CreditCardLight />
        </div>
      </div>
    </div>
  );
}

export default CreditCardsSection;
