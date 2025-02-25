import React from "react";
import { SearchIcon } from "../icons";
import Image from "next/image";
import { Input } from "@heroui/input";

export default function SearchInput({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Input
        aria-label="Search"
        classNames={{
          inputWrapper:
            "bg-white dark:bg-[#0A0613] shadow-none border border-gray-200 dark:border-[#2D263D] h-[45px] pr-16 font-manrope",
          input: "text-sm",
        }}
        placeholder="Search"
        startContent={
          <SearchIcon className="text-base text-[#98A2B3] pointer-events-none flex-shrink-0" />
        }
        type="search"
      />
      <div className="absolute top-3 right-3 flex items-center gap-2">
        <div className="w-5 h-5 flex items-center justify-center rounded-md bg-[#FCFCFD] dark:bg-[#161221]">
          <Image
            src={"/assets/svg/dashboard/search-k.svg"}
            alt=""
            width={12}
            height={12}
          />
        </div>
        <div className="w-5 h-5 flex items-center justify-center rounded-md text-[#98A2B3] text-xs font-semibold bg-[#FCFCFD] dark:bg-[#161221]">
          K
        </div>
      </div>
    </div>
  );
}
