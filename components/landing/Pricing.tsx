import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PricingTier {
  name: string;
  followers: string;
  price: number;
  originalPrice: number;
  features: string[];
  highlighted?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Beginner",
    followers: "1k-10k followers",
    price: 0,
    originalPrice: 12,
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    name: "Pro User",
    followers: "10k-100k followers",
    price: 14.99,
    originalPrice: 19,
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    highlighted: true,
  },
  {
    name: "Elite",
    followers: "100k+ followers",
    price: 22,
    originalPrice: 29,
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
];

export default function Pricing() {
  return (
    <div className="w-full max-w-[80%]">
      <div className=" mx-auto grid md:grid-cols-3 gap-8">
        {pricingTiers.map((tier, index) => (
          <Card
            key={index}
            className={`relative overflow-hidden ${
              tier.highlighted ? "bg-purple-500 text-white" : "bg-white"
            }`}
          >
            <CardHeader className="p-6">
              <h3
                className={`text-xl font-semibold ${
                  tier.highlighted ? "text-white" : "text-purple-500"
                }`}
              >
                {tier.name}
              </h3>
              <p
                className={`text-sm ${
                  tier.highlighted ? "text-white/80" : "text-gray-500"
                }`}
              >
                Ideal for accounts with {tier.followers}
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold">${tier.price}</span>
                <span
                  className={`text-xl line-through ${
                    tier.highlighted ? "text-white/60" : "text-gray-400"
                  }`}
                >
                  ${tier.originalPrice}
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <Button
                className={`w-full mb-6 ${
                  tier.highlighted
                    ? "bg-white text-purple-500 hover:bg-gray-100"
                    : "bg-purple-100 text-purple-500 hover:bg-purple-200"
                }`}
              >
                Set up yours now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <ul className="space-y-3">
                {tier.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 ${
                      tier.highlighted ? "text-white/90" : "text-gray-600"
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 ${
                        tier.highlighted ? "text-white" : "text-purple-500"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
