import styles from "./Button.module.scss";

type ColorUnion = "red" | "blue" | "orange";

type Props = {
  color: ColorUnion;
  children?: string | JSX.Element;
  text?: string;
};

export const Button: React.FC<Props> = ({ children, text, color = "blue" }) => {
  return (
    <button className={styles.button} style={{ backgroundColor: color }}>
      {children ?? text}
    </button>
  );
};
