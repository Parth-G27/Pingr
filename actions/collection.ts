"use server";
import  prisma  from "@/lib/prisma";
import { createCollectionSchemaType } from "@/schema/CreateCollection";
import { currentUser } from "@clerk/nextjs/server";

export async function createCollection(form: createCollectionSchemaType) {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  return await prisma.collection.create({
    data: {
      userID: user.id,
      color: form.color,
      name: form.name,
    },
  });
}