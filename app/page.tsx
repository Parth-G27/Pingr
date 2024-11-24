// import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  if(!user) {
    return <div>No user found</div>
  }
  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20 dark:bg-black'>
      
      <h3>Welcome, {user?.firstName} </h3>
    </div>
  );
}
