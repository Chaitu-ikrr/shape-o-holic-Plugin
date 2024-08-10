"use client";
import { useEffect, useRef } from "react";
import styles from "./FollowCursorGlow.module.css";
export default function FollowCursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function mouseMoveListener(ev: MouseEvent) {
      const { screenX, screenY } = ev;
      const { current } = glowRef;
      if (current) {
        current.style.top = `${screenY + window.scrollY}px`;
        current.style.left = `${screenX + window.scrollX}px`;
      }
    }
    window.addEventListener("mousemove", mouseMoveListener);
    return () => window.removeEventListener("mousemove", mouseMoveListener);
  }, []);

  return (
    <div ref={glowRef} className={styles.glow}>
      <div className={styles.outerCircle} />
      <div className={styles.innerCircle} />
    </div>
  );
}
