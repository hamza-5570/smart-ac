import { ThemeSwitch } from "@/components/theme-switch";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@heroui/dropdown";

import { useProfile } from "@/context/user-context";
import { Button } from "@heroui/button";
import { User } from "@heroui/user";
import Link from "next/link";
import { useRouter } from "next/router";
import { Key } from "react";
import { LuUserRoundCog } from "react-icons/lu";
import { Drawers } from "../drawer";
import { Logo } from "../logo";

export const Navbar = () => {
  const router = useRouter();
  const { data: user } = useProfile();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    router.replace("/auth/login");
  };
  const handleDropdownAction = (key: Key) => {
    if (key === "logout") handleLogout();
    if (key === "profile") router.push("/profile");
  };

  return (
    <div className="flex items-center justify-between lg:justify-end h-[65px] md:h-[80px] border-b border-[#EAECF0] bg-white dark:bg-[#0A0613] dark:border-[#2D263D] px-3 md:px-5">
      <div className="block lg:hidden">
        <Logo />
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <ThemeSwitch />

        <Drawers />
        <Dropdown className="font-manrope">
          <DropdownTrigger>
            <Button
              isIconOnly
              disableAnimation
              variant="flat"
              className=" rounded-full  bg-[#F9FAFB] dark:bg-[#161221]"
            >
              <LuUserRoundCog size={24} className="text-gray-500" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Static Actions"
            variant="faded"
            onAction={handleDropdownAction}
          >
            <DropdownSection showDivider title={"Profile"}>
              <DropdownItem
                key="username"
                isReadOnly
                variant="flat"
                className="pointer-events-none"
              >
                <User
                  avatarProps={{
                    name: `${user?.name
                      .split(" ")
                      .map((word: string) => word.charAt(0))
                      .join("")}`,
                    size: "sm",
                    classNames: { name: "font-semibold" },
                  }}
                  classNames={{ name: "font-semibold" }}
                  name={user?.name}
                  description={user?.role}
                />
              </DropdownItem>
            </DropdownSection>

            <DropdownItem key="profile" as={Link} href="/profile">
              Settings
            </DropdownItem>

            <DropdownItem key="logout">Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};
