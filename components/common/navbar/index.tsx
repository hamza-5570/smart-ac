import { ThemeSwitch } from "@/components/theme-switch";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@heroui/dropdown";
import Image from "next/image";

import { Button } from "@heroui/button";
import { User } from "@heroui/user";
import { useRouter } from "next/router";
import { Key } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Drawers } from "../drawer";
import { Logo } from "../logo";
import { useProfile } from "@/context/user-context";
import Link from "next/link";
import { LuUserRoundCog } from "react-icons/lu";

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

        <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#F9FAFB] dark:bg-[#161221] rounded-full cursor-pointer">
          <Image
            src={"/assets/svg/navbar/noti-icon.svg"}
            alt=""
            width={24}
            height={24}
            className="w-4 h-4 md:w-6 md:h-6"
          />
        </div>

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
