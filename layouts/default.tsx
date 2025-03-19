import { Logo, Navbar, SideBar } from "@/components/common";
import { Head } from "./head";
import { useEffect } from "react";
import { useProfile } from "@/context/user-context";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isLoading, isError, error } = useProfile();
  useEffect(() => {
    const access = localStorage.getItem("access_token");
    if (!access) {
      router.replace("/auth/login");
    }
  }, []);

  if (isLoading)
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Logo />
      </div>
    );

  if (isError)
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        {error.message}
      </div>
    );
  return (
    <div className="flex font-manrope">
      <Head />
      <div className="hidden lg:block">
        <SideBar />
      </div>

      <div className="w-full">
        <Navbar />
        <main className="h-[calc(100vh-65px)] md:h-[calc(100vh-80px)] overflow-y-auto dark:bg-[#0a0515] bg-[#fcfcfd] px-4 py-5 md:px-6 md:py-7">
          {children}
        </main>
      </div>
    </div>
  );
}
