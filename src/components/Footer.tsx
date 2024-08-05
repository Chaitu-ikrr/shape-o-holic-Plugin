import styles from "./Footer.module.css";
import BottomLogo from "@/components/BottomLogo";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.bLogoLineContainer}>
        <div className={styles.line1} />
        <div className={styles.logoContainer}>
          <div className={styles.logoWrapper}>
            <BottomLogo />
          </div>
        </div>
        <div className={styles.line2} />
      </div>
      <div className={styles.credits}>
        <div>
          Designed by{" "}
          <a
            href="https://www.linkedin.com/in/chaitanyasai-g/"
            target="_blank"
            className={styles.creditsName}
          >
            Chaitanya Sai
          </a>
          <span> & </span>
          <a
            href="https://www.linkedin.com/in/kumari-sarda-rani"
            target="_blank"
            className={styles.creditsName}
          >
            Sarda Rani
          </a>
        </div>
        <div className={styles.creditsSeperator} />
        <div>
          Developed by{" "}
          <a
            href="https://linkedin.com/in/raghav-pandit"
            target="_blank"
            className={styles.creditsName}
          >
            Raghav Pandit
          </a>
        </div>
      </div>
    </footer>
  );
}
