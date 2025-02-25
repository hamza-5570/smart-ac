import React from "react";
import DashboardCard from "./dashboard-card";
import CustomerInsightsChart from "./customer-insights-chart";
import HealthSummary from "./health-summary";

const list = [
  {
    icon: "/assets/png/devices.png",
    title: "Total Devices",
    value: "04",
    href: "/certificates?filter=Issued",
  },
  {
    icon: "/assets/png/power-on.png",
    title: "Active Devices",
    value: "02",
    href: "/certificates?filter=PendingValidation",
  },
  {
    icon: "/assets/png/user.png",
    title: "Users",
    value: "03",
    href: "/certificates?filter=ExpiringSoon",
  },
  {
    icon: "/assets/png/user-add.png",
    title: "New User",
    value: "03",
    href: "/certificates?filter=Expired",
  },
];
const healthSummary = [
  {
    icon: "/assets/png/security-shield.png",
    title: "Total Warranty",
    value: "60",
    href: "/certificates?filter=PendingValidation",
  },
  {
    icon: "/assets/png/hourglass.png",
    title: "Total Expiration",
    value: "30",
    href: "/certificates?filter=ExpiringSoon",
  },
  {
    icon: "/assets/png/link.png",
    title: "Paired Devices",
    value: "03",
    href: "/certificates?filter=Expired",
  },
  {
    icon: "/assets/png/not-allowed.png",
    title: "Unpaired Devices",
    value: "10",
    href: "/certificates?filter=Issued",
  },
];

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl md:text-[32px] text-[#101828] dark:text-white font-medium font-mono">
        Dashboard Overview
      </h2>
      <p className="text-xs md:text-sm text-[#667085] dark:text-[#8F8A99] font-medium pt-1.5">
        Key Matrices
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 md:mt-8">
        {list.map((item, index) => (
          <DashboardCard key={index} item={item} />
        ))}
      </div>
      <section className="md:py-6 py-4 flex gap-4 md:gap-6">
        <CustomerInsightsChart />
        <HealthSummary />
      </section>
      <div>
        <h2 className="text-xl text-[#101828] dark:text-white font-semibold font-manrope">
          Device Health Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {healthSummary.map((item, index) => (
            <DashboardCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
