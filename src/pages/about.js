import React from "react";
import Layout from "../components/base/layout/layout";
import Head from "../components/base/head/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About"/>
      <h1 className={`text-6xl font-semibold | mt-12`}>About</h1>
    </Layout>
  );
};

export default AboutPage;