import { wait } from "@/lib/wait";
import { currentUser } from "@clerk/nextjs/server";
import { Suspense } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import NoCollectionIcon from "@/components/icons/noCollectionIcon";
import prisma from "../../lib/prisma";
import LoadingCollections from "@/components/LoadingCollections";
import { WelcomeMessageFallback } from "../../components/WelcomeMessageFallback";
import AddCollectionButton from "../../components/AddCollectionButton";

export default async function Home() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center p-2 pb-10 gap-16 sm:p-8 dark:bg-neutral-950">
        <Suspense fallback={<WelcomeMessageFallback />}>
          <WelcomeMessage />
        </Suspense>
        

        <Suspense fallback={<LoadingCollections />}>
          <Collection />
        </Suspense>
      </div>
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
      <h3 className="flex flex-col sm:flex-row items-start text-3xl sm:text-5xl font-bold bg-gradient-to-r from-red-600 via-red-800 to-red-600 dark:from-red-800 dark:via-red-600 dark:to-red-800 bg-clip-text text-transparent px-1 w-full">
        <span>Welcome,</span>
        <span className="text-4xl sm:text-5xl bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 dark:from-orange-600 dark:via-red-600 dark:to-orange-600 bg-clip-text text-transparent sm:ml-3">
          {user?.firstName} {user?.lastName}
        </span>
      </h3>
    </>
  );
}

async function Collection() {
  await wait(4000);
  const user = await currentUser();
  const collections = await prisma.collection.findMany({
    where: {
      userID: user?.id,
    },
  });
  if (collections.length === 0) {
    return (
      <>
        <div className=" flex flex-col gap-5 relative z-10 w-11/12 sm:w-2/3">
          <Alert className="">
            <NoCollectionIcon />
            <AlertTitle>There are no collections yet !</AlertTitle>
            <AlertDescription>
              Create a collection to get started
            </AlertDescription>
          </Alert>
          <AddCollectionButton/> 
        </div>
      </>
    );
  }
  return (<>
  <div>
    Collections : {collections.length}
    <ul>
        {collections.map((item,index) => (
          <li key={index}>{item.id}{item.name}</li>
        ))}
    </ul>
     
  </div>
  <AddCollectionButton/> 
  </>);
}
