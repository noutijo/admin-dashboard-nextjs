import { wrapper } from "app/store";
import { selectProfile, setProfileData } from "app/store/slices/profile";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
function Profile(props: any) {
  const profile = useSelector(selectProfile);

  return (
    <>
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
