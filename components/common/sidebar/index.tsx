import React from "react";
import { useRouter } from "next/router";
import { Logo } from "../logo";
import Image from "next/image";
import Link from "next/link";

const list = [
  {
    icon: "/assets/svg/sidebar/dashboard.svg",
    name: "Dashboard",
    path: "/",
  },
  {
    icon: "/assets/png/sidebar/users-globe.png",
    name: "Customers",
    path: "/customers",
  },
  {
    icon: "/assets/png/sidebar/device-settings.png",
    name: "Devices",
    path: "/devices",
  },
  {
    icon: "/assets/png/sidebar/library.png",
    name: "Library",
    path: "/library",
  },
  {
    icon: "/assets/png/sidebar/analytics-report.png",
    name: "Analytics & Reports",
    path: "/analytics-and-reports",
  },
  {
    icon: "/assets/png/sidebar/user-settings.png",
    name: "Users",
    path: "/users",
  },
  {
    icon: "/assets/png/sidebar/support.png",
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
            <Image
              src={item.icon}
              alt={item.name}
              width={20}
              height={20}
              className="w-5 h-5"
              style={{
                filter: `${router.pathname === item.path ? "invert(110%) sepia(77%) saturate(700%) hue-rotate(210deg) brightness(88%)" : ""}`,
              }}
            />
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
