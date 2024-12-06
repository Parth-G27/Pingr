import React from 'react'
import { Skeleton } from "@/components/ui/skeleton";

export function WelcomeMessageFallback() {
    return (
      <div className="flex h-fit w-full flex-col">
        <Skeleton className="w-[75%] h-[30px] sm:w-[70%] sm:h-[48px] rounded-md my-2" />
        <Skeleton className="w-[75%] h-[30px] sm:w-[70%] sm:h-[48px] rounded-md my-2" />
      </div>
    );
  }