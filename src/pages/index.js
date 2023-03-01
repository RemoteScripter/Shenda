import Head from "next/head";
import HomePage from "../components/HomePage";

// import { Inter } from "@next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
