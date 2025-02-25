import { Button } from "@heroui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@heroui/drawer";
import { useDisclosure } from "@heroui/modal";
import { HiMenuAlt3 } from "react-icons/hi";
import { Logo } from "../logo";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const list = [
  {
    icon: "/assets/svg/sidebar/dashboard.svg",
    name: "Dashboard",
    path: "/",
  },
  {
    icon: "/assets/svg/sidebar/certificates.svg",
    name: "Certificates",
    path: "/certificates",
  },
  {
    icon: "/assets/svg/sidebar/settings.svg",
    name: "Settings",
    path: "/settings",
  },
  {
    icon: "/assets/svg/sidebar/avatar.svg",
    name: "Profile",
    path: "/profile",
  },
];

export function Drawers() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  return (
    <>
      <button
        className="w-8 h-8 md:w-10 md:h-10 md:hidden flex items-center justify-center bg-[#F9FAFB] dark:bg-[#161221] rounded-full"
        onClick={onOpen}
      >
        <HiMenuAlt3 className="text-[#667085] dark:text-[#8F8A99]" />
      </button>
      <Drawer
        isOpen={isOpen}
        className="dark:bg-[#0a0515]"
        hideCloseButton={true}
        size={"sm"}
        radius="none"
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                <Logo />
              </DrawerHeader>
              <DrawerBody>
                <ul>
                  {list.map((item, index) => (
                    <Link
                      key={index}
                      href={item.path}
                      className={`flex items-center gap-2 text-sm font-medium rounded-xl p-3 mt-3 cursor-pointer ${
                        router.pathname === item.path
                          ? "bg-[#F4F3FF] text-[#6938EF] dark:bg-[#291B4A] dark:text-[#9B8AFB]"
                          : "text-[#98A2B3] dark:text-[#8F8A99]"
                      }`}
                      onClick={onClose}
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
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
