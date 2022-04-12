import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product,
  value?: number,
  onChange: ( args: onChangeArgs ) => void
  initialValues?: InitialValues
}

export const useProduct = ({product,onChange,value = 0,initialValues}:useProductArgs) => {
  const isMounted = useRef(false);
  const [counter, setCounter] = useState<number>(initialValues?.count || 0);
  const increaseBy = (value: number): void => {
    const newValue = Math.max(counter + value, 0);
    setCounter((prev: number) => {
      return prev + value <= 0 
      ? 0 
      : prev + value >= (initialValues?.maxCount || Infinity)
      ? (initialValues?.maxCount || Infinity)
      : prev + value
    });
    onChange && onChange({product,count:newValue});
  };
  const reset = () => setCounter(initialValues?.count || 0)
  useEffect(() => {
    if(!isMounted.current) return;
    setCounter(value)
  },[value])

  useEffect(() => {
    isMounted.current = true;
  },[])
  return {
    counter, 
    initialValues,
    isMaxCountReached: !!initialValues?.maxCount && counter === initialValues.maxCount,
    isMinCountReached: counter === initialValues?.minCount,
    reset,
    increaseBy
  }
}