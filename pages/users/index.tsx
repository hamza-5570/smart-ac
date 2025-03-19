import UsersTable from "@/components/users/users-table";

import React from "react";

export default function UsersPage() {
  return (
    <div>
      <h2 className="text-2xl md:text-[32px] text-[#101828] dark:text-white font-medium font-mono">
        Users
      </h2>
      <p className="text-xs md:text-sm text-[#667085] dark:text-[#8F8A99] font-medium pt-1.5">
        Users Details
      </p>
      <div className="mt-8">
        <UsersTable />
      </div>
    </div>
  );
}
