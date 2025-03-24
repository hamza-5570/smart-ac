import { getAllDevices, getMyDevices } from "@/services/device-api";
import { Button } from "@heroui/button";
import { Code } from "@heroui/code";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/modal";
import { Spinner } from "@heroui/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useState } from "react";
import { LuPencilLine } from "react-icons/lu";
import DeviceWarrentyForm from "./device-update-warrenty-form";
import UpdateWarrenty from "./update-warrenty";

export default function DevicesTable() {
  const {
    data: devicesData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["devices-list"],
    queryFn: () => getAllDevices(),
  });

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
  const { devices, message } = devicesData;

  if (!devices.length)
    return (
      <div className="h-80 flex items-center justify-center">
        <div className="space-y-2 text-center">
          <p className="text-center text-gray-600 text-xl font-medium">
            {message}
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
          <TableColumn>Device Name</TableColumn>
          <TableColumn>Nickname</TableColumn>
          <TableColumn>Code Name</TableColumn>
          <TableColumn>Provider</TableColumn>
          <TableColumn>Serial No.</TableColumn>
          <TableColumn>Last Updated</TableColumn>
          <TableColumn>Updated Warrenty</TableColumn>
        </TableHeader>
        <TableBody>
          {devices.map((device: any) => (
            <TableRow key={`device-${device._id}`}>
              <TableCell>{device.deviceName}</TableCell>
              <TableCell>{device.nickname}</TableCell>
              <TableCell>
                <Code>{device.codeName}</Code>
              </TableCell>
              <TableCell>{device.provider}</TableCell>
              <TableCell>{device.deviceSerial}</TableCell>
              <TableCell>
                {device.lastEnvUpdated
                  ? dayjs(device.lastEnvUpdated).format("DD-MM-YYYY hh:mm A")
                  : "-----"}
              </TableCell>
              <TableCell className="flex justify-center">
               <UpdateWarrenty device={device}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
