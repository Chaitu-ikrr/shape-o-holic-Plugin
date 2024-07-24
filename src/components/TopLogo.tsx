"use client";
import "./TopLogo.css";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function TopLogo() {
  const e1 = useRef<SVGEllipseElement>(null);
  const e2 = useRef<SVGEllipseElement>(null);
  const e3 = useRef<SVGEllipseElement>(null);
  const e4 = useRef<SVGEllipseElement>(null);

  useGSAP(() => {
    const t1 = gsap.timeline();
    t1.to(e1.current, {
      cy: 128,
      duration: 0.8,
      delay: 0.1,
      ease: "back.out",
    }).repeat(-1);
    t1.to(e1.current, { cy: 67, ease: "back.out" }).repeat(-1);

    const t3 = gsap.timeline();
    t3.to(e3.current, {
      cx: 191.898,
      cy: 51.257,
      duration: 0.8,
      delay: 0.1,
      ease: "back.out",
    }).repeat(-1);
    t3.to(e3.current, {
      cx: 22.6177,
      cy: 70.5452,
      ease: "back.out",
    }).repeat(-1);

    const t2 = gsap.timeline();
    t2.to(e2.current, {
      cx: 192.26,
      cy: 27.1829,
      duration: 0.8,
      delay: 0.1,
      ease: "back.out",
    }).repeat(-1);
    t2.to(e2.current, {
      cx: 35.4111,
      cy: 158.042,
      ease: "back.out",
    }).repeat(-1);

    const t4 = gsap.timeline();
    t4.to(e2.current, {
      cx: 91.8105,
      cy: 20.5421,
      duration: 0.8,
      delay: 0.1,
      ease: "back.out",
    }).repeat(-1);
    t4.to(e2.current, {
      cx: 63.062,
      cy: 148.027,
      ease: "back.out",
    }).repeat(-1);
  });

  return (
    <div className="logo-container">
      <svg
        className="svg-logo"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Union"
          d="M72.9577 0H106.301C141.347 0 143.023 0.0510094 149.282 1.30536C161.401 3.73414 172.405 9.73073 181.44 18.8286C191.722 29.1828 197.937 42.0724 199.758 56.8228C200.247 60.7834 199.955 71.0293 199.238 75.1024C197.806 83.2268 194.993 90.8116 190.882 97.6317C182.377 111.739 168.088 122.426 152.396 126.415C152.058 126.501 151.741 126.582 151.439 126.66L151.438 126.66C150.461 126.912 149.644 127.122 148.82 127.298C144.622 128.195 140.238 128.208 113.512 128.284L108.384 128.299H100.028V128.54C100.013 128.459 99.9973 128.379 99.9814 128.299H99.9719V128.251C98.5191 120.949 94.8039 114.515 91.1738 111.126C86.5393 105.858 80.5159 102.031 73.8076 100.093C67.0994 98.1539 59.9834 98.1835 53.2912 100.178C46.599 102.173 40.607 106.05 36.0156 111.356C31.4241 116.662 28.4229 123.179 27.3625 130.144C26.3022 137.109 27.2265 144.236 30.0275 150.69C32.8286 157.144 37.3906 162.66 43.1804 166.593C48.9703 170.526 55.7489 172.713 62.7239 172.899L101.278 172.781L100.567 133.562L100.597 133.626H127.042V200H93.6991C58.6535 200 56.9774 199.949 50.7177 198.695C38.5992 196.266 27.5947 190.269 18.5598 181.171C8.27758 170.817 2.0633 157.928 0.241901 143.177C-0.246922 139.217 0.0446112 128.971 0.762122 124.898C2.19377 116.773 5.00682 109.188 9.11826 102.368C17.6226 88.2609 31.9124 77.5737 47.6044 73.5851C47.9417 73.4993 48.2589 73.4177 48.5607 73.3401L48.5624 73.3396C49.5391 73.0883 50.3561 72.878 51.1798 72.702C55.378 71.8046 59.7616 71.7922 86.4876 71.7161L91.6159 71.7013H99.9719V71.4626C99.987 71.5422 100.002 71.6218 100.018 71.7013H100.028V71.7517C101.481 79.0529 105.196 85.4864 108.826 88.8744C113.46 94.1424 119.484 97.9694 126.192 99.9081C132.9 101.847 140.016 101.817 146.709 99.8228C153.401 97.8283 159.393 93.9513 163.984 88.6449C168.576 83.3385 171.577 76.8219 172.637 69.8566C173.698 62.8914 172.773 55.7651 169.972 49.3108C167.171 42.8564 162.609 37.3405 156.819 33.4077C151.029 29.4749 144.251 27.2876 137.276 27.1015L98.7216 27.2199L99.4485 67.3153C99.4538 67.4017 99.4594 67.4879 99.4654 67.5741H72.9577V0Z"
          fill="white"
        />
      </svg>
      <svg
        className="svg-mask"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Mask group">
          <mask
            id="mask0_4520_19270"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="200"
            height="200"
          >
            <path
              id="Union"
              d="M72.9577 0H106.301C141.347 0 143.023 0.0510094 149.282 1.30536C161.401 3.73414 172.405 9.73073 181.44 18.8286C191.722 29.1828 197.937 42.0724 199.758 56.8228C200.247 60.7834 199.955 71.0293 199.238 75.1024C197.806 83.2268 194.993 90.8116 190.882 97.6317C182.377 111.739 168.088 122.426 152.396 126.415C152.058 126.501 151.741 126.582 151.439 126.66L151.438 126.66C150.461 126.912 149.644 127.122 148.82 127.298C144.622 128.195 140.238 128.208 113.512 128.284L108.384 128.299H100.028V128.54C100.013 128.459 99.9973 128.379 99.9814 128.299H99.9719V128.251C98.5191 120.949 94.8039 114.515 91.1738 111.126C86.5393 105.858 80.5159 102.031 73.8076 100.093C67.0994 98.1539 59.9834 98.1835 53.2912 100.178C46.599 102.173 40.607 106.05 36.0156 111.356C31.4241 116.662 28.4229 123.179 27.3625 130.144C26.3022 137.109 27.2265 144.236 30.0275 150.69C32.8286 157.144 37.3906 162.66 43.1804 166.593C48.9703 170.526 55.7489 172.713 62.7239 172.899L101.278 172.781L100.567 133.562L100.597 133.626H127.042V200H93.6991C58.6535 200 56.9774 199.949 50.7177 198.695C38.5992 196.266 27.5947 190.269 18.5598 181.171C8.27758 170.817 2.0633 157.928 0.241901 143.177C-0.246922 139.217 0.0446112 128.971 0.762122 124.898C2.19377 116.773 5.00682 109.188 9.11826 102.368C17.6226 88.2609 31.9124 77.5737 47.6044 73.5851C47.9417 73.4993 48.2589 73.4177 48.5607 73.3401L48.5624 73.3396C49.5391 73.0883 50.3561 72.878 51.1798 72.702C55.378 71.8046 59.7616 71.7922 86.4876 71.7161L91.6159 71.7013H99.9719V71.4626C99.987 71.5422 100.002 71.6218 100.018 71.7013H100.028V71.7517C101.481 79.0529 105.196 85.4864 108.826 88.8744C113.46 94.1424 119.484 97.9694 126.192 99.9081C132.9 101.847 140.016 101.817 146.709 99.8228C153.401 97.8283 159.393 93.9513 163.984 88.6449C168.576 83.3385 171.577 76.8219 172.637 69.8566C173.698 62.8914 172.773 55.7651 169.972 49.3108C167.171 42.8564 162.609 37.3405 156.819 33.4077C151.029 29.4749 144.251 27.2876 137.276 27.1015L98.7216 27.2199L99.4485 67.3153C99.4538 67.4017 99.4594 67.4879 99.4654 67.5741H72.9577V0Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_4520_19270)">
            {/* <g id="ellipse-1"> */}
            <g id="ellipse-1" filter="url(#filter0_f_4520_19270)">
              <ellipse
                ref={e1}
                cx="105.736"
                cy="67.5462"
                rx="78.32"
                ry="78.76"
                transform="rotate(-89.369 105.736 67.5462)"
                fill="#BFBBFF"
              />
            </g>
            <g id="ellipse-2" filter="url(#filter3_f_4520_19270)">
              <ellipse
                ref={e2}
                cx="192.26"
                cy="27.1829"
                rx="78.32"
                ry="78.76"
                transform="rotate(-89.369 192.26 27.1829)"
                fill="#CDA5FF"
              />
            </g>
            <g id="ellipse-3" filter="url(#filter1_f_4520_19270)">
              <ellipse
                ref={e3}
                cx="22.6177"
                cy="70.5452"
                rx="78.32"
                ry="78.76"
                transform="rotate(-89.369 22.6177 70.5452)"
                fill="#CC81F4"
              />
            </g>
            <g id="ellipse-4" filter="url(#filter2_f_4520_19270)">
              <ellipse
                ref={e4}
                cx="63.062"
                cy="148.027"
                rx="78.32"
                ry="78.76"
                transform="rotate(-89.369 63.062 148.027)"
                fill="#F8C3F9"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_4520_19270"
            x="-29.0237"
            y="-66.7739"
            width="269.52"
            height="268.64"
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
              stdDeviation="28"
              result="effect1_foregroundBlur_4520_19270"
            />
          </filter>
          <filter
            id="filter1_f_4520_19270"
            x="-112.142"
            y="-63.7749"
            width="269.52"
            height="268.64"
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
              stdDeviation="28"
              result="effect1_foregroundBlur_4520_19270"
            />
          </filter>
          <filter
            id="filter2_f_4520_19270"
            x="-71.698"
            y="13.7065"
            width="269.52"
            height="268.64"
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
              stdDeviation="28"
              result="effect1_foregroundBlur_4520_19270"
            />
          </filter>
          <filter
            id="filter3_f_4520_19270"
            x="57.5002"
            y="-107.137"
            width="269.52"
            height="268.64"
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
              stdDeviation="28"
              result="effect1_foregroundBlur_4520_19270"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
