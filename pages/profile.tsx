import { wrapper } from "app/store";
import { selectProfile } from "app/store/slices/profile";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
function Profile(props: any) {
  const profile = useSelector(selectProfile);

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>404 -Page Not Found</title>
      </Head>

      <div className="mt-8">
        <h2>This is the profile.</h2>
        <div>{props.resolvedUrl}</div>
        <div>{profile.name}</div>
        <Link href="/initstore">Go to Home</Link>
      </div>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ resolvedUrl }) => {
      return {
        props: {
          resolvedUrl,
        },
      };
    }
);

export default Profile;
