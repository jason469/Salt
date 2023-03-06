import React from "react";
import Layout from "../components/base/layout/layout";
import Head from "../components/base/head/head"
import * as classes from "../components/base/header/header.module.scss";

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1 className={`text-6xl font-semibold | mt-12`}>Welcome to <h1
        className={`font-bold uppercase font-logo tracking-wider inline`}>Salt</h1></h1>
    </Layout>
  );
};

export default IndexPage;
