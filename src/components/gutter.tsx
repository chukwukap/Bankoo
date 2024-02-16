import React, { ReactNode } from "react";

function Gutter({ children }: { children: ReactNode }) {
  return <div className="container mx-auto h-full">{children}</div>;
}

export default Gutter;
