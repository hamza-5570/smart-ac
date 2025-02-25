import React from "react";
import FinilizeCard from "./finilize-card";
import { Button } from "@heroui/button";
import Image from "next/image";
import { Select, SelectItem } from "@heroui/select";
import { IoIosArrowDown } from "react-icons/io";

const list = [
  {
    title: "Standard",
    icon: "/assets/svg/common/standard-logo.svg",
    icon_bg: "#F2F4F7",
    price: "0",
    days: "90",
    border_color: "#EAECF0",
    button_color: "#FFFFFF",
    button_border: "#D0D5DD",
    button_text: "#344054",
    bg: "#FFFFFF",
    dark_border: "#2D263D",
    dark_bg: "#161221",
    dark_btn_bg: "#2D263D",
    dark_btn_border: "#2D263D",
    dark_icon_bg: "#2D263D",
    dark_btn_text: "#98A2B3",
  },
  {
    title: "Premium",
    icon: "/assets/svg/common/premium-logo.svg",
    icon_bg: "#FEF0C7",
    price: "66.28",
    days: "90",
    border_color: "#FED66A",
    button_color: "#FED66A",
    button_border: "#FED66A",
    button_text: "black",
    bg: "#FFFCF5",
    dark_border: "#7D6933",
    dark_bg: "#2D2610",
    dark_btn_bg: "#FED66A",
    dark_btn_border: "#FED66A",
    dark_icon_bg: "#2D263D",
    dark_btn_text: "black",
  },
  {
    title: "Premium Plus",
    icon: "/assets/svg/common/premium-plus.svg",
    icon_bg: "#E1F6FF",
    price: "73.34",
    days: "90",
    border_color: "#018BC4",
    button_color: "#018BC4",
    button_border: "#018BC4",
    button_text: "white",
    bg: "#F5FAFF",
    dark_border: "#336C7D",
    dark_bg: "#10232D",
    dark_btn_bg: "#018BC4",
    dark_btn_border: "#018BC4",
    dark_icon_bg: "#2D263D",
    dark_btn_text: "white",
  },
];

export const animals = [
  { key: "Updates Weekly", label: "Server" },
  { key: "Updates Week", label: "Server Domain" },
  { key: "Updates Weeky", label: "Domain" },
];

export default function Step4({ isDownload, setIsDownload }: any) {
  const handleDownload = () => setIsDownload(true);

  return (
    <>
      {isDownload ? (
        <>
          <div className="bg-[#F9FAFB] dark:bg-[#0A0613] border-b dark:border-[#344054] p-3 md:p-5">
            <p className="text-lg font-semibold text-[#1D2939] dark:text-white">
              Download Certificate
            </p>
            <p className="md:w-[619px] text-xs font-medium text-[#667085] dark:text-[#98A2B3] pt-1">
              {`Your certificate is compatible with any type of web server. Download your certificate right away or make a selection below to get instructions and tutorials specific to your web server.`}
            </p>
          </div>
          <div className="bg-white dark:bg-black p-3 md:p-5">
            <div className="border dark:border-[#2D263D] dark:bg-[#0A0613]">
              <div className="border-b dark:border-[#2D263D] p-3 md:p-4">
                <p className="text-sm text-[#101828] dark:text-white font-semibold">
                  1. Download your certificate using the button below.
                </p>

                <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-3">
                  <Select
                    disableSelectorIconRotation
                    className="w-full md:w-[145px] text-base text-[#667085] dark:text-[#98A2B3] font-semibold dark:bg-[#161221] rounded-xl"
                    placeholder="Server type"
                    variant="bordered"
                    selectorIcon={
                      <IoIosArrowDown className="dark:text-[#98A2B3]" />
                    }
                  >
                    {animals.map((animal) => (
                      <SelectItem key={animal.key}>{animal.label}</SelectItem>
                    ))}
                  </Select>
                  <Button
                    variant="solid"
                    startContent={
                      <Image
                        src={"/assets/svg/common/download-file.svg"}
                        alt=""
                        width={24}
                        height={24}
                      />
                    }
                    className="w-full md:w-[206px] bg-[#12B76A] text-white font-manrope text-sm font-semibold m"
                  >
                    Download Certificate
                  </Button>
                </div>
              </div>

              <div className="border-b dark:border-[#2D263D] p-3 md:p-4">
                <p className="text-sm text-[#101828] dark:text-white font-semibold">
                  2. Install Certificate
                </p>
                <p className="text-xs text-[#667085] dark:text-[#98A2B3] font-medium pt-2">
                  To proceed with installation, follow guide given or contact
                  our help center.
                </p>
              </div>

              <div className="p-4">
                <p className="text-sm text-[#101828] dark:text-white font-semibold">
                  3. Check Installation
                </p>
                <p className="text-xs text-[#667085] dark:text-[#98A2B3] font-medium pt-2">
                  Installed already? Click Check Installation to see if your
                  installation was successful.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-[#F9FAFB] dark:bg-[#0A0613] border-b dark:border-[#344054] p-3 md:p-5">
            <p className="text-lg font-semibold text-[#1D2939] dark:text-white">
              Finalize
            </p>
            <p className="w-[619px] text-xs font-medium text-[#667085] dark:text-[#98A2B3] pt-1">
              {`Since you've chosen a 90-Day SSL Certificate, you can continue with the Free Plan. To proceed with creating and validating your SSL Certificate, click on the Next Step button below`}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-white dark:bg-black p-3 md:p-5">
            {list.map((item, index) => (
              <FinilizeCard
                key={index}
                item={item}
                handleDownload={handleDownload}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
