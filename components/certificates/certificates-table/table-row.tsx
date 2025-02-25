import { SettingsModal } from "@/components/ui/models/settingsModal";
import { Button } from "@heroui/button";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function TableRow({ item }: any) {
  const [isModalOpen, setModalOpen] = useState(false);
  const { domain, certificate_type, date, status } = item || {};
  return (
    <div className="flex items-center justify-between min-w-[900px] border-b border-[#EAECF0] dark:border-[#2D263D] bg-white dark:bg-[#0A0613] px-4 py-2">
      <div className="w-[300px] flex items-center gap-2 text-sm text-[#667085] dark:text-[#98A2B3] font-medium">
        <div className="w-fit flex items-center gap-2 bg-[#F9FAFB] dark:bg-[#161221] rounded-full px-3 py-2 truncate">
          <Image
            src={"/assets/svg/dashboard/table-domain.svg"}
            alt=""
            width={19}
            height={19}
          />
          {domain[0]}
        </div>
        {domain.length > 1 && (
          <div className="w-10 h-9 flex items-center justify-center gap-2 bg-[#F9FAFB] dark:bg-[#161221] rounded-full">
            +{domain.length - 1}
          </div>
        )}
      </div>
      <div className="w-[180px] text-sm text-[#667085] dark:text-[#98A2B3] font-medium">
        <div className="w-fit flex items-center gap-2 bg-[#F9FAFB] dark:bg-[#161221] rounded-full px-3 py-2">
          <Image
            src={"/assets/svg/common/lock.svg"}
            alt=""
            width={19}
            height={19}
          />
          {certificate_type}
        </div>
      </div>
      <div className="w-[140px]">
        {status === "Valid" && (
          <span className="w-fit bg-[#ECFDF3] dark:bg-[#002B0D] rounded-full text-sm text-[#027A48] dark:text-[#32D583] font-medium px-3 py-2">
            {status}
          </span>
        )}
        {status.includes("Expiring") && (
          <span className="w-fit bg-[#FEF3F2] dark:bg-[#360404] rounded-full text-sm text-[#F04438] dark:text-[#F97066] font-medium px-3 py-2">
            {status}
          </span>
        )}
        {status.includes("Expired") && (
          <span className="w-fit bg-[#FEF3F2] dark:bg-[#360404] rounded-full text-sm text-[#F04438] dark:text-[#F97066] font-medium px-3 py-2">
            {status}
          </span>
        )}
        {status === "Pending" && (
          <span className="w-fit bg-[#FFFAEB] dark:bg-[#361604] rounded-full text-sm text-[#DC6803] dark:text-[#F79009] font-medium px-3 py-2">
            Pending
          </span>
        )}

        {status === "Cancelled" && (
          <span className="w-fit bg-[#FEF3F2] dark:bg-[#360404] rounded-full text-sm text-[#F04438] dark:text-[#F97066] font-medium px-3 py-2">
            {status}
          </span>
        )}
      </div>
      <div className="w-[130px] text-sm text-[#667085] dark:text-[#98A2B3] font-medium">
        {date}
      </div>
      <div className={`w-[130px] flex items-center gap-3`}>
        <div>
          {status === "Valid" && (
            <span className="flex items-center gap-2 w-fit bg-[#F9FAFB] dark:bg-[#161221] rounded-full text-xs text-[#667085] dark:text-[#98A2B3] font-medium px-3 py-2 cursor-pointer">
              Renew
              <IoIosArrowForward className="text-base text-[#667085] dark:text-[#98A2B3]" />
            </span>
          )}

          {status.includes("Expiring") && (
            <span className="flex items-center gap-2 w-fit bg-[#FEF3F2] dark:bg-[#360404] rounded-full text-xs text-[#F04438] dark:text-[#FDA29B] font-medium px-3 py-2 cursor-pointer">
              Renew
              <IoIosArrowForward className="text-base text-[#F04438] dark:text-[#FDA29B]" />
            </span>
          )}
          {status === "Expired" && (
            <span className="flex items-center gap-2 w-fit bg-[#FEF3F2] dark:bg-[#360404] rounded-full text-xs text-[#F04438] dark:text-[#FDA29B] font-medium px-3 py-2 cursor-pointer">
              Renew
              <IoIosArrowForward className="text-base text-[#F04438] dark:text-[#FDA29B]" />
            </span>
          )}
          {status === "Pending" && (
            <span className="invisible flex items-center gap-2 w-fit bg-[#FEF3F2] dark:bg-[#360404] rounded-full text-xs text-[#F04438] dark:text-[#FDA29B] font-medium px-3 py-2 cursor-pointer">
              Renew
              <IoIosArrowForward className="text-base text-[#F04438] dark:text-[#FDA29B]" />
            </span>
          )}
          {status === "Cancelled" && (
            <span className="invisible flex items-center gap-2 w-fit bg-[#FEF3F2] dark:bg-[#360404] rounded-full text-xs text-[#F04438] dark:text-[#FDA29B] font-medium px-3 py-2 cursor-pointer">
              Renew
              <IoIosArrowForward className="text-base text-[#F04438] dark:text-[#FDA29B]" />
            </span>
          )}
        </div>

        <Button
          isIconOnly
          radius="full"
          variant="light"
          size="sm"
          className="bg-[#F9FAFB] dark:bg-[#161221]"
          onPress={() => setModalOpen(true)}
        >
          <Image
            src={"/assets/svg/common/setting-icon.svg"}
            alt=""
            width={16}
            height={16}
          />
        </Button>
      </div>
      <SettingsModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
