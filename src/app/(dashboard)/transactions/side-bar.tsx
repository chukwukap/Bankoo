import { cn } from "@/lib/utils";
import React from "react";
import RecentTransactions from "../home/_components/recent-transactions";

function HomeSidebar({ className }: { className?: string }) {
  return (
    <aside className={cn(className, "")}>
      <section>
        <RecentTransactions />
      </section>
    </aside>
  );
}

export default HomeSidebar;
