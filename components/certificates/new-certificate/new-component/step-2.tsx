import { Radio, RadioGroup } from "@heroui/radio";
import { Switch } from "@heroui/switch";
import React from "react";

export default function Step2() {
  return (
    <div>
      <div className="bg-[#F9FAFB] dark:bg-[#0A0613] border-b dark:border-[#344054] p-3 md:p-5">
        <p className="text-lg font-semibold text-[#1D2939] dark:text-white">
          Validity
        </p>
        <p className="md:w-[619px] text-xs font-medium text-[#667085] dark:text-[#98A2B3] pt-1">
          You now have the option to select between a 90-day or 1-year
          certificate validity. To reduce the need for frequent renewals, we
          recommend opting for the 1-year validity.
        </p>
      </div>

      <div className="border dark:border-[#2D263D] bg-white dark:bg-[#161221] m-3 md:m-5">
        <RadioGroup color="secondary">
          <div className="border-b dark:border-[#2D263D] p-3">
            <Radio value="buenos-aires">90-Days Certificate</Radio>
          </div>
          <div className="border-b dark:border-[#2D263D] px-3 pt-1 pb-3">
            <Radio value="sydney">1-Year Certificate</Radio>
          </div>
        </RadioGroup>

        <div className="flex justify-between items-center gap-2 p-3 border-b dark:border-[#2D263D]">
          <div>
            <p className="text-sm text-[#101828] font-semibold dark:text-white">
              CSR
            </p>
            <p className="text-xs text-[#667085] dark:text-[#98A2B3] font-medium pt-1">
              Before validation, we will automatically generate a CSR and
              contact information for your certificate. If you prefer to enter
              the details manually or use an existing CSR, please disable the
              toggle.
            </p>
          </div>

          <Switch defaultSelected aria-label="Automatic updates" size="sm" />
        </div>

        <div className="flex justify-between items-center gap-3 p-3">
          <div>
            <p className="text-sm text-[#101828] font-semibold dark:text-white">
              Auto Renewal
            </p>
            <p className="text-xs text-[#667085] dark:text-[#98A2B3] font-medium pt-1">
              For your convenience, auto-renewal is enabled to ensure
              uninterrupted security. You can manage or modify the auto-renewal
              settings at any time.
            </p>
          </div>

          <Switch defaultSelected aria-label="Automatic updates" size="sm" />
        </div>
      </div>
    </div>
  );
}
