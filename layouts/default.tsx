import { Navbar, SideBar } from "@/components/common";
import { Head } from "./head";

export default function Layout({ children }: { children: React.ReactNode }) {
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
