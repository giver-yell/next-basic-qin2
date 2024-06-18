import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useCallback, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState<string[]>([]);

  // const handleClick = () => {
  //   setCount(count => count + 1);
  //   setCount(count => count + 1);
  // };

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount(count => count + 1);
    }
  }, [count])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 5) {
      alert("5文字以内で入力してください");
      return;
    }
    setText(e.target.value.trim());
  }, [])

  const handleDisplay = useCallback(() => {
    setIsShow(isShow => !isShow);
  }, [])

  const handleAdd = useCallback(() => {
    setArray(array => [...array, text]);
  }
  , [text])

  // 第二引数が変更されるたびに実行される
  useEffect(() => {
    console.log("mounted")
    document.documentElement.style.backgroundColor = "lightblue";

    return () => {
      // console.log("unmounted")
      document.documentElement.style.backgroundColor = "";
    }
  }, [count]);

  return (
    <>
      <Head>
        <title>Index Page</title>
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
      <Main page="index" />
    </>
  );
}
