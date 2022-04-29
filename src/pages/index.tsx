import type { NextPage } from "next";
import Head from "next/head";
import * as Scroll from "react-scroll";

import About from "@/components/about/About";
import Top from "@/components/top/Top";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{"Ark's page"}</title>
        {/* TODO: header */}
        <meta name="description" content="Ark's portfolio website :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Scroll.Element name="top">
        <Top></Top>
      </Scroll.Element>
      <Scroll.Element name="about">
        <About></About>
      </Scroll.Element>
    </>
  );
};

export default Home;
