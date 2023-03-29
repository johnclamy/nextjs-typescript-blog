import { PropsWithChildren } from "react";
import Navigation from "./Navigation";
import Header from "./Header";

export default function MainLayout({ children }: PropsWithChildren) {
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
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <Header />
          </div>
        </div>
      </div>
      <main>{children}</main>
    </>
  );
}
