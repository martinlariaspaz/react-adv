import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { Button } from "./Buttons";
import { CounterLabel } from "./CounterLabel";
import { ProductContext } from "./ProductCard";


export const ProductButtons = () => {
    const { increaseBy } = useContext(ProductContext);
    return (
      <div className={styles.buttonsContainer}>
        <Button increaseBy={() => increaseBy(-1)} content="-" />
        <CounterLabel />
        <Button increaseBy={() => increaseBy(+1)} content="+" />
      </div>
    );
  };
  