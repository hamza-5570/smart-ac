import type { AppProps } from "next/app";
import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ToastProvider } from "@heroui/toast";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@/styles/globals.css";
import AppLayout from "@/layouts/default";

import AuthLayout from "@/layouts/auth";
import { UserProvider } from "@/context/user-context";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: 3 } },
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAuthPage = router.pathname.includes("auth");
  const Layout = isAuthPage ? AuthLayout : AppLayout;

  return (
    <HeroUIProvider navigate={router.push}>
      <ToastProvider placement="top-right" toastProps={{ variant: "flat" }} />
      <QueryClientProvider client={queryClient}>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {isAuthPage ? (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          ) : (
            <UserProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </UserProvider>
          )}
        </NextThemesProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </HeroUIProvider>
  );
}
