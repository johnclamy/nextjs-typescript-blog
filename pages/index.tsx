import Head from "next/head";
import Layout from "./components/Layout";
import Banner from "./components/Banner";

export default function HomePage() {
  return (
    <Layout>
      <Banner />
    </Layout>
  );
}
