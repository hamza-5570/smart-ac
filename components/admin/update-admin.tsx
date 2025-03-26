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
import { AdminPayload, updateUser as updateUserApi } from "@/services/user-api";
import { addToast } from "@heroui/toast";
import { LuPenLine } from "react-icons/lu";

export default function UpdateAdmin({userId,user}: {userId: string, user: AdminPayload}) {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: & {
        _id: string;
        blocked: "No" | "Admin_Block" | "User_Block" | "All_Block";
      }) => updateUserApi(data),
  });


  const handleSubmit = (data: AdminPayload & {
    _id: string;
    blocked: "No" | "Admin_Block" | "User_Block" | "All_Block";
  }) => {
    mutate({...data, _id: userId}, {
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
        variant='flat'
        className="w-fit"
        isIconOnly
        onPress={() => setIsOpen(true)}
      >
        <LuPenLine size={18} className="w-fit"/>
      </Button>
      <Modal size="xl" isOpen={isOpen} onOpenChange={setIsOpen} isDismissable={false}>
        <ModalContent>
          <ModalHeader>Update Admin</ModalHeader>
          <ModalBody className="pt-6">
            <AdminForm  isShowSelect={true} defaultValues={user}  onSubmit={handleSubmit} />
          </ModalBody>
          <ModalFooter>
            <Button onPress={() => setIsOpen(false)} type="button" variant="ghost">
              Cancel
            </Button>
            <Button
              isLoading={isPending}
              form="device-form"
              type="submit"
              color="secondary"
            >
              Update Admin
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
