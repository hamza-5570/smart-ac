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
import { toast } from "sonner";
import { useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export const HTTPValidationModal = ({
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
  const textToCopy = "example.com/.well-known/pki-validation/";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
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
      <ModalContent className="relative border dark:border-[#2D263D]">
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-white/90 dark:bg-black/90 z-10">
            <Spinner size="lg" />
          </div>
        )}

        {isSuccess && (
          <div className="absolute inset-0 bg-white dark:bg-[#0A0613] z-10">
            <Success
              handleNextStep={handleNextStep}
              onClose={controlledOnClose}
            />
          </div>
        )}

        <ModalHeader className="bg-[#D1FADF] dark:bg-[#054F31] border-b dark:border-[#2D263D] text-base md:text-lg font-bold text-[#054F31] dark:text-white">
          HTTP Validation Instructions:
        </ModalHeader>
        <ModalBody className="dark:bg-[#0A0613] p-3">
          <div className="border border-[#EAECF0] dark:border-[#2D263D] dark:bg-[#161221]">
            <div className="p-3">
              <p className="text-sm text-[#101828] dark:text-white font-semibold">
                1. Create the following folders on your domain:
              </p>

              <div className="mt-3">
                <p className="w-fit bg-[#F2F4F7] dark:bg-[#2D263D] rounded-md text-sm text-[#101828] dark:text-[#D0D5DD] font-mono px-2 py-0.5">
                  .well-known
                </p>
                <p className="w-fit bg-[#F2F4F7] dark:bg-[#2D263D] rounded-md text-sm text-[#101828] dark:text-[#D0D5DD] font-mono px-2 py-0.5 mt-2">
                  .pki-validation
                </p>

                <p className="text-xs text-[#101828] dark:text-[#98A2B3] font-semibold mt-4">
                  These should be located at:
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <p className="w-fit bg-[#F2F4F7] dark:bg-[#2D263D] rounded-md text-sm text-[#101828] dark:text-[#D0D5DD] font-mono px-2 py-0.5">
                    {textToCopy}
                  </p>
                  <Button
                    isIconOnly
                    variant="light"
                    size="sm"
                    className="flex items-center justify-center"
                    onPress={handleCopy}
                  >
                    {copied ? (
                      <IoIosCheckmarkCircleOutline size={18} />
                    ) : (
                      <Image
                        src={"/assets/svg/common/copy-link.svg"}
                        alt=""
                        width={18}
                        height={18}
                      />
                    )}
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-t border-[#EAECF0] dark:border-[#2D263D] p-3">
              <p className="text-sm text-[#101828] dark:text-white font-semibold">
                2. Upload the validation file:
              </p>

              <div className="mt-3">
                <p className="text-xs text-[#667085] dark:text-[#98A2B3] font-medium">
                  Download the validation file from below and upload it to the
                  directory mentioned above. Once done click verify.
                </p>

                <Button
                  variant="solid"
                  className="w-[125px] bg-[#12B76A] dark:bg-[#32D583] text-white font-manrope text-sm font-semibold mt-3"
                >
                  Download File
                </Button>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="border-t dark:!border-[#2D263D] dark:!bg-[#161221] p-3 md:p-5">
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
