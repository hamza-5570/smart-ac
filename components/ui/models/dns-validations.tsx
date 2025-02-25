import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { Spinner } from "@heroui/spinner";
import Image from "next/image";
import Success from "./success";
import Failed from "./failed";
import { useState } from "react";
import { toast } from "sonner";

export const DnsValidationsModal = ({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  onConfirm,
  isLoading,
  isSuccess,
  handleNextStep,
}: any) => {
  const { isOpen, onClose } = useDisclosure();
  const modalIsOpen = controlledIsOpen ?? isOpen;
  const handleClose = controlledOnClose ?? onClose;
  const [copied, setCopied] = useState(false);
  const valueText = "[verification-token]";
  const host_Name = "_acme-challenge.domain.com";

  const handleValueTextCopy = () => {
    navigator.clipboard
      .writeText(valueText)
      .then(() => {
        setCopied(true);
        toast.success("Copied to clipboard");
      })
      .catch(() => {
        toast.error("Failed to copy to clipboard");
      });
  };

  const handleHostNameCopy = () => {
    navigator.clipboard
      .writeText(host_Name)
      .then(() => {
        setCopied(true);
        toast.success("Copied to clipboard");
      })
      .catch(() => {
        toast.error("Failed to copy to clipboard");
      });
  };

  return (
    <Modal
      radius="none"
      isOpen={modalIsOpen}
      hideCloseButton={true}
      onOpenChange={handleClose}
    >
      <ModalContent className="relative font-manrope border dark:border-[#2D263D] dark:bg-[#0A0613]">
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-white/90 dark:bg-black/90 z-10">
            <Spinner size="lg" />
          </div>
        )}
        {isSuccess && (
          <div className="absolute inset-0 dark:bg-[#0A0613] bg-white z-10">
            <Success
              handleNextStep={handleNextStep}
              onClose={controlledOnClose}
            />
          </div>
        )}

        <ModalHeader className="bg-[#D1FADF] dark:bg-[#054F31] text-base md:text-lg font-bold text-[#054F31] dark:text-white">
          DNS Validation Instructions:
        </ModalHeader>
        <ModalBody className="p-3">
          <div className="border border-[#EAECF0] dark:border-[#2D263D] dark:bg-[#161221]">
            <div className="p-3">
              <p className="text-sm text-[#101828] dark:text-white font-semibold">
                1. Add a TXT Record to Your DNS Settings:
              </p>

              <div className="mt-3">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                  <p className="text-xs text-[#101828] dark:text-white font-semibold">
                    Host/Name:
                  </p>
                  <div className="flex items-center gap-3">
                    <p className="w-fit bg-[#F2F4F7] dark:bg-[#2D263D] rounded-md text-xs md:text-sm text-[#101828] dark:text-[#D0D5DD] font-mono px-2 py-0.5">
                      {host_Name}
                    </p>
                    <Button
                      isIconOnly
                      variant="light"
                      size="sm"
                      className="flex items-center justify-center"
                      onPress={handleHostNameCopy}
                    >
                      <Image
                        src={"/assets/svg/common/copy-link.svg"}
                        alt=""
                        width={18}
                        height={18}
                      />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mt-2">
                  <p className="text-xs text-[#101828] dark:text-white font-semibold">
                    Value:
                  </p>
                  <div className="flex items-center gap-3">
                    <p className="w-fit bg-[#F2F4F7] dark:bg-[#2D263D] rounded-md text-xs md:text-sm text-[#101828] dark:text-[#D0D5DD] font-mono px-2 py-0.5">
                      {valueText}
                    </p>
                    <Button
                      isIconOnly
                      variant="light"
                      size="sm"
                      className="flex items-center justify-center"
                      onPress={handleValueTextCopy}
                    >
                      <Image
                        src={"/assets/svg/common/copy-link.svg"}
                        alt=""
                        width={18}
                        height={18}
                      />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mt-2">
                  <p className="text-xs text-[#101828] dark:text-white font-semibold">
                    TTL:
                  </p>
                  <p className="text-xs text-[#667085] dark:text-[#98A2B3] font-medium font-manrope">
                    Use the default value or set it to 300 seconds.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-[#EAECF0] dark:border-[#2D263D] p-3">
              <p className="text-sm text-[#101828] dark:text-white font-semibold">
                2. Save and Wait for DNS Propagation:
              </p>

              <div className="mt-2">
                <p className="text-xs text-[#667085] dark:text-[#98A2B3] font-medium">
                  Save the TXT record in your DNS management console.
                </p>
                <p className="text-xs text-[#667085] dark:text-[#98A2B3] font-medium mt-2">
                  Allow some time (usually a few minutes to an hour) for the
                  changes to propagate.
                </p>
                <p className="text-xs text-[#667085] dark:text-[#98A2B3] font-medium mt-2">
                  After completing the steps above, press Verify button.
                </p>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="dark:!bg-[#161221] dark:!border-[#2D263D] border-t p-3 md:p-5">
          <Button
            variant="solid"
            size="lg"
            className="w-full bg-[#6938EF] dark:bg-[#9365F4] text-white font-manrope text-xs md:text-sm font-semibold"
            onPress={onConfirm}
          >
            Check DNS Record
          </Button>
          <Button
            variant="solid"
            size="lg"
            className="w-full bg-[#EAECF0] dark:bg-[#2D263D] text-[#475467] dark:text-[#98A2B3] font-manrope text-xs md:text-sm font-semibold"
            onPress={controlledOnClose}
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
