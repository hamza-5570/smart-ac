import { Card } from "@heroui/card";
import React from "react";

export default function HealthSummary() {
  return (
    <Card className="shadow-none bg-white dark:bg-[#0A0613] border border-[#EAECF0] dark:border-[#2D263D] rounded-xl px-4 py-6  md:w-5/12 min-w-80">
      <h3 className="text-xl font-semibold font-manrope text-center">
        Device Health Summary
      </h3>
      <div className="mt-4 space-y-2">
        <SummaryItem />
        <SummaryItem />
        <SummaryItem />
        <SummaryItem />
      </div>
    </Card>
  );
}

function SummaryItem() {
  return (
    <div className="p-3 pl-6 bg-gray-100 rounded-md flex items-center justify-between">
      <h5 className="font-semibold">Notifications</h5>
      <span className="text-sm">12:30 PM</span>
    </div>
  );
}
