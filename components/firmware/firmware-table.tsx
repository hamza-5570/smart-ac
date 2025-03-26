import { deleteFirmware, getFirmware, registerFirm } from "@/services/firmware-api";
import { Button } from "@heroui/button";
import { Code } from "@heroui/code";
import { Modal, ModalContent, ModalFooter, ModalHeader } from "@heroui/modal";
import { Spinner } from "@heroui/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { addToast } from "@heroui/toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useState } from "react";
import { LuTrash2 } from "react-icons/lu";

export default function FirmwareTable({
  role = "User",
}: {
  role?: "User" | "Admin";
}) {
  const {
    data: firmData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["firm-list", role],
    queryFn: () => getFirmware(),
  });
  const { mutate, isPending } = useMutation({
    mutationFn: (id: any) => deleteFirmware(id),
  });
  const [isOpen, setIsOpen] = useState<any>();
  const queryClient = useQueryClient();

  if (isLoading)
    return (
      <div className="h-80 flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  if (isError)
    return (
      <div className="h-80 flex items-center justify-center">
        <p className="text-center text-gray-600">{error.message}</p>
      </div>
    );

  const { firmwares, currentPage, total, totalPages } = firmData;
  const pagination = { currentPage, totalPages, limit: 10 };
  if (total === 0)
    return (
      <div className="h-80 flex items-center justify-center">
        <div className="space-y-2 text-center">
          <p className="text-center text-gray-600 text-xl font-medium">
            {firmData.message}
          </p>
          <Button size="lg" color="secondary" variant="shadow">
            Register a Device
          </Button>
        </div>
      </div>
    );

  return (
    <div className="mt-6">
      <Table aria-label="Devices Table">
        <TableHeader>
          <TableColumn>#</TableColumn>
          <TableColumn>Build</TableColumn>
          <TableColumn>DeviceType</TableColumn>
          <TableColumn>Provider</TableColumn>
          <TableColumn>Version</TableColumn>
          <TableColumn>Created On</TableColumn>
          <TableColumn>Remove</TableColumn>
        </TableHeader>
        <TableBody>
          {firmwares.map((firm: any, index: number) => (
            <TableRow className="border-b" key={`firm-${firm._id}`}>
              {/* <TableCell>{calcResultNo(pagination, index)}</TableCell> */}
              <TableCell>{index}</TableCell>
              <TableCell>{firm.build}</TableCell>
              <TableCell>
                <Code>{firm.deviceType}</Code>
              </TableCell>
              <TableCell>{firm.hardwareProvider}</TableCell>
              <TableCell>{firm.version}</TableCell>
              <TableCell>
                {dayjs(firm.createdAt).format("DD-MM-YYYY")}
              </TableCell>
              <TableCell>
                <Button
                  onPress={() => setIsOpen(true)}
                  isIconOnly
                  variant={"flat"}
                >
                  <LuTrash2 size={20} color="red" />
                </Button>
                <Modal size="xl" isOpen={isOpen} onOpenChange={setIsOpen}>
                  <ModalContent >
                    <ModalHeader>Remove Firmware</ModalHeader>
                    <h4 className="text-xl text-center  text-[#101828] dark:text-white font-medium font-mono">
                      Are you sure want remove...?
                    </h4>
                    <ModalFooter>
                      <Button
                        onPress={() => setIsOpen(false)}
                        type="button"
                        variant="ghost"
                      >
                        Cancel
                      </Button>
                      <Button
                        form="device-form"
                        type="submit"
                        color="danger"
                        onPress={()=>{
                          mutate(firm._id, {
                            onSuccess: (res) => {
                              addToast({
                                title: "Success",
                                description: res.message,
                                color: "success",
                              });
                              queryClient.invalidateQueries({ queryKey: ["firm-list"] });
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
                        }}
                        isLoading={isPending}
                      >
                        Delete
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
