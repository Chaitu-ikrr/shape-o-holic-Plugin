"use client";
import { useEffect, useRef } from "react";
import styles from "./FollowCursorGlow.module.css";
export default function FollowCursorGlow() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    function mouseMoveListener(ev: MouseEvent) {
      const { screenX, screenY } = ev;
      const { current } = svgRef;
      if (current) {
        current.style.top = `${screenY + window.scrollY}px`;
        current.style.left = `${screenX + window.scrollX}px`;
      }
    }
    window.addEventListener("mousemove", mouseMoveListener);
    return () => window.removeEventListener("mousemove", mouseMoveListener);
  }, []);

  return (
    <svg
      ref={svgRef}
      className={styles.glow}
      xmlns="http://www.w3.org/2000/svg"
      width="580"
      height="580"
      viewBox="0 0 580 580"
      fill="none"
    >
      <g filter="url(#filter0_f_4520_18982)">
        <circle
          cx="290"
          cy="290"
          r="50"
          fill="url(#paint0_linear_4520_18982)"
          fillOpacity="0.3"
        />
      </g>
      <g filter="url(#filter1_f_4520_18982)">
        <circle
          cx="290"
          cy="290"
          r="25"
          fill="url(#paint1_linear_4520_18982)"
          fillOpacity="0.35"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_4520_18982"
          x="0"
          y="0"
          width="580"
          height="580"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="120"
            result="effect1_foregroundBlur_4520_18982"
          />
        </filter>
        <filter
          id="filter1_f_4520_18982"
          x="145"
          y="145"
          width="290"
          height="290"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="60"
            result="effect1_foregroundBlur_4520_18982"
          />
        </filter>
        <linearGradient
          id="paint0_linear_4520_18982"
          x1="240"
          y1="290"
          x2="340"
          y2="290"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC81F4" />
          <stop offset="0.33" stopColor="#F8C3F9" />
          <stop offset="0.6" stopColor="#D6B5FC" />
          <stop offset="1" stopColor="#AEA5FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4520_18982"
          x1="265"
          y1="290"
          x2="315"
          y2="290"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC81F4" />
          <stop offset="0.355" stopColor="#F8C3F9" />
          <stop offset="0.67" stopColor="#D6B5FC" />
          <stop offset="1" stopColor="#AEA5FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
