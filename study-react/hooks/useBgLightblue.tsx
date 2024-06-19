import { useEffect } from "react";

export const useBgLightblue = () => {
  useEffect(() => {
    document.documentElement.style.backgroundColor = "lightblue";

    return () => {
      document.documentElement.style.backgroundColor = "";
    }
  }, [])
}