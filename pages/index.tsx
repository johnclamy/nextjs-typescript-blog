import Header from "./components/Header";
import Navigation from "./components/Navigation";

export default function HomePage() {
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
    </>
  );
}
