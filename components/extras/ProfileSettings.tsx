"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Save, Trash2, EyeOff, Eye } from "lucide-react";
import profileImage from "@/public/assets/images/profile.png";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { User } from "@prisma/client";
import { profileSchema } from "@/schemas/user";
import axios from "axios";
import { toast } from "sonner";


export const ProfileSettings = ({ user }: { user: User }) => {
  const cdn = process.env.NEXT_PUBLIC_CDN_NAME;

  const [imageKey] = useState(Date.now());

  const [selectedImage, setSelectedImage] = useState<string | null>(
    user.image ? `${cdn}/${user.image}?v=${imageKey}` : null
  );

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user.name || "",
      email: user.email,
      company: user.company || "",
      jobTitle: user.JobTitle || "",
    },
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      form.setValue("image", file, { shouldValidate: true });
    }
  };

  const handleChangeImage = () => {
    fileInputRef.current?.click();
  };


  const handleSaveChanges = async (data: z.infer<typeof profileSchema>) => {
    // Ensure the email is not modifiable
    data.email = user.email!;

    // Convert the form data to FormData to handle image uploads
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("company", data.company || "");
    formData.append("jobTitle", data.jobTitle || "");
    if (data.image instanceof File) {
      formData.append("image", data.image);
    }

    try {
      const response = await axios.post("/api/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Details updated successfully");
      console.log(response.status);
      //toast profile updated
    } catch (error) {
      toast.error("Sorry, unable to process your changes!");
      console.error("Error saving profile:", error);
    }
  };


  return (
    <div>
      <div className="mb-2">
        <h2 className="text-lg font-semibold text-neutral-700 flex items-center">
          Profile
        </h2>
      </div>
      <div className="w-1/2 ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSaveChanges)}
            className="space-y-4"
          >
            <div className="flex gap-4 items-center">
              <div className="relative w-[64px] h-[64px] rounded-full overflow-hidden bg-[#E9F8FF] flex items-center justify-center">
                <Image
                  src={selectedImage ? selectedImage : profileImage}
                  alt="Selected Image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <Button
                onClick={handleChangeImage}
                variant="outline"
                className="shadow-md"
              >
                Change Image
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
                aria-label="Change profile image"
              />
            </div>

            {/* Name field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your name" />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.name?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            {/* Email field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} disabled placeholder="Enter your email" />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.email?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            {/* Company field */}
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your company" />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.company?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            {/* Job title field */}
            <FormField
              control={form.control}
              name="jobTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your job title" />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.jobTitle?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <Button className="w-full shadow-md mt-24" type="submit">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </form>
        </Form>

      </div>
    </div>
  );
};