import React from "react";
import { Card } from "@heroui/card";
import Image from "next/image";
// import { IoIosArrowForward } from "react-icons/io";
// import Link from "next/link";

export default function DashboardCard({ item }: any) {
  return (
    <Card className="shadow-none bg-white dark:bg-[#0A0613] border border-[#EAECF0] dark:border-[#2D263D] rounded-xl p-3 xl:p-5">
      <div className="flex gap-3">
        <div className="w-14 h-14 lg:w-10 lg:h-10 xl:w-14 xl:h-14 flex items-center justify-center bg-[#FCFCFD] dark:bg-[#161221] rounded-xl">
          <Image src={item.icon} alt="" width={32} height={32} />
        </div>
        <div>
          <p className="text-sm lg:text-xs xl:text-sm text-[#667085] dark:text-[#8F8A99] font-medium">
            {item.title}
          </p>
          <p className="text-2xl font-semibold pt-1">{item.value}</p>
        </div>
      </div>

      {/* <Link
        href={item.href}
        className="group flex items-center justify-between mt-6 cursor-pointer"
      >
        <p className="text-xs text-[#667085] dark:text-[#8F8A99] font-medium group-hover:text-gray-900 dark:group-hover:text-white">
          View all
        </p>
        <IoIosArrowForward
          size={20}
          className="text-[#98A2B3] dark:text-[#8F8A99] group-hover:text-gray-900 dark:group-hover:text-white"
        />
      </Link> */}
    </Card>
  );
}
