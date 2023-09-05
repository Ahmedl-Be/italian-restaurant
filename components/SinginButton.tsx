"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const SigninButton = () => {
    const { data: session } = useSession();

    if (session && session.user) {
        // console.log(session.user)
        return (
            <div className="flex items-center gap-4 border 
            py-2 px-5 rounded bg-white">
                <img src={session.user.image}
                className="rounded w-12 "/>
                <p className="m-1 hidden md:block">{session.user.name}</p>
                <button onClick={() => signOut()} className="border px-2
                hover:bg-orange-300 rounded
                ">
                    Sign Out
                </button>
            </div>
        );
    }
    return (
        <button onClick={() => signIn()} className="border p-2 rounded px-5
        hover:bg-orange-300
        ">
            Sign In
        </button>
    );
};

export default SigninButton;