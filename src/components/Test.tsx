"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

export default function Test() {
  const boxRef = useRef(null);
  useGSAP(() => {
    gsap.to(boxRef.current, { x: 400 });
  });
  return (
    <div
      ref={boxRef}
      className="test"
      style={{ width: 200, height: 200, background: "red" }}
    />
  );
}
