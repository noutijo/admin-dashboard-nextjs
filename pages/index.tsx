import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AsideBar from "../components/asidebar/AsideBar";
import Middle from "../components/middle/Middle";
import Right from "../components/right/Right";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Responsive Dashboard</title>
  
      </Head>

      <div className="grid lg:grid-cols-[14rem_auto_23rem] sm:grid-cols-[1fr] w-[96%] sm:w-[100%] md:w-[94%] md:grid-cols-[7rem_auto_23rem] gap-7 m-[0_auto] sm:mt-[8rem] md:mt-[inherit] sm:p-[0_1rem] md:p-[inherit]">
        <AsideBar />
        <Middle />
        <Right />
      </div>
    </>
  );
};

export default Home;
