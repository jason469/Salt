import '../../../common/styles/reset.scss'
import '../../../common/styles/base.scss'
import '../../../common/styles/styles.scss'

import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

import * as classes from "./layout.module.scss"

const Layout = (props) => {
  return (
    <section className={classes.container}>
      <section className={classes.content}>
        <Header/>
        {props.children}
      </section>
      <Footer/>
    </section>
  );
};

export default Layout;
