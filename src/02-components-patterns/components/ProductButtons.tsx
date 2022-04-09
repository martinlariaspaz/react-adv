import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { Button } from "./Buttons";
import { CounterLabel } from "./CounterLabel";
import { ProductContext } from "./ProductCard";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className,style }: Props) => {
  const { increaseBy } = useContext(ProductContext);
  return (
    <div 
      className={`${styles.buttonsContainer} ${className}`}
      style={style}
    >
      <Button increaseBy={() => increaseBy(-1)} content="-" />
      <CounterLabel />
      <Button increaseBy={() => increaseBy(+1)} content="+" />
    </div>
  );
};
