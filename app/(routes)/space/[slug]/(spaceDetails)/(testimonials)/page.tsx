import { FrownIcon } from "lucide-react";
import { ManageTestimonials } from "@/components/space/ManageTestimonials";
import SpaceInfo from "@/components/space/SpaceInfo";
import { ReviewType } from "@/models/review_model";
import { getSpaceReviews } from "@/actions/testimonial";

export const metadata = {
  title: "View Us - space",
  description:
    "Ankur Sharma is a full stack developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

interface TestimonialType {
  reviewType: ReviewType;
}

async function fetchTestimonials(slug: string) {
  try {
    const response = await getSpaceReviews(slug);

    if (!response.success) return null;

    return response.data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return null;
  }
}

const SpacePage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const response = await fetchTestimonials(slug);
  console.log({ response });
  if (!response || response === null) {
    return (
      <div className="h-full w-full  flex flex-col justify-center pt-24 md:pt-0  px-6 items-center">
        <div className="max-w-xl flex flex-col justify-center items-center">
          <div className="bg-[#E9F8FF] w-[80px] h-[80px] rounded-full flex justify-center items-center mx-6">
            <FrownIcon color="#009EE2" size={30} />
          </div>
          <h1 className="text-3xl font-medium text-center">
            We are facing a bit of an issue, please try again later
          </h1>
        </div>
      </div>
    );
  }
  const { space, extraReviews } = response;
  const spaceTestimonials = response.reviews || [];
  const testimonialCounts = {
    total: spaceTestimonials.length,
    text: spaceTestimonials.filter((t: TestimonialType) => t.reviewType === 0)
      .length,
    video: spaceTestimonials.filter((t: TestimonialType) => t.reviewType === 1)
      .length,
    imported: spaceTestimonials.filter(
      (t: TestimonialType) => t.reviewType === 2
    ).length,
  };

  if (spaceTestimonials.length === 0) {
    return (
      <div className="flex flex-col justify-center pb-4 md:pr-4">
        <div className="mb-3 px-4 md:px-7">
          {slug && (
            <SpaceInfo
              space={space}
              extraTextReviews={extraReviews.text}
              extraVideoReviews={extraReviews.video}
              testimonialCounts={testimonialCounts}
            />
          )}
        </div>
        <div className="h-full w-full flex justify-center items-center">
          <div className="bg-[#E9F8FF] w-[80px] h-[80px] rounded-full flex justify-center items-center mx-6">
            <FrownIcon color="#009EE2" size={30} />
          </div>
          <h1 className="text-3xl font-medium">You have no testimonials yet</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center pb-4 md:pr-4">
      <div className="mb-3 px-4 md:px-7 mt-4">
        {slug && (
          <SpaceInfo
            space={space}
            extraTextReviews={extraReviews.text}
            extraVideoReviews={extraReviews.video}
            testimonialCounts={testimonialCounts}
          />
        )}
      </div>
      <ManageTestimonials testimonials={spaceTestimonials} />
    </div>
  );
};

export default SpacePage;
