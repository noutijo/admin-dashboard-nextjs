import { wrapper } from "app/store";
import { selectProfile, setProfileData } from "app/store/slices/profile";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Initstore(props:any) {
  const profile = useSelector(selectProfile);
 
  return (
    <>
      <h2>This is the profile.</h2>
      <div>{props.resolvedUrl}</div>
      <div>{profile.name}</div>
      <Link href="/profile">Go to Profile</Link>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ resolvedUrl }) => {

      console.log(resolvedUrl);

      store.dispatch(setProfileData('My Server Name'));
      return {
        props: {
          resolvedUrl
        },
      };
    }
);

export default Initstore;
