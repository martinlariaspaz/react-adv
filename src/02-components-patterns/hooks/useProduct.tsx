import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product,
  value?: number,
  onChange: ( args: onChangeArgs ) => void
}

export const useProduct = ({product,onChange,value = 0}:useProductArgs) => {
  const [counter, setCounter] = useState<number>(value);
  const isControlled = useRef(!!onChange);
  const increaseBy = (value: number): void => {
    console.log(isControlled.current);
    if(isControlled.current && onChange){
      return onChange({count:value,product});
    }
    const newValue = Math.max(counter + value, 0);
    setCounter((prev: number) => Math.max(prev + value, 0));
    onChange && onChange({product,count:newValue});
  };

  useEffect(() => setCounter(value),[value])

  return {counter, increaseBy};
};
