import { Inter } from "next/font/google";
import { Main } from "@/components/Main";
import Head from "next/head";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Head>
          <title>About Page</title>
      </Head>
      <Header />
      <Main page="about" />
   </>
  );
}
