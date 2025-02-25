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

export const CloudflareDNSModal = ({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  onConfirm,
  isLoading,
}: any) => {
  const { isOpen, onClose } = useDisclosure();
  const modalIsOpen = controlledIsOpen ?? isOpen;
  const handleClose = controlledOnClose ?? onClose;

  return (
    <Modal
      radius="none"
      isOpen={modalIsOpen}
      hideCloseButton={true}
      onOpenChange={handleClose}
    >
      <ModalContent className="relative font-manrope border dark:border-[#2D263D]">
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-white/90 dark:bg-black/90 z-10">
            <Spinner size="lg" />
          </div>
        )}

        <ModalHeader className="flex flex-col bg-[#F9FAFB] dark:bg-[#161221] border-b border-[#EAECF0] dark:border-[#2D263D]">
          <p className="text-base md:text-lg font-bold text-[#1D2939] dark:text-white">
            Cloudflare DNS Validation (Automated)
          </p>
          <p className="text-xs text-[#667085] dark:text-[#98A2B3] font-medium mt-2">
            Connect to your Cloud flare account to automatically verify your
            domains without any manual work.
          </p>
        </ModalHeader>
        <ModalBody className="p-5 dark:bg-[#0A0613]">
          <div className="flex items-center justify-center gap-3 border border-[#EAECF0] dark:border-[#2D263D] p-3 cursor-pointer dark:bg-[#161221]">
            <Image
              src={"/assets/svg/common/cloudflare-logo.svg"}
              alt=""
              width={75}
              height={25}
            />
            <p className="text-sm text-[#101828] dark:text-white font-semibold">
              Sign in with cloudflare
            </p>
          </div>
        </ModalBody>
        <ModalFooter className="p-3 md:p-5">
          <Button
            variant="solid"
            size="lg"
            className="w-full bg-[#6938EF] dark:bg-[#9365F4] text-white font-manrope text-xs md:text-sm font-semibold"
            onPress={onConfirm}
          >
            Auto Add DNS
          </Button>
          <Button
            variant="solid"
            size="lg"
            className="w-full bg-[#EAECF0] dark:bg-[#2D263D] text-[#475467] dark:text-[#D0D5DD] font-manrope text-xs md:text-sm font-semibold"
            onPress={controlledOnClose}
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
