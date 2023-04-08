import Head from "next/head";
import Layout from "./components/Layout";

export default function HomePage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Layout>
            <h1>here is where my content goes...</h1>
          </Layout>
        </div>
      </div>
    </div>
  );
}
