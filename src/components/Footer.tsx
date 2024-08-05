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
          <span className={styles.creditsName}>Chaitanya Sai & Sarda Rani</span>
        </div>
        <div className={styles.creditsSeperator} />
        <div>
          Developed by <span className={styles.creditsName}>Raghav Pandit</span>
        </div>
      </div>
    </footer>
  );
}
