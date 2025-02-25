import { Button } from "@heroui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

export default function FinilizeCard({ item, handleDownload }: any) {
  const { theme } = useTheme();
  return (
    <div
      className="flex flex-col justify-between h-[221px] rounded-lg p-3 font-manrope"
      style={{
        border: `1px solid ${theme === "light" ? item.border_color : item.dark_border}`,
        backgroundColor: theme === "light" ? item.bg : item.dark_bg,
      }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-bold">{item.title}</p>
          <p className="text-[10px] text-[#667085] dark:text-[#98A2B3] font-medium underline cursor-pointer">
            Terms and Conditions
          </p>
        </div>
        <div
          className="w-8 h-8 flex items-center justify-center rounded-md"
          style={{
            backgroundColor: item.icon_bg,
          }}
        >
          <Image src={item.icon} alt="" width={24} height={24} />
        </div>
      </div>

      <div>
        <p className="text-2xl font-bold">
          {item.price}€
          <span className="text-xs text-[#667085] dark:text-[#98A2B3] font-medium">
            /month
          </span>
        </p>
        <p className="text-xs text-[#98A2B3] font-medium pt-1">
          {item.days}-days
        </p>
      </div>

      <Button
        variant="bordered"
        className="w-full h-[43px] text-sm font-semibold"
        style={{
          backgroundColor:
            theme === "light" ? item.button_color : item.dark_btn_bg,
          borderColor:
            theme === "light" ? item.button_border : item.dark_btn_border,
          color: theme === "light" ? item.button_text : item.dark_btn_text,
        }}
        onPress={handleDownload}
      >
        Select
      </Button>
    </div>
  );
}
