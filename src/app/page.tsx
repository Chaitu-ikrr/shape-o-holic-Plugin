"use client";
import ShapeCard from "@/components/ShapeCard";
import style from "./page.module.css";
import ShapeOHolicSvg from "@/components/ShapeOHolicSvg";
import FigmaIconSvg from "@/components/FigmaIconSvg";
import DownloadIconSvg from "@/components/DownloadIconSvg";
import shapes from "@/data/shapes";
import { useState } from "react";

export default function Home() {
  const [shapeType, setShapeType] = useState<"noise" | "solid">("noise");
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
      <div className={style.noiseSolidButtons}>
        <div className={style.line1} />
        <div className={style.buttonsContainer}>
          <button
            className={`${style.button} ${shapeType == "noise" ? style.buttonSelected : ""}`}
            style={{ color: shapeType == "noise" ? "white" : undefined }}
            onClick={() => setShapeType("noise")}
          >
            Noise
          </button>
          <button
            className={`${style.button} ${shapeType == "solid" ? style.buttonSelected : ""}`}
            style={{ color: shapeType == "solid" ? "white" : undefined }}
            onClick={() => setShapeType("solid")}
          >
            Solid
          </button>
        </div>
        <div className={style.line2} />
      </div>
      <div className={style.shapesContainer}>
        {shapes.map((name) => {
          return <ShapeCard key={name} name={name} type={shapeType} />;
        })}
      </div>
    </main>
  );
}
