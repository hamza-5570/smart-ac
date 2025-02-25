import { Button } from "@heroui/button";
import React from "react";
import { FiCheck } from "react-icons/fi";
export default function Success({ onClose, handleNextStep }: any) {
  return (
    <div className="relative flex flex-col items-center justify-between h-full">
      <div className="flex flex-col items-center mt-20 md:mt-16 px-3 md:p-5">
        <div className="w-[150px] h-[150px] md:w-[162px] md:h-[162px] flex items-center justify-center rounded-full bg-[#e7f8f0] dark:bg-[#1d3d34]">
          <div className="flex items-center justify-center w-[110px] h-[110px] md:w-[126px] md:h-[126px] bg-[#12B76A] rounded-full">
            <div className="w-[45px] h-[45px] md:w-[55px] md:h-[55px] flex items-center justify-center bg-white dark:bg-black rounded-full">
              <FiCheck size={30} className="text-[#12B76A]" />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xl md:text-2xl text-[#101828] dark:text-white font-mono font-semibold text-center">
            Successfully Verified
          </p>
          <p className="text-center text-xs text-[#667085] dark:text-[#98A2B3] font-medium pt-2">
            Ownership of your domain has been successfully verified. You are one
            step away from getting your certificate, Proceed to next step.
          </p>
        </div>
      </div>

      <div className="w-full flex gap-3 bg-[#F9FAFB] dark:bg-[#161221] border-t dark:border-[#2D263D] p-3">
        <Button
          variant="solid"
          size="lg"
          className="w-full bg-[#6938EF] dark:bg-[#9365F4] text-white font-manrope text-xs md:text-sm font-semibold"
          onPress={handleNextStep}
        >
          Next Step
        </Button>
        <Button
          variant="solid"
          size="lg"
          className="w-full bg-[#EAECF0] dark:bg-[#2D263D] text-[#475467] dark:text-[#98A2B3] font-manrope text-xs md:text-sm font-semibold"
          onPress={onClose}
        >
          Go Back
        </Button>
      </div>
    </div>
  );
}
