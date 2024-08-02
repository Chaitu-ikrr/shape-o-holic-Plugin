import style from "./page.module.css";
import ShapeOHolicSvg from "@/components/ShapeOHolicSvg";

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.titleContainer}>
        <ShapeOHolicSvg />
      </div>
    </main>
  );
}
