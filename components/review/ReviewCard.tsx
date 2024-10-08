"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Question } from "@prisma/client";
import { ReviewForm } from "@/types";
import useReviewPageStore from "@/store/useReviewPageStore";
import { TextReviewCard } from "../textReview/TextReviewCard";
import { VideoReviewCard } from "../videoReview/VideoReviewCard";
import { PersonalDetialCard } from "../textReview/PersonalDetailCard";
import ThankYouCard from "../ThankYouCard";

export default function ReviewCard({ reviewForm }: { reviewForm: ReviewForm }) {
  const { reviewButton, setReviewButton, detailsButton, submitButton } =
    useReviewPageStore();

  return (
    <>
      {submitButton ? (
        <ThankYouCard />
      ) : reviewButton === "Text" && detailsButton ? (
        <PersonalDetialCard image={reviewForm.image} />
      ) : reviewButton === "Text" ? (
        <TextReviewCard
          questions={reviewForm.questions}
          image={reviewForm.image}
        />
      ) : reviewButton == "Video" ? (
        <VideoReviewCard
          questions={reviewForm.questions}
          image={reviewForm.image}
        />
      ) : (
        <Card className="w-[450px] px-[2%]">
          <CardHeader>
            <div className="flex justify-center">
              <Image
                src={reviewForm.image!}
                alt="logo"
                height={80}
                width={80}
                className="rounded-full"
              />
            </div>

            <CardTitle className="text-center text-[#33313B]">
              {reviewForm.slug.toUpperCase()}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-[#33313B] font-normal text-lg">
              {reviewForm.heading}
            </div>
            <div className="mt-3">
              <ul>
                {reviewForm.questions.map((q: Question) => (
                  <li key={q.id}>Q. {q.question} ?</li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button
              onClick={() => {
                setReviewButton("Video");
                console.log("Clicked Button: ", reviewButton);
              }}
              className="w-full"
            >
              Record a Video
            </Button>
            <Button
              onClick={() => {
                setReviewButton("Text");
                console.log("Clicked Button: ", reviewButton);
              }}
              className="w-full"
            >
              Write a Testimonial
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
