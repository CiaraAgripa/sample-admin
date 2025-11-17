import "@/styles/globals.css";
import "@/styles/root.css";
import "@/styles/font.css";
import type { AppProps } from "next/app";
import { ThemeContextProvider } from "@/context/themeContext";
import Layout from "@/components/common/layout";
import { GlobalContextProvider } from "@/context/globalContext";
import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { ControllerProvider } from "@/context/controllerContext";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps: { session, user, token, ...pageProps } }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactNode) => <Layout {...pageProps}>{page}</Layout>);

  return (
    <SessionProvider session={session as any}>
      <GlobalContextProvider user={user} token={token}>
        <ThemeContextProvider>
          <ControllerProvider>{getLayout(<Component {...pageProps} />)}</ControllerProvider>
        </ThemeContextProvider>
      </GlobalContextProvider>
    </SessionProvider>
  );
}
