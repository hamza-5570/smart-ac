import { getRemotes } from "@/services/cloner-api";
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

export default function RemotesTable() {
  const {
    data: remotesData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["remotes-list"],
    queryFn: () => getRemotes(),
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
  console.log(remotesData);

  const { remotes } = remotesData;

  if (remotes.length === 0)
    return (
      <div className="h-80 flex items-center justify-center">
        <div className="space-y-2 text-center">
          <p className="text-center text-gray-600 text-xl font-medium">
            {remotesData.message}
          </p>
        </div>
      </div>
    );

  return (
    <div className="mt-6">
      <Table aria-label="Devices Table">
        <TableHeader>
          <TableColumn>Brand</TableColumn>
          <TableColumn>Model</TableColumn>
          <TableColumn>Year</TableColumn>
          <TableColumn>Created On</TableColumn>
        </TableHeader>
        <TableBody>
          {remotes.map((remote: any) => (
            <TableRow className="border-b" key={`remote-${remote._id}`}>
              <TableCell>{remote.name}</TableCell>
              <TableCell>{remote.model}</TableCell>
              <TableCell>{remote.year}</TableCell>
              <TableCell>
                {dayjs(remote.createdAt).format("DD-MM-YYYY")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
