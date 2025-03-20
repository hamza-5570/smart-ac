import { getMyDevices } from "@/services/device-api";
import { Button } from "@heroui/button";
import { Code } from "@heroui/code";
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

export default function DevicesTable() {
  const {
    data: devicesData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["devices-list"],
    queryFn: () => getMyDevices(),
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
  const { sharedDevices, myDevices } = devices;

  const allDevices = [...sharedDevices, ...myDevices];

  if (!allDevices.length)
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
        </TableHeader>
        <TableBody>
          {allDevices.map((device) => (
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
