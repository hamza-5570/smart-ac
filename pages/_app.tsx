import type { AppProps } from "next/app";
import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@/styles/globals.css";
import AppLayout from "@/layouts/default";
import { Toaster } from "sonner";
import AuthLayout from "@/layouts/auth";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: 3 } },
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const Layout = router.pathname.includes("auth") ? AuthLayout : AppLayout;
  return (
    <HeroUIProvider navigate={router.push}>
      <QueryClientProvider client={queryClient}>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <Layout>
            <Toaster richColors position="bottom-center" />
            <Component {...pageProps} />
          </Layout>
        </NextThemesProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </HeroUIProvider>
  );
}
