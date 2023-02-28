import '../../common/styles/base.scss'

import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

import classes from "./layout.module.scss"

const Layout = (props) => {
    return (
        <section className={classes.container}>
            <Header/>
            {props.children}
            <Footer/>
        </section>
    );
};

export default Layout;
