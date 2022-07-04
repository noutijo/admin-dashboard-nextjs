import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "@app/store";


const profileSlice = createSlice({
    name: "profile",
    initialState: {
        name: null
    },
    reducers: {
        setProfileData: (state, action) => {
            state.name = action.payload;
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {

            //TODO, handle client side state override
            if (!action.payload.profile.name) {
                return state;
            }

            state.name = action.payload.profile.name;
            console.log(state.name);
        }
    }
});

export const { setProfileData } = profileSlice.actions;

export const selectProfile = (state: AppState) => state.profile;

export default profileSlice.reducer;

//01

import { wrapper } from "app/store";
import { selectProfile, setProfileData } from "@app/store/slices/profile";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

//JUST FOR REDUX TEST

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

//02

import { wrapper } from "@app/store";
import { selectProfile } from "@app/store/slices/profile";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

//JUST FOR REDUX TEST


function Profile(props: any) {
    const profile = useSelector(selectProfile);

    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Profile</title>
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
