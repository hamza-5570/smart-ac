import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToast } from "@heroui/toast";
import FirmWareForm from "./firmware-form";
import { registerFirm } from "@/services/firmware-api";

export default function RegisterFirmware() {
  const [isOpen, setIsOpen] = useState(false);
  const [file,setFile]=useState<any>(null)
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: any) => registerFirm(data),
  });

  const handleSubmit = (data: any) => {

    const formdata=new FormData()
    formdata.append('version',data.version)
    formdata.append('firmwareFile',file)
    mutate(formdata, {
      onSuccess: (res) => {
        addToast({
          title: "Success",
          description: res.message,
          color: "success",
        });
        queryClient.invalidateQueries({ queryKey: ["devices-list"] });
        setIsOpen(false);
      },
      onError: (err) => {
        addToast({
          title: "Error",
          description: err.message,
          color: "danger",
        });
      },
    });
};

  return (
    <>
      <Button
        variant="shadow"
        color="secondary"
        onPress={() => setIsOpen(true)}
      >
        Upload Firmware
      </Button>
      <Modal size="xl" isOpen={isOpen} onOpenChange={setIsOpen}>
        <ModalContent>
          <ModalHeader>Upload Firmware</ModalHeader>
          <ModalBody className="pt-6">
            <FirmWareForm setFile={setFile} onSubmit={handleSubmit} />
          </ModalBody>
          <ModalFooter>
            <Button onPress={()=>{setIsOpen(false)}} type="button" variant="ghost">
              Cancel
            </Button>
            <Button
              isLoading={isPending}
              form="device-form"
              type="submit"
              color="secondary"
            >
              Upload File
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
