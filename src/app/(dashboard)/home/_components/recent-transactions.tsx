import { Button, buttonVariants } from "@/components/ui/button";
import { txTypes } from "@/config/ui-data";
import { transactions } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

function RecentTransactions({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <div>
        <h5 className="text-primary-foreground text-2xl mb-2">
          Recent Transactions
        </h5>
        <div className="bg-foreground rounded-2xl px-5 py-4">
          <ul>
            {transactions
              .map((tx) => {
                return <ListItem key={tx.date} tx={tx} />;
              })
              .slice(0, 3)}
          </ul>
        </div>
      </div>
    </div>
  );
}

interface ListItemProps {
  method: string;
  type: string;
  date: string;
  amount: string;
  description: string;
}
const ListItem = ({ tx }: { tx: ListItemProps }) => {
  const icon = txTypes.find((t) => t.method === tx.method)?.icon!;
  const isDeposit = tx.type === "deposit";
  return (
    <li className="text-black flex items-center gap-4   ">
      <div className="relative   h-14 w-14 ">
        <Image fill src={icon} alt={tx.method} className=" " />
      </div>

      <div>
        <p className="">{tx.description}</p>
        <p className="text-gray-500">
          {new Date(Number.parseInt(tx.date)).toLocaleDateString()}
        </p>
      </div>
      <span
        className={cn(
          isDeposit ? "text-green-500" : "text-rose-600",
          "font-[400]"
        )}
      >
        {isDeposit ? tx.amount : `-${tx.amount}`}
      </span>
    </li>
  );
};

export default RecentTransactions;
