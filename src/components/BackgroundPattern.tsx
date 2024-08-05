"use client";
import { useEffect, useRef } from "react";
import styles from "./BackgroundPattern.module.css";
export default function BackgroundPattern() {
  const patternRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const { height } = document.documentElement.getBoundingClientRect();
    if (patternRef.current) {
      patternRef.current.style.height = `${height}px`;
    }
    function resizeListener() {
      const { height } = document.documentElement.getBoundingClientRect();
      if (patternRef.current) {
        patternRef.current.style.height = `${height}px`;
      }
    }
    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  }, []);
  return <div ref={patternRef} className={styles.bgPattern} />;
}
