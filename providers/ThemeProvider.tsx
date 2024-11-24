"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ReactNode, useState, useEffect } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Ensures the component renders only after the client has mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{/* Avoid rendering until mounted */}</>;
  }

  return (
    <NextThemeProvider
    enableSystem 
    attribute="class" 
    defaultTheme="system" // Default to the system's preference
    >
      {children}
    </NextThemeProvider>
  );
}
