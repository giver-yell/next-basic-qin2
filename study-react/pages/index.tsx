import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState(10);

  const handleClick = () => {
    setCount(count => count + 1);
    setCount(count => count + 1);
  };

  useEffect(() => {
    // console.log("mounted")
    document.documentElement.style.backgroundColor = "lightblue";

    return () => {
      // console.log("unmounted")
      document.documentElement.style.backgroundColor = "";
    }
  }, []);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />
    </>
  );
}
