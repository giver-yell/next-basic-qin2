import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useCounter } from "@/hooks/useCounter";
import { useInputArray } from "@/hooks/useInputArray";
import { useBgColor } from "@/hooks/useBgColor";

export default function App({ Component, pageProps }: AppProps) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgColor();

  return <Component {...pageProps} {...counter} {...inputArray} />;
}
