import React from "react";
import { EditIcon } from "lucide-react";
import Link from "next/link";

interface SpaceDeleteButtonProps {
  slug: string;
}

export const SpaceEditButton = ({ slug }: SpaceDeleteButtonProps) => {
  return (
    <div className="flex justify-center items-center">
      <Link href={`/space/${slug}/edit?page=2`} className="p-1 cursor-pointer">
        <EditIcon size={20} />
      </Link>
    </div>
  );
};
