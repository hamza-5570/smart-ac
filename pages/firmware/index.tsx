import FirmwareTable from "@/components/firmware/firmware-table";
import RegisterFirmware from "@/components/firmware/register-firmware";
import React from "react";

export default function FirmWarePage() {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl md:text-[32px] text-[#101828] dark:text-white font-medium font-mono">
            Firmware
          </h2>
          <p className="text-xs md:text-sm text-[#667085] dark:text-[#8F8A99] font-medium pt-1.5">
            Firmware Details
          </p>
        </div>
        <RegisterFirmware />
      </div>
      <div className="mt-8">
        <FirmwareTable />
      </div>
    </>
  );
}
