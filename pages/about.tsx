import { Inter } from "next/font/google";
import { Main } from "@/components/Main";
import Head from "next/head";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  count: number;
  doubleCount: number;
  isShow: boolean;
  handleClick: () => void;
  handleDisplay: () => void;
  text: string;
  array: string[];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAdd: () => void;
}

export default function About(props: HomeProps) {
  const {
    doubleCount,
    isShow,
    handleClick,
    handleDisplay,
    text,
    array,
    handleChange,
    handleAdd,
  } = props

  return (
    <>
      <Head>
          <title>About Page</title>
      </Head>
      <Header />

      {isShow ? <h1>{doubleCount}</h1> : null}
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
