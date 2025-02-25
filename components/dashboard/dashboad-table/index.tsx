import { Button } from "@heroui/button";
import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import TableRow from "./table-row";
import SearchInput from "@/components/ui/search-input";
import { useRouter } from "next/router";

const list = [
  {
    domain: "Rescplexor.com",
    date: "04/02/2026",
    status: "Validated",
  },
  {
    domain: "mulapea.cokcmgi.cloudaniry.com",
    date: "04/02/2026",
    status: "Pending Validation",
  },
  {
    domain: "Rescplexor.com",
    date: "04/02/2026",
    status: "Validated",
  },
];

export default function DashboadTable() {
  const router = useRouter();

  const handleNew = () => {
    router.push("/certificates?tab=create_new");
  };
  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:items-center justify-between">
        <SearchInput className="xl:w-[650px]" />
        <Button
          color="primary"
          className="w-full md:w-[180px] h-[45px] bg-[#6938EF] dark:bg-[#9365F4] text-white text-sm font-semibold"
          onPress={handleNew}
        >
          <Image
            src={"/assets/svg/dashboard/get-certificate.svg"}
            alt=""
            width={20}
            height={20}
          />
          Get Certificate
          <IoIosArrowForward size={20} className="text-white" />
        </Button>
      </div>
      <div className="overflow-x-auto border border-[#EAECF0] dark:border-[#2D263D] rounded-lg mt-3">
        <div className="max-w-[500px] xl:max-w-full">
          <div className="min-w-[1000px] w-full flex items-center justify-between border-b border-[#EAECF0] dark:border-[#2D263D] bg-[#F2F4F7] dark:bg-[#171029] px-4 py-3 rounded-t-lg">
            <div className="w-[350px] text-sm text-[#101828] dark:text-white font-medium">
              Domain
            </div>
            <div className="w-[200px] text-sm text-[#101828] dark:text-white font-medium">
              SSL Expiring Date
            </div>
            <div className="w-[200px] text-sm text-[#101828] dark:text-white font-medium">
              Validation Status
            </div>
          </div>
          {list.map((item, index) => (
            <TableRow key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
