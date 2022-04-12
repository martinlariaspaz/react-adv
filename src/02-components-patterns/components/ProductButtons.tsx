import { useCallback, useContext } from "react";
import styles from "../styles/styles.module.css";
import { Button } from "./Buttons";
import { CounterLabel } from "./CounterLabel";
import { ProductContext } from "./ProductCard";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className,style }: Props) => {
  const { increaseBy,counter,initialValues } = useContext(ProductContext);
  const isMaxReached = useCallback(
    () => !!initialValues?.maxCount && counter === initialValues?.maxCount,
    [initialValues,counter],
  )
  const isMinReached = useCallback(
    () => !!initialValues?.maxCount && counter === initialValues?.minCount,
    [initialValues,counter],
  )
  return (
    <div 
      className={`${styles.buttonsContainer} ${className}`}
      style={style}
    >
      <Button increaseBy={() => isMinReached() || increaseBy(-1) } content="-" className={`${isMinReached() && 'min-disabled'}`}/>
      <CounterLabel />
      <Button increaseBy={() => isMaxReached() || increaseBy(+1)} content="+" className={`${isMaxReached() && 'max-disabled'}`}/>
    </div>
  );
};
