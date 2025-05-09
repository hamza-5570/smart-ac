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
import AdminForm from "./admin-form";
import {
  AdminPayload,
  createAdmin as createAdminApi,
} from "@/services/user-api";
import { addToast } from "@heroui/toast";

export default function RegisterAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: AdminPayload) => createAdminApi(data),
  });

  const handleSubmit = (data: AdminPayload) => {
    console.log("data", data);
    mutate(data, {
      onSuccess: (res) => {
        addToast({
          title: "Success",
          description: res.message,
          color: "success",
        });
        queryClient.invalidateQueries({ queryKey: ["users-list"] });
        setIsOpen(false);
      },
      onError: (err) => {
        const errorResponse = err as {
          response?: { data?: { message?: string } };
        };
        addToast({
          title: "Error",
          description:
            errorResponse.response?.data?.message ||
            "An unexpected error occurred",
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
        Register New Admin
      </Button>
      <Modal size="xl" isOpen={isOpen} onOpenChange={setIsOpen}>
        <ModalContent>
          <ModalHeader>Register New Admin</ModalHeader>
          <ModalBody className="pt-6">
            <AdminForm onSubmit={handleSubmit} />
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
              Register Admin
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
