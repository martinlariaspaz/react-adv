import { ButtonProps } from '../interfaces/interfaces';
import styles from "../styles/styles.module.css";


export const Button = ({ increaseBy, content }: ButtonProps) => {
    return (
      <button
        className={content === "+" ? styles.buttonAdd : styles.buttonMinus}
        onClick={increaseBy}
      >
        {content}
      </button>
    );
  }