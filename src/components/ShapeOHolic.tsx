import styles from "./ShapeOHolic.module.css";
import localFont from "next/font/local";

const chamchunk = localFont({
  src: "../fonts/chamchunk-400.otf",
  display: "swap",
});

export default function ShapeOHolic() {
  return (
    <div className={styles.titleContainer}>
      <h1
        className={
          chamchunk.className + " " + styles.text + " " + styles.shapeText
        }
      >
        Shape
      </h1>
      <h1
        className={
          chamchunk.className + " " + styles.text + " " + styles.holicText
        }
      >
        Holic
      </h1>
    </div>
  );
}
