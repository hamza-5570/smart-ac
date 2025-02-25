import { Radio, RadioGroup } from "@heroui/radio";
import React from "react";

export default function Step3({ selectedValue, setSelectedValue }: any) {
  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <>
      <div className="bg-[#F9FAFB] dark:bg-[#0A0613] border-b dark:border-[#344054] p-3 md:p-5">
        <p className="text-lg font-semibold text-[#1D2939] dark:text-white">
          Verification
        </p>
        <p className="md:w-[619px] text-xs font-medium text-[#667085] dark:text-[#98A2B3] pt-1">
          To proceed, we need to verify ownership of each domain included in
          your certificate. Please choose your preferred verification method.
        </p>
      </div>
      <div className="border dark:border-[#2D263D] bg-white dark:bg-[#161221] m-3 md:m-5">
        <RadioGroup
          color="secondary"
          value={selectedValue}
          onValueChange={handleChange}
        >
          <div className="border-b dark:border-[#2D263D] text-sm md:text-base p-3">
            <Radio value="HTTP File Upload Validation">
              HTTP File Upload Validation
            </Radio>
          </div>
          <div className="border-b dark:border-[#2D263D] px-3 pt-1 pb-3">
            <Radio value="DNS Validation (Manual)">
              DNS Validation (Manual)
            </Radio>
          </div>
          <div className="px-3 pt-1 pb-3">
            <Radio value="Cloudflare DNS Validation (Automated)">
              Cloudflare DNS Validation (Automated)
            </Radio>
          </div>
        </RadioGroup>
      </div>
    </>
  );
}
