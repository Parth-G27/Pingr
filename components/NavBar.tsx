import React from "react";
import { UserButton } from "@clerk/nextjs";
import Logo from "@/components/logo";
import ThemeSwitcher from "./ThemeSwitcher";
import { Separator } from "@/components/ui/separator";

export default function NavBar() {
  return (
    <>
      <div className="flex flex-col sticky top-0 z-100 bg-white dark:bg-black">
        <div className="flex w-full items-center justify-between p-4 px-8 h-[60px]  ">
          <Logo />
          <div className="flex gap-4 items-center">
            <UserButton afterSignOutUrl="/" />
            <ThemeSwitcher />
          </div>
        </div>
        <Separator />
      </div>
    </>
  );
}
