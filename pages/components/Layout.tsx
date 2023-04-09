import { ReactNode } from "react";
import Navbar from "./Navbar";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Navbar />
          <section>{children}</section>
        </div>
      </div>
    </div>
  );
}
