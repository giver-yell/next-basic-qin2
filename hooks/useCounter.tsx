import { useCallback, useMemo, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const doubleCount = useMemo(() => count * 2, [count]);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount(count => count + 1);
    }
  }, [count])


  const handleDisplay = useCallback(() => {
    setIsShow(isShow => !isShow);
  }, [])

  return { count, doubleCount, isShow, handleClick, handleDisplay };
}