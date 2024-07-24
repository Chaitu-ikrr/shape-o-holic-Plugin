import "./page.css";
import localFont from "next/font/local";

const poppins = localFont({
  src: "./Poppins-Regular.ttf",
  display: "swap",
});
const chamchunk = localFont({
  src: "./chamchunk-400.otf",
  display: "swap",
});

export default function Home() {
  return (
    <main>
      <h1 className={poppins.className}>Poppins</h1>
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
