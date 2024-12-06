import { useForm } from "react-hook-form";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./ui/sheet";
import { createCollectionSchema, createCollectionSchemaType } from "../schema/CreateCollection";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import  {zodResolver}  from "@hookform/resolvers/zod";

interface Props {
    keepCount: number;
    countFunction: (count: number) => void;
    open: boolean;
    onOpenChange: (open: boolean) => void;
  }

function CreateCollectionSheet({ open, onOpenChange }: Props) {
    const form = useForm<createCollectionSchemaType>({
        resolver: zodResolver(createCollectionSchema),
        defaultValues: {},
      });
      
      const onSubmit = (data: createCollectionSchemaType) => {
        console.log("SUBMITTED", data);
      };
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
  <SheetContent>
    <SheetHeader className="flex flex-col items-center">
      <SheetTitle>Add new collection</SheetTitle>
      <SheetDescription>Collections are a way to group your tasks</SheetDescription>
    </SheetHeader>

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Personal" {...field} />
              </FormControl>
              <FormDescription>Collection name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField control={form.control} name="color" /> */}
      </form>
    </Form>
  </SheetContent>
</Sheet>
  );
}

export default CreateCollectionSheet;

