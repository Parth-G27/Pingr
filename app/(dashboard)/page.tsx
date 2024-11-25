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
      <div className="flex min-h-screen w-full flex-col items-start p-4 pb-20 gap-16 sm:p-20 dark:bg-black">
        <h3 className="flex flex-col sm:flex-row items-start sm:items-center text-4xl sm:text-5xl font-bold bg-gradient-to-r from-red-600 via-red-800 to-red-600 dark:from-red-800 dark:via-red-600 dark:to-red-800 bg-clip-text text-transparent px-2">
          <span>Welcome,</span>
          <span className="bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 dark:from-orange-600 dark:via-red-600 dark:to-orange-600 bg-clip-text text-transparent mt-2 sm:mt-0 sm:ml-3">
            {user?.firstName} {user?.lastName}
          </span>
        </h3>
      </div>
    </>
  );
}

function WelcomeMessageFallback() {
  return (
    <div className="flex min-h-screen w-full flex-col items-start p-4 pb-20 gap-16 sm:p-20 dark:bg-black">
      <div>Loading...</div>
    </div>
  );
}
