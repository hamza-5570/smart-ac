import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import Image from "next/image";

export const EffortlessSetup = ({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
}: any) => {
  const { isOpen, onClose } = useDisclosure();
  const modalIsOpen = controlledIsOpen ?? isOpen;
  const handleClose = controlledOnClose ?? onClose;

  return (
    <Modal
      radius="none"
      isOpen={modalIsOpen}
      hideCloseButton={true}
      isDismissable={false}
      onOpenChange={handleClose}
    >
      <ModalContent className="relative font-manrope border dark:border-[#2D263D] dark:bg-[#0A0613]">
        <ModalHeader>
          <div>
            <div className="flex items-center justify-center gap-2">
              <Image
                src={"/assets/svg/common/secure.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="text-lg text-[#3E1C96] dark:text-[#9365F4] font-bold">
                Effortless Setup with One Click
              </p>
            </div>
            <p className="text-xs text-[#667085] dark:text-[#98A2B3] font-semibold text-center pt-1">{`Let us handle the setup for you! With just one click, we’ll automatically configure everything for optimal performance.`}</p>
          </div>
        </ModalHeader>
        <ModalBody className="p-3 md:p-5">
          <div className="flex items-center justify-between bg-[#F6FEF9] dark:bg-[#00180A] p-4">
            <div className="flex items-center gap-2">
              <Image
                src={"/assets/svg/common/hosting.svg"}
                alt=""
                width={24}
                height={24}
              />
              <div>
                <p className="text-base font-bold">Hosting Provider</p>
                <p className="text-xs text-[#667085] dark:text-[#98A2B3] font-semibold pt-1">
                  We found Hostinger
                </p>
              </div>
            </div>
            <button className="text-xs text-[#12B76A] font-semibold">
              Change
            </button>
          </div>
          <div className="flex items-center justify-between bg-[#F6FEF9] dark:bg-[#00180A] p-4">
            <div className="flex items-center gap-2">
              <Image
                src={"/assets/svg/common/dns.svg"}
                alt=""
                width={24}
                height={24}
              />
              <div>
                <p className="text-base font-bold">DNS Provider</p>
                <p className="text-xs text-[#667085] dark:text-[#98A2B3] font-semibold pt-1">
                  We found Cloudflare
                </p>
              </div>
            </div>
            <button className="text-xs text-[#12B76A] font-semibold">
              Change
            </button>
          </div>
        </ModalBody>
        <ModalFooter className="dark:!bg-[#161221] !bg-[#F9FAFB] dark:!border-[#2D263D] !border-[#F9FAFB] border-t p-3 md:p-5">
          <Button
            variant="solid"
            size="lg"
            className="w-full bg-[#6938EF] dark:bg-[#9365F4] text-white font-manrope text-xs md:text-sm font-semibold"
          >
            One click setup
          </Button>
          <Button
            variant="solid"
            size="lg"
            className="hidden md:flex items-center justify-center w-full bg-[#EAECF0] dark:bg-[#2D263D] text-[#475467] dark:text-[#98A2B3] font-manrope text-xs md:text-sm font-semibold text-center"
            onPress={controlledOnClose}
          >
            I prefer to setup manually
          </Button>
          <Button
            variant="solid"
            size="lg"
            className="block md:hidden w-full bg-[#EAECF0] dark:bg-[#2D263D] text-[#475467] dark:text-[#98A2B3] font-manrope text-xs md:text-sm font-semibold"
            onPress={controlledOnClose}
          >
            Setup manually
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
