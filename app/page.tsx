"use client";

import { Main } from "@/components/layout/mainwraper";
import { Button } from "react-aria-components";

export default function Home() {
  return (
    <Main className="hidden bg-blue-200">
      <Button className="bg-green-500 rac-hover:bg-blue-300">THIS</Button>
    </Main>
  );
}
