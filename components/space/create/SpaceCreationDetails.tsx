"use client";

import { useSpaceDataStore } from "@/store/useSpaceDataStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const formSchema = z.object({
  projectName: z
    .string()
    .min(3, {
      message: "name needs to be atleast 3 characters",
    })
    .max(30, {
      message: "Title must be 100 characters or less.",
    }),
  projectSlug: z
    .string()
    .min(3, {
      message: "slug needs to be atleast 3 characters",
    })
    .max(30, {
      message: "Description must be 500 characters or less.",
    }),
});

interface SpaceCreationDetailsProps {
  page: "edit" | "create";
  disabled: boolean;
}

export const SpaceCreationDetails = ({
  page,
  disabled,
}: SpaceCreationDetailsProps) => {
  const router = useRouter();
  const params = useSearchParams();
  const paramsError = params.get("error");
  const [error, setError] = useState<null | string>(null);
  const {
    spaceCreationDetails: spaceCreationDetailsState,
    setSpaceCreationDetails,
  } = useSpaceDataStore();
  const initializeSpaceData = useSpaceDataStore(
    (state) => state.initializeSpaceData
  );

  useEffect(() => {
    initializeSpaceData();
    console.log("runned");
  }, [initializeSpaceData]);

  useEffect(() => {
    if (paramsError === "missingDetails")
      setError("you need to add these fields to save this space");
  }, [paramsError]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: spaceCreationDetailsState.projectName || "",
      projectSlug: spaceCreationDetailsState.projectSlug || "",
    },
    values: {
      projectName: spaceCreationDetailsState.projectName || "",
      projectSlug: spaceCreationDetailsState.projectSlug || "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (
      spaceCreationDetailsState.projectSlug === null ||
      spaceCreationDetailsState.projectName === null ||
      spaceCreationDetailsState.projectName.length === 0 ||
      spaceCreationDetailsState.projectSlug.length === 0
    ) {
    }
    setSpaceCreationDetails(values);
    if (page === "create") router.push("/space/create?page=2");
    else
      router.push(
        `/space/${spaceCreationDetailsState.projectSlug}/edit?page=2`
      );
  }

  return (
    <div className="w-full max-h-screen h-full flex justify-center items-center gap-4">
      <div className="md:w-3/4 my-6 lg:w-1/2 space-y-6">
        <div className="w-full">
          <h1 className="text-2xl font-bold">It is really simple</h1>
          <p>
            This page will not be visible to your customers, it is for creating
            this space for you
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 mt-8"
            >
              <FormField
                control={form.control}
                name="projectName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={disabled}
                        placeholder="What is your project name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="projectSlug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Slug <span className="text-[8px] text-red-600">This can&apos;t be changed</span></FormLabel>
                    <FormControl>
                      <Input
                        disabled={disabled}
                        placeholder="Enter a unique slug for generating a URL for your space"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
        {error && <p className="text-sm text-red-600">*{error}*</p>}
        <Button
          type="submit"
          className="w-full rounded-md"
          onClick={form.handleSubmit(onSubmit)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
