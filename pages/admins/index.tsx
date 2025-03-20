/* eslint-disable jsx-a11y/aria-role */
import UsersTable from "@/components/users/users-table";

import React from "react";

export default function AdminsPage() {
  return (
    <div>
      <h2 className="text-2xl md:text-[32px] text-[#101828] dark:text-white font-medium font-mono">
        Admins
      </h2>
      <p className="text-xs md:text-sm text-[#667085] dark:text-[#8F8A99] font-medium pt-1.5">
        Admins Details
      </p>
      <div className="mt-8">
        <UsersTable role="Admin" />
      </div>
    </div>
  );
}
