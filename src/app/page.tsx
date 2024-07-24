import "./page.css";
import localFont from "next/font/local";

const chamchunk = localFont({
  src: "../fonts/chamchunk-400.otf",
  display: "swap",
});

export default function Home() {
  return (
    <main>
      <h1
        className={chamchunk.className}
        style={{ fontSize: 96, letterSpacing: 4 }}
      >
        SHAPE
      </h1>
      {/* <TopLogo /> */}
    </main>
  );
}
