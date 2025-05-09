/* eslint-disable jsx-a11y/aria-role */
import RegisterAdmin from "@/components/admin/register-admin";
import UsersTable from "@/components/users/users-table";

import React from "react";

export default function AdminsPage() {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl  dark:text-white font-medium font-mono">
            Admins
          </h2>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-200 font-medium pt-1.5">
            Admins Details
          </p>
        </div>
        <RegisterAdmin />
      </div>
      <div className="mt-8">
        <UsersTable role="Admin" label="Admin" />
      </div>
    </div>
  );
}
