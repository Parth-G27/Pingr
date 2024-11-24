"use client";
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Tabs defaultValue={theme}>
      <TabsList className="border border-neutral-300 py-3 dark:border-neutral-800 dark:bg-[#030303]">
        <TabsTrigger value="light" onClick={() => setTheme("light")}>
          <SunIcon className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>
        <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
          <MoonIcon className="h-[1.2rem] w-[1.2rem] transition-transform transform dark:rotate-0 rotate-45" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default ThemeSwitcher;
