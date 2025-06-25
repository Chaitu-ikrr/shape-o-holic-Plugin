"use client";
import { DynamicAnimationOptions, useAnimate } from "framer-motion";
import styles from "./ShapeCard.module.css";
import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from "react";
import Image from "next/image";

const transition: DynamicAnimationOptions = {
  ease: "easeInOut",
  duration: 0.25,
};

export default function ShapeCard({
  name,
  type,
}: {
  name: string;
  type: "noise" | "solid";
}) {
  const [scope, animate] = useAnimate();
  const [copyMessage, setCopyMessage] = useState<string | undefined>();
  const [downloadSVGLoading, setDownloadSVGLoading] = useState(false);
  const [downloadPNGLoading, setDownloadPNGLoading] = useState(false);
  const [copySVGLoading, setCopySVGLoading] = useState(false);
  const [copyPNGLoading, setCopyPNGLoading] = useState(false);

  function onMouseEnter() {
    animate(
      "#on-hover",
      {
        display: "block",
        opacity: 1,
        background: "rgba(16, 0, 30, 0.45)",
        backdropFilter: "blur(6px)",
        border: "1px solid #AB4EFF",
      },
      transition,
    );
    animate("#topButtons", {
      transform: "translateY(0px)",
    });
    animate("#bottomButtons", {
      transform: "translateY(0px)",
    });
  }

  async function onMouseLeave() {
    animate(
      "#on-hover",
      {
        display: "none",
        opacity: 0,
      },
      transition,
    );
    animate("#topButtons", {
      transform: "translateY(-120px)",
    });
    animate("#bottomButtons", {
      transform: "translateY(120px)",
    });
  }

  function handleDownload(extension: "png" | "svg") {
    return async () => {
      try {
        extension == "png"
          ? setDownloadPNGLoading(true)
          : setDownloadSVGLoading(true);
        const res = await fetch(`/shapes/${type}/${name}.${extension}`);
        // Create a temporary anchor element to trigger the download
        if (!res.ok) throw new Error();
        extension == "png"
          ? setDownloadPNGLoading(false)
          : setDownloadSVGLoading(false);
        const url = window.URL.createObjectURL(await res.blob());
        const link = document.createElement("a");
        link.href = url;
        // Setting filename received in response
        link.setAttribute("download", `${name}.${extension}`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        extension == "png"
          ? setDownloadPNGLoading(false)
          : setDownloadSVGLoading(false);
      }
    };
  }
  function handleCopy(extension: "png" | "svg") {
    return async () => {
      try {
        extension == "png" ? setCopyPNGLoading(true) : setCopySVGLoading(true);
        const res = await fetch(`/shapes/${type}/${name}.${extension}`);
        if (!res.ok) throw new Error();
        if (extension == "svg") {
          const image = await res.text();
          await navigator.clipboard.writeText(image);
        } else {
          const image = await res.blob();
          const mimeType = "image/png";
          const blob = new Blob([image], { type: mimeType });
          const data = [new ClipboardItem({ [mimeType]: blob })];
          await navigator.clipboard.write(data);
        }
        extension == "png"
          ? setCopyPNGLoading(false)
          : setCopySVGLoading(false);
        setCopyMessage(`${extension.toUpperCase()} Copied!`);
        setTimeout(() => {
          setCopyMessage(undefined);
        }, 1200);
      } catch (error) {
        extension == "png"
          ? setCopyPNGLoading(false)
          : setCopySVGLoading(false);
      }
    };
  }

  return (
    <div
      ref={scope}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={styles.shapeCard}
    >
      <Image
        className={styles.image}
        src={`/shapes/${type}/${name}.svg`}
        alt={name}
        width={176}
        height={176}
      />
      <div id="on-hover" className={styles.onHover}>
        {copyMessage && <div className={styles.copyMessage}>{copyMessage}</div>}
        <svg
          className={styles.topGlow}
          xmlns="http://www.w3.org/2000/svg"
          width="240"
          height="1699"
          fill="none"
        >
          <g filter="url(#filter0_f_4520_19246)">
            <ellipse
              cx="120"
              cy="-40.5"
              rx="89"
              ry="89.5"
              fill="#F8C3F9"
              fillOpacity="0.45"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_4520_19246"
              x="-89"
              y="-250"
              width="418"
              height="419"
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
                result="effect1_foregroundBlur_4520_19246"
              />
            </filter>
          </defs>
        </svg>
        <div className={styles.buttonContainer}>
          <div id="topButtons" className={styles.topButtons}>
            <DownloadButton
              loading={downloadPNGLoading}
              variant="png"
              onClick={handleDownload("png")}
            />
            <DownloadButton
              loading={downloadSVGLoading}
              variant="svg"
              onClick={handleDownload("svg")}
            />
          </div>
          <div id="bottomButtons" className={styles.bottomButtons}>
            <CopyButton
              loading={copyPNGLoading}
              variant="png"
              onClick={handleCopy("png")}
            />
            <CopyButton
              loading={copySVGLoading}
              variant="svg"
              onClick={handleCopy("svg")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function DownloadButton(
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { variant: "png" | "svg"; loading: boolean },
) {
  const { className, loading, ...rest } = props;
  return (
    <button
      {...rest}
      className={`${styles.button} ${styles.downloadButton} ${props.variant == "svg" ? styles.svg : styles.png} ${className}`}
    >
      {loading ? (
        <Image
          className={styles.loader}
          alt="loader"
          src="/Loader.png"
          width={20}
          height={20}
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 3C10.4603 3 10.8334 3.3731 10.8334 3.83333V10.9882L12.7441 9.07742C13.0695 8.75198 13.5972 8.75198 13.9226 9.07742C14.248 9.40283 14.248 9.9305 13.9226 10.2559L10.5893 13.5892C10.433 13.7455 10.221 13.8333 10 13.8333C9.77903 13.8333 9.56703 13.7455 9.41078 13.5892L6.07744 10.2559C5.75201 9.9305 5.75201 9.40283 6.07744 9.07742C6.40287 8.75198 6.93052 8.75198 7.25595 9.07742L9.16669 10.9882V3.83333C9.16669 3.3731 9.53977 3 10 3ZM3.33337 12.1667C3.7936 12.1667 4.1667 12.5398 4.1667 13C4.1667 13.8143 4.17073 14.0998 4.21473 14.3211C4.412 15.3127 5.18724 16.088 6.17897 16.2853C6.40017 16.3293 6.68566 16.3333 7.50003 16.3333H12.5C13.3144 16.3333 13.5999 16.3293 13.8211 16.2853C14.8128 16.088 15.588 15.3127 15.7854 14.3211C15.8294 14.0998 15.8334 13.8143 15.8334 13C15.8334 12.5398 16.2064 12.1667 16.6667 12.1667C17.1269 12.1667 17.5 12.5398 17.5 13C17.5 13.0327 17.5 13.0647 17.5 13.0964C17.5002 13.7778 17.5004 14.2422 17.4199 14.6462C17.0912 16.2991 15.7991 17.5912 14.1463 17.9199C13.7423 18.0003 13.2779 18.0002 12.5965 18C12.5649 18 12.5327 18 12.5 18H7.50003C7.46739 18 7.43523 18 7.40355 18C6.72222 18.0002 6.25782 18.0003 5.85382 17.9199C4.20094 17.5912 2.90887 16.2991 2.58009 14.6462C2.49973 14.2422 2.49984 13.7778 2.50002 13.0965C2.50002 13.0647 2.50003 13.0327 2.50003 13C2.50003 12.5398 2.87312 12.1667 3.33337 12.1667Z"
            fill="white"
          />
        </svg>
      )}
      <span>{props.variant == "png" ? "PNG" : "SVG"}</span>
    </button>
  );
}
function CopyButton(
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { variant: "png" | "svg"; loading: boolean },
) {
  const { className, loading, ...rest } = props;
  return (
    <button
      {...rest}
      className={`${styles.button} ${styles.copyButton} ${props.variant == "svg" ? styles.svg : styles.png} ${className}`}
    >
      {loading ? (
        <Image
          className={styles.loader}
          alt="loader"
          src="/Loader.png"
          width={20}
          height={20}
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M16.6667 8H9.16667C8.24619 8 7.5 8.74619 7.5 9.66667V17.1667C7.5 18.0871 8.24619 18.8333 9.16667 18.8333H16.6667C17.5871 18.8333 18.3333 18.0871 18.3333 17.1667V9.66667C18.3333 8.74619 17.5871 8 16.6667 8Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.16675 13.0001H3.33341C2.89139 13.0001 2.46746 12.8245 2.1549 12.5119C1.84234 12.1994 1.66675 11.7754 1.66675 11.3334V3.83341C1.66675 3.39139 1.84234 2.96746 2.1549 2.6549C2.46746 2.34234 2.89139 2.16675 3.33341 2.16675H10.8334C11.2754 2.16675 11.6994 2.34234 12.0119 2.6549C12.3245 2.96746 12.5001 3.39139 12.5001 3.83341V4.66675"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <span>{props.variant == "png" ? "PNG" : "SVG"}</span>
    </button>
  );
}
