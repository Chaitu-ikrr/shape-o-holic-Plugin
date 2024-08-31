"use client";
import "./Header.css";
import TopLogo from "@/components/TopLogo";
import { LinkedinShareButton } from "react-share";

export default function Header() {
  return (
    <nav>
      <TopLogo className="animate" />
      <div className="right">
        <div className="join-us">
          <a href="https://forms.gle/GpbYPwA9dR5n3tgV9" target="_blank">
            Join us
          </a>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="arrow-left-up-svgrepo-com 1">
              <path
                id="Vector"
                d="M14.3333 2.9C14.7567 2.9 15.1 3.24325 15.1 3.66667V11.6667C15.1 12.0901 14.7567 12.4334 14.3333 12.4334C13.9099 12.4334 13.5667 12.0901 13.5667 11.6667V5.51757L4.20874 14.8754C3.90933 15.1749 3.42397 15.1749 3.12456 14.8754C2.82515 14.576 2.82515 14.0907 3.12456 13.7913L12.4824 4.43334H6.33332C5.90991 4.43334 5.56665 4.09008 5.56665 3.66667C5.56665 3.24325 5.90991 2.9 6.33332 2.9H14.3333Z"
                fill="white"
                stroke="white"
                strokeWidth="0.2"
              />
            </g>
          </svg>
        </div>
        <LinkedinShareButton
          title="Your design game changer is here! 💥 Discover 140+ stunning, customizable shapes for FREE. Don't miss out! [Website Link] By- @Design Duh!"
          summary="Your design game changer is here! 💥 Discover 140+ stunning, customizable shapes for FREE. Don't miss out! [Website Link] By- @Design Duh!"
          style={{ padding: "8px 16px", border: "1px solid #bc67ff" }}
          url="https://shape-o-holic.vercel.app/"
          className="header-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g filter="url(#filter0_i_4553_16805)">
              <g clipPath="url(#clip0_4553_16805)">
                <rect width="24" height="24" rx="12" fill="white" />
                <path
                  d="M12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24C18.6281 24 24 18.6281 24 12C24 5.37188 18.6281 0 12 0ZM8.64375 17.0203H6.30469V9.53437H8.64375V17.0203ZM7.41094 8.59687H7.39219C6.54375 8.59687 5.99531 8.025 5.99531 7.29844C5.99531 6.55781 6.5625 6 7.425 6C8.2875 6 8.81719 6.55781 8.83594 7.29844C8.84062 8.02031 8.29219 8.59687 7.41094 8.59687ZM18 17.0203H15.3469V13.1484C15.3469 12.1359 14.9344 11.4422 14.0203 11.4422C13.3219 11.4422 12.9328 11.9109 12.7547 12.3609C12.6891 12.5203 12.6984 12.7453 12.6984 12.975V17.0203H10.0688C10.0688 17.0203 10.1016 10.1578 10.0688 9.53437H12.6984V10.7109C12.8531 10.1953 13.6922 9.46406 15.0328 9.46406C16.6969 9.46406 18 10.5422 18 12.8578V17.0203Z"
                  fill="url(#paint0_diamond_4553_16805)"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_i_4553_16805"
                x="0"
                y="0"
                width="26"
                height="26"
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
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.72549 0 0 0 0 0.380392 0 0 0 0 1 0 0 0 0.12 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_4553_16805"
                />
              </filter>
              <radialGradient
                id="paint0_diamond_4553_16805"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(12 12) rotate(14.0362) scale(18.554)"
              >
                <stop stopColor="#BC67FF" />
                <stop offset="1" stopColor="#401868" />
              </radialGradient>
              <clipPath id="clip0_4553_16805">
                <rect width="24" height="24" rx="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span>Post</span>
        </LinkedinShareButton>
      </div>
    </nav>
  );
}
