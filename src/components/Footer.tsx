import styles from "./Footer.module.css";
import BottomLogo from "@/components/BottomLogo";

export default function Footer() {
  return (
    <footer>
      <div className={styles.bLogoLineContainer}>
        <div className={styles.line1} />
        <div className={styles.logoContainer}>
          <div className={styles.logoWrapper}>
            <BottomLogo />
          </div>
        </div>
        <div className={styles.line2} />
      </div>
    </footer>
  );
}
