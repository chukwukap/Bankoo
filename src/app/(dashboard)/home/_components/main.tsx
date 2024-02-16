import { cn } from "@/lib/utils";
import React from "react";
import CreditCardsSection from "./credit-cards-section";

function MainSection({ className }: { className?: string }) {
  return (
    <section className={cn(className, "")}>
      <CreditCardsSection />
    </section>
  );
}

export default MainSection;
