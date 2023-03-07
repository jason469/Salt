import '../../../common/styles/reset.scss'
import '../../../common/styles/base.scss'

import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

import * as classes from "./layout.module.scss"

const Layout = (props) => {
  return (
    <section className={`${classes.content} text-gray-500 | grid md:grid-cols-7 justify-center`}>
      <section className={`md:col-span-1`}>
        <Header/>
      </section>
      <section className={`font-body | bg-gray-100 | md:col-span-6 h-full | flex flex-col gap-4 justify-between`}>
        <section className={`px-16 py-3`}>
          {props.children}
        </section>
        <section className={`w-full`}>
          <Footer/>
        </section>
      </section>
    </section>
  );
};

export default Layout;
