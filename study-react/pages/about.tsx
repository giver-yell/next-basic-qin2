import { Inter } from "next/font/google";
import { Main } from "@/components/Main";
import Head from "next/head";
import { Header } from "@/components/Header";
import { useCounter } from "@/hooks/useCounter";
import { useInputArray } from "@/hooks/useInputArray";
import { useBgLightblue } from "@/hooks/useBgLightblue";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgLightblue();

  return (
    <>
      <Head>
          <title>About Page</title>
      </Head>
      <Header />

      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>
        {isShow ? "非表示" : "表示"}
      </button>

      <input type="text" value={text} onChange={handleChange} />
      <ul>
        {array.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <button onClick={handleAdd}>追加</button>

      <Main page="about" />
   </>
  );
}
