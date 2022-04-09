import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const CounterLabel = () => {
    const {counter} = useContext(ProductContext);
    return <div className={styles.countLabel}>{counter}</div>;
  };