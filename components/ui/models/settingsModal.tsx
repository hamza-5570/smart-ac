import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { Select, SelectItem } from "@heroui/select";
import { Switch } from "@heroui/switch";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

export const animals = [
  { key: "Updates Weekly", label: "Server" },
  { key: "Updates Week", label: "Server Domain" },
  { key: "Updates Weeky", label: "Domain" },
];

export const SettingsModal = ({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  onConfirm,
}: any) => {
  const { isOpen, onClose } = useDisclosure();
  const modalIsOpen = controlledIsOpen ?? isOpen;
  const handleClose = controlledOnClose ?? onClose;

  return (
    <Modal
      radius="none"
      isOpen={modalIsOpen}
      hideCloseButton={true}
      size="xl"
      onOpenChange={handleClose}
    >
      <ModalContent className="relative font-manrope border dark:border-[#2D263D] dark:bg-[#0A0613]">
        <ModalHeader className="bg-[#F4F3FF] dark:bg-[#3E1C96] text-base md:text-lg font-bold text-[#3E1C96] dark:text-white">
          Certificate Settings
        </ModalHeader>
        <ModalBody className="p-3">
          <div className="border border-[#EAECF0] dark:border-[#2D263D] dark:bg-[#161221]">
            <div className="flex items-center justify-between gap-3 p-3">
              <div>
                <p className="text-sm text-[#101828] dark:text-white font-semibold">
                  Auto Renewal
                </p>
                <p className="text-xs text-[#667085] pt-2 dark:text-[#98A2B3]">
                  For your convenience, auto-renewal is enabled to ensure
                  uninterrupted security. You can manage or modify the
                  auto-renewal settings at any time.
                </p>
              </div>
              <Switch aria-label="Automatic updates" size="sm" />
            </div>
            <div className="border-t border-[#EAECF0] dark:border-[#2D263D] p-3">
              <p className="text-sm text-[#101828] dark:text-white font-semibold">
                Revoke Certificate
              </p>

              <p className="text-xs text-[#667085] dark:text-[#98A2B3] font-medium mt-2">
                Download the validation file from below and upload it to the
                directory mentioned above. Once done click verify.
              </p>

              <Button
                variant="solid"
                className="w-[190px] bg-[#F04438] text-white font-manrope text-xs md:text-sm font-semibold mt-3"
              >
                Submit Revoke Request
              </Button>
            </div>

            <div className="border-t border-[#EAECF0] dark:border-[#2D263D] p-3">
              <p className="text-sm text-[#101828] dark:text-white font-semibold">
                Download Certificate
              </p>

              <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-3">
                <Select
                  disableSelectorIconRotation
                  className="w-full md:w-[145px] text-base text-[#667085] dark:text-[#98A2B3] font-semibold dark:bg-[#161221] rounded-xl"
                  placeholder="Server type"
                  variant="bordered"
                  selectorIcon={
                    <IoIosArrowDown className="dark:text-[#98A2B3]" />
                  }
                >
                  {animals.map((animal) => (
                    <SelectItem key={animal.key}>{animal.label}</SelectItem>
                  ))}
                </Select>
                <Button
                  variant="solid"
                  startContent={
                    <Image
                      src={"/assets/svg/common/download-file.svg"}
                      alt=""
                      width={24}
                      height={24}
                    />
                  }
                  className="w-full md:w-[206px] bg-[#12B76A] text-white font-manrope text-sm font-semibold m"
                >
                  Download Certificate
                </Button>
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
            Update Certificate<span className="hidden md:block">Settings</span>
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
