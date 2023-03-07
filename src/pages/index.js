import React from "react";
import Layout from "../components/base/layout/layout";
import Head from "../components/base/head/head"
import * as classes from "../components/base/header/header.module.scss";
import {Link} from "gatsby";

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <section className={`flex flex-col gap-8`}>
        <h1 className={`text-6xl font-semibold | mt-12`}>Welcome to
          <h1 className={`font-bold uppercase font-logo tracking-wider inline ml-4`}>Salt</h1>
        </h1>
        <section className={`grid | sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-5 | justify-center align-center`}>
          <section className={`w-full grid`}>
            <section
              className={`flex flex-col gap-3 justify-between | w-10/12 border border-gray-500 rounded overflow-hidden | shadow-md |  justify-self-center`}>
              <section className={`border-b border-gray-500 bg-white`}>
                <h1 className={`p-4`}>Recipes</h1>
              </section>
              <section className={`text-xs p-4`}>
                <p className={`mb-2`}>Click here to see all the recipes that we've collected</p>
                <p>We have recipes from a range of different cultures, such as Korean, Chinese, Japanese and Western</p>
              </section>
              <section className={`pl-4 pr-4 pb-4`}>
                <button className={`button`}>
                  <Link to="/recipes">
                    See more
                  </Link>
                </button>
              </section>
            </section>
          </section>
          <section className={`w-full grid`}>
            <section
              className={`flex flex-col gap-3 justify-between | w-10/12 border border-gray-500 rounded overflow-hidden | shadow-md |  justify-self-center`}>
              <section className={`border-b border-gray-500 bg-white`}>
                <h1 className={`p-4 | top-0`}>About</h1>
              </section>
              <section className={`text-xs p-4`}>
                <p className={`mb-2`}>What is Salt and why was it created?</p>
              </section>
              <section className={`pl-4 pr-4 pb-4`}>
                <button className={`button`}>
                  <Link to="/about">
                    See more
                  </Link>
                </button>
              </section>
            </section>
          </section>
          <section className={`w-full grid`}>
            <section
              className={`flex flex-col gap-3 justify-between | w-10/12 border border-gray-500 rounded overflow-hidden | shadow-md |  justify-self-center`}>
              <section className={`border-b border-gray-500 bg-white`}>
                <h1 className={`p-4`}>Contact</h1>
              </section>
              <section className={`text-xs p-4`}>
                <p className={`mb-2`}>How do you reach me?</p>
                <p>Learn more about the developer and what other work he's done</p>
              </section>
              <section className={`pl-4 pr-4 pb-4`}>
                <button className={`button`}>
                  <Link to="/contact">
                    See more
                  </Link>
                </button>
              </section>
            </section>
          </section>
        </section>
      </section>
    </Layout>
  );
};

export default IndexPage;
