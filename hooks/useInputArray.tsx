import { useState, useCallback } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState<string[]>([]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 5) {
      alert("5文字以内で入力してください");
      return;
    }
    setText(e.target.value.trim());
  }, [])

  const handleAdd = useCallback(() => {
    setArray(array => [...array, text]);
  }
  , [text])

  return { text, array, handleChange, handleAdd };
}