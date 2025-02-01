import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface GetStartedButtonProps {
  content: string;
  className?: string;
}

export const GetStartedButton = ({
  content,
  className,
}: GetStartedButtonProps) => {
  return (
    <Button
      className={cn(
        "group relative rounded-xl px-6 py-5 text-lg font-medium text-white shadow-lg shadow-purple-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-purple-500/30 hover:translate-y-[-1px] overflow-hidden ring-1 ring-text ring-opacity-60",
        className
      )}
      style={{
        background:
          "linear-gradient(130deg, #a855f7 30%,rgb(188, 130, 247) 60%,rgb(173, 94, 247) 80%,rgb(188, 130, 247) 95%);",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
              linear-gradient(to bottom,
                rgba(255, 255, 255, 0.5) 0%,
                rgba(255, 255, 255, 0.15) 5%,
                transparent 20%
              ),
              linear-gradient(to top,
                rgba(0, 0, 0, 0.4) 0%,
                rgba(0, 0, 0, 0.15) 4%,
                transparent 20%
              )
            `,
          borderRadius: "12px",
        }}
      />
      <span className="z-10 text-md font-semibold">{content}</span>
    </Button>
  );
};
