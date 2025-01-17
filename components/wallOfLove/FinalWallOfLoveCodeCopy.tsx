import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useWallTypeStore } from "@/store/useWallTypeStore";
import { ArrowLeftIcon, Copy, Check, PartyPopperIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const FinalWallOfLoveCodeCopy = ({ slug }: { slug: string }) => {
  const router = useRouter();
  const { url, data, setPage } = useWallTypeStore();
  const [isCopied, setIsCopied] = useState(false);
  const [redirected, setRedirected] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Data", data);
    console.log("url", url);
  }, [data]);

  const handleRedirect = async () => {
    setRedirected(true);
    router.push(`/space/${slug}`);
    setPage("all", null);
  };

  const content = ` <iframe
          src=${url!}
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          style={{
            border: "none",
          }}
        ></iframe>`;
  // const content = `
  //           ${
  //             data === "carousal-2rows-animated"
  //               ? `<div className="w-[100%] md:w-[90%] h-screen md:h-[80vh] lg:h-screen rounded-xl max-w-screen-2xl">
  //             <iframe
  //               src=${url!}}
  //               width="100%"
  //               height="100%"
  //               frameBorder="0"
  //               scrolling="no"
  //               style={{
  //                 border: "none",
  //               }}
  //             ></iframe>
  //           </div>`
  //               : data === "carousal-horizontal"
  //                 ? `<div className="w-[100%] md:w-[90%] h-[70vh] md:h-[50vh] lg:h-[60vh] rounded-xl max-w-screen-2xl">
  //       <iframe
  //         src=${url!}
  //         width="100%"
  //         height="100%"
  //         frameBorder="0"
  //         scrolling="no"
  //         style={{
  //           border: "none",
  //         }}
  //       ></iframe>
  //     </div>`
  //                 : `<div className="w-[95%] md:w-[90%] h-screen rounded-xl scrollbar-hidden max-w-screen-2xl">
  //           <iframe
  //             src=${url!}
  //             width="100%"
  //             height="100%"
  //             style={{
  //               border: "none",
  //             }}
  //           ></iframe>
  //         </div>`
  //           }
  //         `.trim();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content!);
      setIsCopied(true);
      toast("copied the URL");
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      toast("failed");
    }
  };

  return (
    <div className="flex flex-col gap-7 md:px-4 md:pr-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">
            Copy the Wall of Love Code
          </CardTitle>
          <CardDescription className="text-xs md:text-sm">
            Paste this code where you want to showcase this wall
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <code className="bg-muted text-muted-foreground text-xs md:text-lg px-2 py-1 rounded-md flex-grow mr-2 overflow-x-auto">
            {content}
          </code>
          <Button
            size="icon"
            variant="outline"
            onClick={copyToClipboard}
            className="flex-shrink-0 transition-all duration-200 ease-in-out"
          >
            {isCopied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            <span className="sr-only">{isCopied ? "Copied" : "Copy URL"}</span>
          </Button>
        </CardContent>
      </Card>
      <div className="flex gap-2 w-fit">
        <Button
          onClick={() => setPage("editing", data)}
          className="bg-white text-black hover:bg-gray-100 flex-1 flex gap-2 border shadow-sm"
        >
          <ArrowLeftIcon size={20} />
          Back
        </Button>
        <Button
          className="flex-1"
          onClick={handleRedirect}
          disabled={redirected}
        >
          <PartyPopperIcon className="mr-2 h-4 w-4" /> Done
        </Button>
      </div>
      <div className="w-full flex justify-center h-screen relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
            <div>Loading preview...</div>
          </div>
        )}

        <iframe
          src={url!}
          width="950%"
          height="100%"
          frameBorder={2}
          scrolling="yes"
          onLoadStart={() => setLoading(true)}
          onLoad={() => setLoading(false)}
          style={{
            border: "none",
          }}
        ></iframe>
      </div>
    </div>
  );
};
