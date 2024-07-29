import localFont from "next/font/local";
import style from "./page.module.css";
import ShapeOHolic from "@/components/ShapeOHolic";

const chamchunk = localFont({
  src: "../fonts/chamchunk-400.otf",
  display: "swap",
});

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.titleContainer}>
        <ShapeOHolic />
      </div>
    </main>
  );
}
