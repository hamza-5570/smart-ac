import { ThemeSwitch } from "@/components/theme-switch";
import Image from "next/image";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "@heroui/button";
import { Logo } from "../logo";
import { Drawers } from "../drawer";
import { useRouter } from "next/router";
import { Key } from "react";

export const Navbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    router.replace("/auth/login");
  };
  const handleDropdownAction = (key: Key) => {
    if (key === "logout") handleLogout();
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
        <div className="hidden w-8 h-8 md:w-10 md:h-10 md:flex items-center justify-center bg-[#F9FAFB] dark:bg-[#161221] rounded-full cursor-pointer">
          <Image
            src={"/assets/svg/navbar/user.svg"}
            alt=""
            width={24}
            height={24}
          />
        </div>
        <Drawers />
        <Dropdown className="font-manrope">
          <DropdownTrigger>
            <Button
              isIconOnly
              variant="light"
              size="sm"
              className="hidden md:flex items-center justify-center"
            >
              <IoIosArrowDown
                className="cursor-pointer text-[#667085] dark:text-[#8F8A99]"
                size={24}
              />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Static Actions"
            variant="faded"
            onAction={handleDropdownAction}
          >
            <DropdownItem key="new">Profile</DropdownItem>
            <DropdownItem key="copy">Settings</DropdownItem>
            <DropdownItem key="logout">Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};
