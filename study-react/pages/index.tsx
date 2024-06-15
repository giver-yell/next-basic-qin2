import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "@/components/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Main page="index" />
    </>
  );
}
