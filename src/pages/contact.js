import React from "react"
import Layout from "../components/base/layout/layout";
import Head from "../components/base/head/head"
import * as classes from "./about.module.scss";

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact"/>
      <section className={`flex flex-col gap-12`}>
        <section className={`border-b-2 border-gray-400`}>
          <h1 className={`text-6xl font-semibold | mt-12`}>Contact</h1>
        </section>
        <section>
          <h2>Hi there, my name's Jason!</h2>
          <p>I'm the proud developer of Salt, the online recipe book we're on right now</p>
          <br/>
          <p>In the daytime, I'm a web developer, building applications for data analytics and data storage</p>
          <p>But in my spare time, I like to experiment with more silly apps, and try out different technologies and styles</p>
          <br/>
          <p>To see my other projects, feel free to visit my <a className={`text-blue-400 hover:text-blue-600`} href="https://github.com/stars/jason469/lists/personal-projects" target="_blank">Github Profile</a></p>
          <p>Otherwise, you can also head over to my <a className={`text-blue-400 hover:text-blue-600`} href="https://jasonliu.onrender.com/" target="_blank">personal website</a> and get a more detailed overview of my skills and experiences</p>
        </section>
      </section>
    </Layout>
  )
};

export default ContactPage;
