"use client";
import topLogoAnimation from "@/assets/lottie/top_logo.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function TopLogo() {
  return (
    <div style={{ width: 50, height: 50 }}>
      <Lottie
        animationData={topLogoAnimation}
        style={{ width: 50, height: 50 }}
      />
    </div>
  );
}
