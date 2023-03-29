import { PropsWithChildren } from "react";
import Navigation from "./Navigation";
import Header from "./Header";

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <Navigation />
            </div>
          </div>
        </div>
      </div>
      <main>{children}</main>
    </>
  );
}
