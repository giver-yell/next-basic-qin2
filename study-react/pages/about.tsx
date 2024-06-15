import { Inter } from "next/font/google";
import { Main } from "@/components/Main";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Head>
          <title>About Page</title>
      </Head>
    <Main page="about" />
   </>
  );
}
