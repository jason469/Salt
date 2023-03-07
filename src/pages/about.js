import React from "react";
import Layout from "../components/base/layout/layout";
import Head from "../components/base/head/head"
import * as classes from "./about.module.scss";

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About"/>
      <section className={`about | flex flex-col gap-12`}>
        <section className={`border-b-2 border-gray-400`}>
          <h1 className={`text-6xl font-semibold | mt-12`}>About</h1>
        </section>
        <section className={`${classes.about__reasons}`}>
          <p>Salt is an online recipe book used to store the ingredients and methods needed to make different dishes</p> <br/>
          <p>It sources from a variety of places, such as random Youtube tutorials, other online forums or just plain experimentation</p>
          <p>To keep this cookbook user friendly, I use <strong>Contentful</strong> to allow authorised users an easy way to add new recipes</p>
          <br/>
          <p className={`mb-4`}>Salt was created for 3 main reasons</p>
          <ol className={`ml-4`}>
            <li>
              <p>Aside from coding, cooking's my second biggest passion in life</p>
              <p>And I wanted a way that let me store all my recipes in a easy to read, easy to fill in format</p>
              <p>As a web developer, I figured I could just make that solution myself</p>
            </li>
            <li>
              <p>This was my first foray into using these specific technologies</p>
              <p>I'd never used Gatbsy, GraphQL or a CMS before but I always knew how useful they could be</p>
              <p>This small application helped kickstart me in the right direction into progressing these skills</p>
            </li>
            <li>
              <p>Coding's just fun, this is what I build in my spare time man</p>
            </li>
          </ol>
        </section>
      </section>
    </Layout>
  );
};

export default AboutPage;