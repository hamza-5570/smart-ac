import React from "react";
import TableRow from "./table-row";

export default function CertificatesTable({ list }: any) {
  return (
    <div className="overflow-x-auto border border-[#EAECF0] dark:border-[#2D263D] rounded-lg">
      <div className="max-w-[500px] xl:max-w-full">
        <div className="min-w-[900px] flex items-center justify-between border-b border-[#EAECF0] dark:border-[#2D263D] bg-[#F2F4F7] dark:bg-[#171029] px-4 py-3 rounded-t-lg">
          <div className="w-[300px] text-sm text-[#101828] dark:text-white font-medium">
            Domain
          </div>
          <div className="w-[180px] text-sm text-[#101828] dark:text-white font-medium">
            Certificate Type
          </div>
          <div className="w-[140px] text-sm text-[#101828] dark:text-white font-medium">
            Status
          </div>
          <div className="w-[130px] text-sm text-[#101828] dark:text-white font-medium">
            SSL Expiring Date
          </div>
          <div className="w-[130px] text-sm text-[#101828] dark:text-white font-medium">
            <span className="invisible">.</span>
          </div>
        </div>
        {list.map((item: any, index: number) => (
          <TableRow key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
