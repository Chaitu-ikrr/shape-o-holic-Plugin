import ShapeCard from "@/components/ShapeCard";
import style from "./page.module.css";
import ShapeOHolicSvg from "@/components/ShapeOHolicSvg";
import FigmaIconSvg from "@/components/FigmaIconSvg";
import DownloadIconSvg from "@/components/DownloadIconSvg";
import shapes from "@/data/shapes";

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.titleContainer}>
        <ShapeOHolicSvg />
      </div>
      <div className={style.subtext}>
        <div className={style.bright}>
          Elevate your designs with 140+ free, customizable SVG shapes.
        </div>
        <div className={style.dim}>
          Seamlessly integrate these high-quality vectors for professional
          results.
        </div>
      </div>
      <div className={style.buttonContainer}>
        <button className={style.figmaButton}>
          <FigmaIconSvg />
          Figma file
        </button>
        <button className={style.downloadButton}>
          <DownloadIconSvg />
          Download all
        </button>
      </div>
      <div className={style.shapesContainer}>
        {shapes.map((name) => {
          return <ShapeCard key={name} name={name} type="noise" />;
        })}
      </div>
    </main>
  );
}
