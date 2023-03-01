import '../../common/styles/base.scss'

import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

import * as classes from "./layout.module.scss"

const Layout = (props) => {
  console.log(props)
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
