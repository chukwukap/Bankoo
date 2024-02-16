import { cn } from "@/lib/utils";
import React from "react";

export default function WeeklyActivities({
  className,
}: {
  className?: string;
}) {
  return (
    <section className={cn(className)}>
      <h1>(WeeklyActivities)</h1>
    </section>
  );
}
