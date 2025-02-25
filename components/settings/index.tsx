import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Select, SelectItem } from "@heroui/select";
import { Switch } from "@heroui/switch";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

export const animals = [
  { key: "Updates Weekly", label: "Los Angeles, California GMT-7:00" },
  { key: "Updates Week", label: "Los Angeles, California GMT-7:00" },
  { key: "Updates Weeky", label: "Los Angeles, California GMT-7:00" },
];

export default function Settings() {
  const { theme } = useTheme();
  return (
    <div>
      <p className="text-2xl md:text-[32px] font-medium font-mono text-[#101828] dark:text-white">
        Settings
      </p>
      <p className="md:w-[650px] text-sm text-[#667085] dark:text-[#98A2B3] font-medium pt-1.5">
        Customize your dashboard experience, manage notifications, update
        preferences, and configure general application settings with ease.
      </p>

      <Card className="shadow-none border border-[#EAECF0] dark:border-[#2D263D] bg-white dark:bg-[#0A0613] rounded-xl p-3 md:p-6 mt-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <p className="text-lg text-[#1D2939] dark:text-white font-bold">
              Notification
            </p>
            <p className="xl:w-[550px] text-xs text-[#667085] dark:text-[#98A2B3] font-semibold pt-1">
              Stay informed with customizable alerts. Manage your preferences
              for email, SMS, and in-app notifications to receive updates that
              matter to you
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Select
              disableSelectorIconRotation
              className="w-full md:w-[180px] text-base text-[#667085] font-semibold"
              placeholder="Select"
              variant="bordered"
              radius="sm"
              size="lg"
              selectorIcon={<IoIosArrowDown />}
            >
              {animals.map((animal) => (
                <SelectItem key={animal.key}>{animal.label}</SelectItem>
              ))}
            </Select>
            <Switch defaultSelected aria-label="Automatic updates" size="sm" />
          </div>
        </div>
      </Card>
      <Card className="shadow-none border border-[#EAECF0] dark:border-[#2D263D] bg-white dark:bg-[#0A0613] rounded-xl p-3 md:p-6 mt-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <p className="text-lg text-[#1D2939] dark:text-white font-bold">
              Two Factor Authentication
            </p>
            <p className="text-xs text-[#667085] dark:text-[#98A2B3] font-semibold pt-1">
              {`To help keep your account secure, we'll ask you to submit a code when using a new device to log in.`}
            </p>
          </div>

          <Switch
            aria-label="Automatic updates"
            size="sm"
            className="self-end"
          />
        </div>
      </Card>

      <Card className="shadow-none border border-[#EAECF0] dark:border-[#2D263D] bg-white dark:bg-[#0A0613] rounded-xl p-3 md:p-6 mt-3">
        <div className="flex flex-col md:flex-row md:items-center gap-3 justify-between">
          <div>
            <p className="text-lg text-[#1D2939] dark:text-white font-bold">
              Time Zone
            </p>
            <p className="text-xs text-[#667085] dark:text-[#98A2B3] font-semibold pt-1">
              By default the time zone is selected according to your
              geographical area.
            </p>
          </div>

          <Select
            disableSelectorIconRotation
            className="w-full md:w-[180px] lg:w-[320px] text-base text-[#667085] font-semibold"
            placeholder="Select"
            variant="bordered"
            radius="sm"
            size="lg"
            selectorIcon={<IoIosArrowDown />}
          >
            {animals.map((animal) => (
              <SelectItem key={animal.key}>{animal.label}</SelectItem>
            ))}
          </Select>
        </div>
      </Card>

      <Card className="shadow-none border border-[#EAECF0] dark:border-[#2D263D] bg-white dark:bg-[#0A0613] rounded-xl p-3 md:p-6 mt-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <p className="text-lg text-[#1D2939] dark:text-white font-bold">
              Billing
            </p>
            <p className="text-xs text-[#667085] dark:text-[#98A2B3] font-semibold pt-1">
              These are your personal billing information
            </p>

            <Button
              variant="bordered"
              className="w-full md:w-[90px] md:h-[45px] border-[#E2E8F0] dark:border-[#2D263D] text-base font-semibold text-[#667085] dark:text-[#98A2B3] dark:bg-[#161221] font-manrope mt-3"
              endContent={<IoIosArrowForward size={20} />}
            >
              Edit
            </Button>
          </div>

          <div>
            <p className="text-base md:text-end text-[#344054] dark:text-white font-semibold">
              Rumeza khan
            </p>
            <div className="flex items-center gap-3 mt-2">
              <input
                type="password"
                className="w-full md:w-auto bg-transparent font-semibold text-base focus:outline-none"
                placeholder="**************************"
              />
              <div
                className="w-10 h-7 flex items-center justify-center dark:bg-[#161221] border border-[#F2F4F7] dark:border-[#2D263D] rounded-md
            "
              >
                <Image
                  src={
                    theme === "light"
                      ? "/assets/svg/common/visa-logo.svg"
                      : "/assets/svg/common/visa-dark.svg"
                  }
                  alt=""
                  width={25}
                  height={8}
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
