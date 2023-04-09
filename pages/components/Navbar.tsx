import Image from "next/image";
import Avatar from "./Avatar";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-xl navbar-light bg-light mb-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image src="/images/logo.png" alt="logo" width="30" height="27" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarBasic"
          aria-controls="navbarBasic"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarBasic">
          <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            <li className="nav-item">
              <a
                className="nav-link text-capitalize active"
                aria-current="page"
                href="#"
              >
                home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-capitalize" href="#">
                posts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-capitalize" href="#">
                pages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-capitalize" href="#">
                features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-capitalize" href="#">
                contact
              </a>
            </li>
          </ul>
          <div className="d-lg-flex d-xs-flex flex-xs-column justify-content-xs-between flex-lg-row align-items-center">
            <Avatar />
            <button
              className="ms-lg-4 btn btn-link text-uppercase text-decoration-none pt-xs-3 ps-0 pt-lg-1"
              type="submit"
            >
              sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
