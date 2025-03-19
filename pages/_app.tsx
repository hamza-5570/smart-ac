import type { AppProps } from "next/app";
import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ToastProvider } from "@heroui/toast";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@/styles/globals.css";
import AppLayout from "@/layouts/default";

const device = {
  device: {
    macAddress: null,
    isBlacklisted: false,
    hwVer: 1,
    firmwareVer: "1.2.1",
    firmwareStatus: {
      currentFirmwareVer: "1.2.1",
      availableFirmwareVer: "1.2.0",
      isUpdating: false,
      status: "update available",
    },
    _id: "66d062f066519756ec0d0502",
    type: "ir_remote",
    codeName: "ir_smart_ac_screen",
    deviceName: "AccelSmart Smart AC Pro",
    provider: "AccelSmart",
    nickname: "Smart Remote Pro",
    remote: { brand: 10, remoteId: 2 },
    deviceSerial: "252163001",
    sharedWith: [],
    user: "6627cb09b2a656a860f4ff5e",
    createdAt: "2024-08-29T12:00:48.719Z",
    updatedAt: "2025-02-25T09:33:16.404Z",
    __v: 0,
    lastEnvUpdated: "2025-02-25T09:31:28.826Z",
    lastSwitchedOn: "2025-02-25T09:31:28.826Z",
  },
};

const deviceStatus = {
  deviceStatus: {
    device: "66d062f066519756ec0d0502",
    _id: "66d0630466519756ec0d0517",
    codeName: "ir_smart_ac_screen",
    createdAt: "2024-08-29T12:01:08.891Z",
    updatedAt: "2025-02-25T09:42:36.868Z",
    __v: 0,
    status: {
      protocol: 10,
      model: 1,
      power: true,
      mode: 1,
      degrees: 29,
      celsius: true,
      fanspeed: 0,
      swingv: 0,
      swingh: -1,
      quiet: false,
      turbo: true,
      econo: false,
      light: false,
      filter: true,
      clean: false,
      beep: true,
      sleep: 0,
      clock: 0,
    },
  },
};
import AuthLayout from "@/layouts/auth";
import { UserProvider } from "@/context/user-context";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: 3 } },
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const Layout = router.pathname.includes("auth") ? AuthLayout : AppLayout;
  return (
    <HeroUIProvider navigate={router.push}>
      <ToastProvider placement="top-right" toastProps={{ variant: "flat" }} />
      <QueryClientProvider client={queryClient}>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <UserProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </UserProvider>
        </NextThemesProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </HeroUIProvider>
  );
}
