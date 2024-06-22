import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

export const useBgColor = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    switch (router.pathname) {
      case "/":
        return "lightblue";
      case "/about":
        return "beige";
      default:
        return "";
    }
    // return router.pathname === "/" ? "lightblue" : "beige";
  }, [router.pathname])

  useEffect(() => {
    document.documentElement.style.backgroundColor = bgColor;

    return () => {
      document.documentElement.style.backgroundColor = "";
    }
  }, [bgColor])
}