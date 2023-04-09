import Head from "next/head";
import Layout from "./components/Layout";
import Banner from "./components/Banner";

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>My Blog | Explore the new horizon</title>
      </Head>
      <Banner />
    </Layout>
  );
}
