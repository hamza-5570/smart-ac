import Link from "next/link";
import { useRouter } from "next/router";
import {
  LuAirVent,
  LuFileChartColumn,
  LuFileUp,
  LuHeadset,
  LuLayoutDashboard,
  LuLibraryBig,
  LuShield,
  LuUserRoundCog,
} from "react-icons/lu";
import { GrShieldSecurity } from "react-icons/gr";

import { Logo } from "../logo";

const list = [
  {
    icon: LuLayoutDashboard,
    name: "Dashboard",
    path: "/",
  },
  {
    icon: LuAirVent,
    name: "Devices",
    path: "/devices",
  },
  {
    icon: LuLibraryBig,
    name: "Library",
    path: "/library",
  },
  // {
  //   icon: LuFileUp,
  //   name: "Performer",
  //   path: "/performer",
  // },
  {
    icon: GrShieldSecurity,
    name: "Firmware",
    path: "/firmware",
  },
  {
    icon: LuFileChartColumn,
    name: "Analytics & Reports",
    path: "/analytics-and-reports",
  },
  
  {
    icon: LuUserRoundCog,
    name: "Users",
    path: "/users",
  },
  {
    icon: LuShield,
    name: "Admins",
    path: "/admins",
  },
  {
    icon: LuHeadset,
    name: "Support",
    path: "/support",
  },
];

export function SideBar() {
  const router = useRouter();

  return (
    <div className="w-[180px] xl:w-[260px] h-screen border-r border-gray-200 dark:border-[#2D263D] p-3 xl:p-5 bg-white dark:bg-[#0A0613]">
      <Logo />
      <ul className="mt-10">
        {list.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`flex items-center gap-2 text-sm font-medium rounded-xl p-3 mt-3 cursor-pointer ${
              router.pathname === item.path
                ? "bg-[#F4F3FF] text-[#6938EF] dark:bg-[#291B4A] dark:text-[#9B8AFB]"
                : "text-[#98A2B3] dark:text-[#8F8A99]"
            }`}
          >
            <item.icon className="size-4" />
            <span>{item.name}</span>
          </Link>
        ))}
      </ul>
    </div>
  );
}
