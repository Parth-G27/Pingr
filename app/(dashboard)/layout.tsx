import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center dark:bg-neutral-950">
      {/* Wrapper for content with responsive width */}
      <div className="flex-grow w-full max-w-[90%] sm:max-w-[1080px] px-4 py-8 justify-center pt-[40px]">
        {children}
      </div>
    </div>
  );
}

export default Layout;
