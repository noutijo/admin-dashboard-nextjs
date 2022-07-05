import Head from "next/head";
import Middle from "@components/middle/Middle";

export default function Home() {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dashboard</title>
      </Head>
      <Middle />
    </>
  );
}
