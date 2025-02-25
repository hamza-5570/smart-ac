import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { useRouter } from "next/router";

import { FiCheck } from "react-icons/fi";

export const InstallVerification = ({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
}: any) => {
  const router = useRouter();
  const { isOpen, onClose } = useDisclosure();
  const modalIsOpen = controlledIsOpen ?? isOpen;
  const handleClose = controlledOnClose ?? onClose;

  const handleToDashboard = () => {
    router.push("/");
  };

  const handleCreate = () => {
    router.push("/certificates");
    controlledOnClose();
  };

  return (
    <Modal
      radius="none"
      isOpen={modalIsOpen}
      hideCloseButton={true}
      onOpenChange={handleClose}
    >
      <ModalContent className="relative border dark:border-[#2D263D] dark:bg-[#0A0613]">
        <ModalBody className="p-0 md:p-5">
          <div className="relative flex flex-col items-center justify-between h-full">
            <div className="flex flex-col items-center mt-10 p-3">
              <div className="w-[150px] h-[150px] md:w-[162px] md:h-[162px] flex items-center justify-center rounded-full bg-[#e7f8f0] dark:bg-[#0b181c]">
                <div className="flex items-center justify-center w-[110px] h-[110px] md:w-[126px] md:h-[126px] bg-[#12B76A] rounded-full">
                  <div className="w-[45px] h-[45px] md:w-[55px] md:h-[55px] flex items-center justify-center bg-white rounded-full">
                    <FiCheck size={30} className="text-[#12B76A]" />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xl md:text-2xl text-[#101828] dark:text-white font-mono font-semibold text-center">
                  Certificate Successfully Installed
                </p>
                <p className="text-center text-xs text-[#667085] dark:text-[#98A2B3] font-medium pt-2">
                  Your SSL/TLS certificate has been installed successfully and
                  is now protecting your website, ensuring secure and encrypted
                  connections.
                </p>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="bg-[#F9FAFB] dark:bg-[#161221] border-t border-[#EAECF0] dark:border-[#2D263D] mt-5 p-2 md:p-5">
          <Button
            variant="solid"
            size="lg"
            className="w-full bg-[#6938EF] dark:bg-[#9365F4] text-white font-manrope text-xs md:text-sm font-semibold"
            onPress={handleCreate}
          >
            Create New Certificate
          </Button>
          <Button
            variant="solid"
            size="lg"
            className="w-full bg-[#EAECF0] dark:bg-[#2D263D] text-[#475467] dark:text-[#98A2B3] font-manrope text-xs md:text-sm font-semibold"
            onPress={handleToDashboard}
          >
            Go to Dashboard
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
