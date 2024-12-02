import React, { ReactNode } from "react";

function Layout({ children } : { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center dark:bg-neutral-950">
      <div className="flex-grow w-full max-w-[90%] sm:max-w-[1280px] px-4 py-8 justify-center pt-[40px]">
        {children}
      </div>
    </div>
  );
}

export default Layout;
