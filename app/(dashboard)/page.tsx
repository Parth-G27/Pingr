import { wait } from "@/lib/wait";
import { currentUser } from "@clerk/nextjs/server";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<WelcomeMessageFallback />}>
        <WelcomeMessage />
      </Suspense>
    </>
  );
}

async function WelcomeMessage() {
  const user = await currentUser();
  await wait(3000);
  if (!user) {
    return <div>No user found</div>;
  }
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center p-2 pb-10 gap-16 sm:p-8 dark:bg-neutral-950">
        <h3 className="flex flex-col sm:flex-row items-start text-3xl sm:text-5xl font-bold bg-gradient-to-r from-red-600 via-red-800 to-red-600 dark:from-red-800 dark:via-red-600 dark:to-red-800 bg-clip-text text-transparent px-1 w-full">
          <span>Welcome,</span>
          <span className="text-4xl sm:text-5xl bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 dark:from-orange-600 dark:via-red-600 dark:to-orange-600 bg-clip-text text-transparent sm:ml-3">
            {user?.firstName} {user?.lastName}
          </span>
        </h3>
      </div>
    </>
  );
}

function WelcomeMessageFallback() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-4 pb-20 gap-16 sm:p-20 dark:bg-black">
      <div>Loading...</div>
    </div>
  );
}
