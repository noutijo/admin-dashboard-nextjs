import Head from "next/head";
import Middle from "@components/middle/Middle";

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
