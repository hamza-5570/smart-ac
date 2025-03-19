import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import React, { useState } from "react";
import DeviceForm from "./device-form";
import { DevicePayload, registerDevice } from "@/services/device-api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToast } from "@heroui/toast";

export default function RegisterDevice() {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: DevicePayload) => registerDevice(data),
  });

  const handleSubmit = (data: DevicePayload) => {
    mutate(data, {
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
        Register New Device
      </Button>
      <Modal size="xl" isOpen={isOpen} onOpenChange={setIsOpen}>
        <ModalContent>
          <ModalHeader>Register New Device</ModalHeader>
          <ModalBody className="pt-6">
            <DeviceForm onSubmit={handleSubmit} />
          </ModalBody>
          <ModalFooter>
            <Button type="button" variant="ghost">
              Cancel
            </Button>
            <Button
              isLoading={isPending}
              form="device-form"
              type="submit"
              color="secondary"
            >
              Register Device
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
