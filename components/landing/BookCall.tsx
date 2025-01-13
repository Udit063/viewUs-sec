"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export const BookCall = () => {
  return (
    <div className="max-w-7xl mx-auto w-full flex flex-col gap-7 rounded-3xl p-3 pb-10 lg:pb-0">
      <div className="py-4 flex flex-col gap-6">
        <p className="text-gray-400 font-thin font-mono text-md">FAQs</p>
        <h1 className="text-white text-4xl md:text-5xl">
          Still confused? Let&apos;s talk
        </h1>
      </div>
      <div className="text-white flex flex-col lg:flex-row justify-around">
        <Accordion type="single" collapsible className="w-full lg:w-2/3">
          <AccordionItem value="item-1" className="bg-[#611bbc]">
            <AccordionTrigger>Who can use ViewUs?</AccordionTrigger>
            <AccordionContent className="text-gray-300">
              Any business wanting to showcase customer testimonials.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="bg-[#611bbc]">
            <AccordionTrigger>How does it work?</AccordionTrigger>
            <AccordionContent className="text-gray-300">
              You share a link with customers, they either submit text review or
              upload video, and you embed them on your site.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="bg-[#611bbc]">
            <AccordionTrigger>How do I embed testimonials?</AccordionTrigger>
            <AccordionContent className="text-gray-300">
              Copy the embed code from your dashboard and paste it into your
              website.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="bg-[#611bbc]">
            <AccordionTrigger>Can I customize the widget?</AccordionTrigger>
            <AccordionContent className="text-gray-300">
              Yes, you can match the widget to your brand’s look.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="bg-[#611bbc]">
            <AccordionTrigger>Is it easy to use?</AccordionTrigger>
            <AccordionContent className="text-gray-300">
              Absolutely! No coding skills are required.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex items-center justify-center">
          <Card className="h-[300px] bg-gray-200 lg:min-h-[350px] border-dashed border-gray-950">
            <CardHeader>
              <CardTitle>Have a call with us</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-5 justify-center items-center">
              <p className="text-gray-800 font-normal text-md">
                Schedule a 15 minutes call with Ankur,
                <span className="block">
                  {" "}
                  and setup your testimonials together
                </span>
              </p>
              <Link
                href="/#book-call"
                className="hidden lg:flex justify-around items-center border-dashed border border-gray-400 p-2 rounded-lg w-full hover:bg-[#141111] hover:text-white duration-500"
              >
                <Image
                  className="h-12 w-12 rounded-lg"
                  width={100}
                  height={100}
                  src="https://d3eyp937ijscg0.cloudfront.net/viewus_images/founder_profile.jpeg"
                  alt="Profile"
                />
                <p className="text-md font-normal underline flex gap-3">
                  Book a call <MoveRight />{" "}
                </p>
              </Link>
              <Link
                href="https://cal.com/ankur-sharma/15min"
                className="flex lg:hidden justify-around items-center border-dashed border border-gray-400 p-2 rounded-lg w-full hover:bg-[#141111] hover:text-white duration-500"
              >
                <Image
                  className="h-12 w-12 rounded-lg"
                  width={100}
                  height={100}
                  src="https://d3eyp937ijscg0.cloudfront.net/viewus_images/founder_profile.jpeg"
                  alt="Profile"
                />
                <p className="text-md font-normal underline flex gap-3">
                  Book a call <MoveRight />{" "}
                </p>
              </Link>
              <div className="flex gap-2 font-normal text-sm text-gray-800">
                <p className="flex gap-2 items-center">
                  or email
                  <MoveRight size={15} />{" "}
                </p>
                <Link
                  className="border-b border-b-gray-600 "
                  href="mailto://team@viewus.in"
                >
                  team@viewus.in
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
