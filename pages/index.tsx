import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AsideBar from "../components/asidebar/AsideBar";
import Main from "../components/main/Main";
import Right from "../components/right/Right";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Responsive Dashboard</title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp"
          rel="stylesheet"
        />
      </Head>

      <div className="grid lg:grid-cols-[14rem_auto_23rem] w-[96%] gap-7 m-[0_auto]">
       <AsideBar />
       <Main />
       <Right />
      </div>
    </>
  );
};

export default Home;
