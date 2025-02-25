import { Button } from "@heroui/button";
import Image from "next/image";
import React, { useState } from "react";
import Step1 from "./step-1";
import Step2 from "./step-2";
import Step3 from "./step-3";
import Step4 from "./step-4";
import { HTTPValidationModal } from "@/components/ui/models/http-validation";
import { DnsValidationsModal } from "@/components/ui/models/dns-validations";
import { CloudflareDNSModal } from "@/components/ui/models/cloudflare-dns";
import { InstallVerification } from "@/components/ui/models/install-verification";

export default function NewComponent() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDnsOpen, setIsDnsOpen] = useState(false);
  const [isCloudOpen, setIsCloudOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [isDownload, setIsDownload] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleConfirm = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 2000);
  };

  const steps = [
    {
      content: <Step1 />,
    },
    {
      content: <Step2 />,
    },
    {
      content: (
        <Step3
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      ),
    },
    {
      content: <Step4 isDownload={isDownload} setIsDownload={setIsDownload} />,
    },
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      handleModalClose();
    }
  };

  return (
    <div className="dark:bg-black">
      <div>{steps[currentStep - 1].content}</div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 border-t border-[#EAECF0] dark:border-[#344054] p-3 dark:bg-[#0A0613]">
        <div className="relative flex items-center gap-10">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#D0D5DD] dark:bg-[#667085] w-full h-px  z-0" />
          {steps.map((_, index) => (
            <>
              <div
                style={{
                  width: `${index < currentStep ? (index / (steps.length - 1)) * 100 : 0}%`,
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 h-px bg-[#6938EF] z-10"
              />
              <div
                key={index}
                className={`bg-white w-8 h-8 flex items-center justify-center rounded-full border-2 font-mono text-xs z-40 ${
                  index + 1 < currentStep
                    ? "border-[#6938EF] bg-[#6938EF] text-white"
                    : index + 1 === currentStep
                      ? "border-[#6938EF] bg-white text-[#6938EF] dark:text-[#9365F4] dark:border-[#9365F4] dark:bg-[#0A0613]"
                      : "border-[#EAECF0] dark:border-[#667085] bg-white dark:bg-[#0A0613] text-[#667085] dark:text-[#667085]"
                }`}
              >
                {index + 1 < currentStep ? (
                  <Image
                    src="/assets/svg/common/check-mark.svg"
                    alt="Completed"
                    width={32}
                    height={32}
                  />
                ) : (
                  index + 1
                )}
              </div>
            </>
          ))}
        </div>

        {currentStep === 4 && isDownload ? (
          <Button
            variant="solid"
            size="lg"
            className="w-full md:w-[154px] text-sm font-semibold text-white bg-[#6938EF]"
            onPress={() => setIsDownloadOpen(true)}
          >
            Check Installation
          </Button>
        ) : currentStep === 3 ? (
          <div className="w-full md:w-auto">
            <div className="flex items-center gap-3">
              {currentStep === 3 &&
                selectedValue === "HTTP File Upload Validation" && (
                  <Button
                    variant="solid"
                    size="lg"
                    className="w-full md:w-[145px] text-sm font-semibold text-white bg-[#6938EF] dark:bg-[#9365F4]"
                    onPress={handleModalOpen}
                  >
                    Verify Ownership
                  </Button>
                )}
            </div>
            <div className="flex items-center gap-3">
              {currentStep === 3 &&
                selectedValue === "DNS Validation (Manual)" && (
                  <Button
                    variant="solid"
                    size="lg"
                    className="w-full md:w-[145px] text-sm font-semibold text-white bg-[#6938EF] dark:bg-[#9365F4]"
                    onPress={() => setIsDnsOpen(true)}
                  >
                    Verify Ownership
                  </Button>
                )}
            </div>
            <div className="flex items-center gap-3">
              {currentStep === 3 &&
                selectedValue === "Cloudflare DNS Validation (Automated)" && (
                  <Button
                    variant="solid"
                    size="lg"
                    className="w-full md:w-[145px] text-sm font-semibold text-white bg-[#6938EF] dark:bg-[#9365F4]"
                    onPress={() => setIsCloudOpen(true)}
                  >
                    Verify Ownership
                  </Button>
                )}
            </div>
          </div>
        ) : (
          <Button
            variant="solid"
            size="lg"
            className="w-full md:w-[100px] text-xs md:text-sm font-semibold text-white bg-[#6938EF] dark:bg-[#9365F4]"
            disabled={currentStep === steps.length}
            onPress={handleNextStep}
          >
            {currentStep === steps.length ? "Finalize" : "Next Step"}
          </Button>
        )}
      </div>

      <>
        <HTTPValidationModal
          isOpen={isModalOpen}
          isLoading={isLoading}
          isSuccess={isSuccess}
          handleNextStep={handleNextStep}
          onClose={handleModalClose}
          onConfirm={handleConfirm}
        />
        <DnsValidationsModal
          isOpen={isDnsOpen}
          isLoading={isLoading}
          isSuccess={isSuccess}
          handleNextStep={handleNextStep}
          onClose={() => setIsDnsOpen(false)}
          onConfirm={handleConfirm}
        />
        <CloudflareDNSModal
          isOpen={isCloudOpen}
          isLoading={isLoading}
          isSuccess={isSuccess}
          handleNextStep={handleNextStep}
          onClose={() => setIsCloudOpen(false)}
          onConfirm={handleConfirm}
        />
        <InstallVerification
          isOpen={isDownloadOpen}
          onClose={() => setIsDownloadOpen(false)}
        />
      </>
    </div>
  );
}
