import DashboardCard from "./dashboard-card";

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
    </div>
  );
}
