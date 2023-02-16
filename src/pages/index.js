import Head from "next/head";
import HomePage from "../components/HomePage";

import { useCallback, useEffect, useState } from "react";
import Parse from "../services/parse";
// import LayoutPage from "../components/LayoutPage";
// import { Inter } from "@next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [currentUser, setCurrentUser] = useState();

  // Function that will return current user and also update current username
  const getCurrentUser = useCallback(async () => {
    try {
      // Update state variable holding current user
      const session = await Parse.User.current();
      console.log("session is: " + session);
      setCurrentUser(session);
    } catch (e) {
      console.log("ERROR!", e.message);
    }
  }, []);

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      <Head>
        <title>Shenda</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen">
        <HomePage />
      </main>
    </>
  );
}

// console.log("session aUTH: " + session.authenticated);
// console.log("session getSessionToken: " + session.getSessionToken);
// console.log("curentUSer: " + currentUser);
