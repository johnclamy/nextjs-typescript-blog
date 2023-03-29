import { PropsWithChildren } from "react";
import { AppProps } from "next/app";
import PageWithLayoutType from "./components/PageWithLayout";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType;
  pageProps: any;
};

export default function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout =
    Component.layout || ((children: PropsWithChildren) => <>{children}</>);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
