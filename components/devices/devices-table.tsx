import { getAllDevices } from "@/services/device-api";
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

import UpdateWarrenty from "./update-warrenty";
import dayjs from "dayjs";

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
          <TableColumn>Owner</TableColumn>
          <TableColumn>Warranty Status</TableColumn>
          <TableColumn>Active</TableColumn>
          <TableColumn>Provider</TableColumn>
          <TableColumn>Serial No.</TableColumn>
          <TableColumn>Updated Warrenty</TableColumn>
        </TableHeader>
        <TableBody>
          {devices.map((device: any) => (
            <TableRow
              key={`device-${device._id}`}
              className="even:bg-gray-100 dark:even:bg-neutral-800 rounded-lg"
            >
              <TableCell>{device.deviceName}</TableCell>
              <TableCell className="flex flex-col">
                {/* {device?.user?.name} */}
                {device?.user?.email && (
                  <Code className="text-xs w-fit">{device?.user?.email}</Code>
                )}
              </TableCell>
              <TableCell>
                <WarrantyStatus device={device} />
              </TableCell>
              <TableCell>
                <ActiveStatus device={device} />
              </TableCell>
              <TableCell>{device.provider}</TableCell>
              <TableCell>{device.deviceSerial}</TableCell>
              <TableCell className="flex  justify-center">
                <UpdateWarrenty device={device} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function ActiveStatus({ device }: any) {
  const { lastEnvUpdated } = device;
  const timestamp = dayjs(lastEnvUpdated);
  const now = dayjs();
  const diffMinutes = now.diff(timestamp, "minute");
  const isActive = diffMinutes > 5;

  return (
    <div className="flex items-center justify-center">
      <span className="relative flex h-3 w-3">
        <span
          className={`absolute inline-flex h-full w-full rounded-full ${
            isActive ? "bg-green-400 animate-ping" : "bg-yellow-400"
          } opacity-75`}
        />
        <span
          className={`relative inline-flex rounded-full h-3 w-3 ${
            isActive ? "bg-green-500" : "bg-yellow-500"
          }`}
        />
      </span>
    </div>
  );
}
function WarrantyStatus({ device }: any) {
  const { warrantyEndsOn } = device;
  const now = dayjs();
  const isWarrantyExpired = now.isAfter(dayjs(warrantyEndsOn));

  return (
    <div>
      {isWarrantyExpired ? (
        <Code className="text-red-500 font-medium">Expired</Code>
      ) : (
        <Code className="text-green-500 font-medium">Valid</Code>
      )}
    </div>
  );
}
