import React from 'react';
import {Link} from 'gatsby'

import Layout from "../components/base/layout/layout";
import Head from "../components/base/head/head"

const NotFound = (props) => {
  return (
    <Layout>
      <Head title="404"/>
      <h1>Page not found</h1>
      <p><Link to="/">Head home</Link></p>
    </Layout>
  );
};

export default NotFound;
