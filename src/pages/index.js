import React from "react";
import Layout from "../components/base/layout/layout";
import Head from "../components/base/head/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1 className="text-yellow-400">Hello</h1>
    </Layout>
  );
};

export default IndexPage;
