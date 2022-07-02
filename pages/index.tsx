import Head from "next/head";
import AsideBar from "../components/asidebar/AsideBar";
import Middle from "../components/middle/Middle";
import Right from "../components/right/Right";

const Home= () => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Responsive Dashboard</title>
  
      </Head>

        <Middle />
    </>
  );
};

export default Home;
