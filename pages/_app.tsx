import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }: any) {
  useEffect(() => {
    //import("bootstrap/dist/js/bootstrap.bundle.min.js");
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap.bundle.min.js")
      : null;
  }, []);

  return <Component {...pageProps} />;
}
