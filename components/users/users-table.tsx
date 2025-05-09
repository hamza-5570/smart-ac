import { getUsers } from "@/services/user-api";
import { calcResultNo } from "@/utils/helpers";
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
import UpdateAdmin from "../admin/update-admin";
export default function UsersTable({
  role = "User",
  label,
}: {
  role?: "User" | "Admin";
  label?: string;
}) {
  const {
    data: usersData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users-list", role],
    queryFn: () => getUsers({ filters: { role: role }, keywords: "" }),
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

  const { users, currentPage, total, totalPages } = usersData.data;
  const pagination = { currentPage, totalPages, limit: 10 };
  if (total === 0)
    return (
      <div className="h-80 flex items-center justify-center">
        <div className="space-y-2 text-center">
          <p className="text-center text-gray-600 text-xl font-medium">
            {usersData.message}
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
          <TableColumn>Account ID</TableColumn>
          <TableColumn>Name</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>Created On</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody>
          {users.map((user: any, index: number) => (
            <TableRow
              key={`user-${user._id}`}
              className="even:bg-gray-100 dark:even:bg-neutral-800 rounded-lg"
            >
              <TableCell>{calcResultNo(pagination, index)}</TableCell>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>
                <Code>{user.email}</Code>
              </TableCell>

              <TableCell>
                {dayjs(user.createdAt).format("DD-MM-YYYY")}
              </TableCell>
              <TableCell className="flex gap-x-1">
                <UpdateAdmin user={user} userId={user._id} label={label} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
