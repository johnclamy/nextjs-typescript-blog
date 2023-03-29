import HeaderImage from "./HeaderImage";

export default function Header() {
  return (
    <header className="my-3">
      <HeaderImage />
      <h1 className="h5 text-center mt-4">
        Hello and Welcome 👏&nbsp;
        <span className="badge bg-light text-dark">{`I'm John`}</span>
      </h1>
    </header>
  );
}
