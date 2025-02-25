import Image from "next/image";
import React from "react";

export default function TableRow({ item }: any) {
  const { domain, date, status } = item || {};
  return (
    <div className="min-w-[1000px] flex items-center justify-between border-b border-[#EAECF0] dark:border-[#2D263D] bg-white dark:bg-[#0a0613] px-4 py-2">
      <div className="w-[350px] text-sm text-[#667085] dark:text-[#98A2B3] font-medium">
        <div className="w-fit flex items-center gap-2 bg-[#F9FAFB] dark:bg-[#161221] rounded-full px-3 py-2">
          <Image
            src={"/assets/svg/dashboard/table-domain.svg"}
            alt=""
            width={19}
            height={19}
          />
          {domain}
        </div>
      </div>
      <div className="w-[200px] text-sm text-[#667085] dark:text-[#98A2B3] font-medium">
        {date}
      </div>
      <div className="w-[200px]">
        {status === "Validated" ? (
          <span className="w-fit bg-[#ECFDF3] dark:bg-[#002B0D] rounded-full text-sm text-[#027A48] dark:text-[#32D583] font-medium px-3 py-2">
            Validated
          </span>
        ) : (
          <span className="w-fit bg-[#FFFAEB] dark:bg-[#361604] rounded-full text-sm text-[#DC6803] dark:text-[#F79009] font-medium px-3 py-2">
            Pending Validation
          </span>
        )}
      </div>
    </div>
  );
}
