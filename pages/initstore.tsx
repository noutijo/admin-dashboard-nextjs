import { wrapper } from "app/store";
import { selectProfile, setProfileData } from "app/store/slices/profile";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function Initstore(props: any) {
  const profile = useSelector(selectProfile);

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Init Store</title>
      </Head>

      <div className="mt-8">
        <h2>This is the profile.</h2>
        <div>{props.resolvedUrl}</div>
        <div>{profile.name}</div>
        <Link href="/profile">Go to Profile</Link>
      </div>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ resolvedUrl }) => {
      console.log(resolvedUrl);

      store.dispatch(setProfileData("My Server Name"));
      return {
        props: {
          resolvedUrl,
        },
      };
    }
);

export default Initstore;
