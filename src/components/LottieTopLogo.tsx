import Lottie from "lottie-react";
import topLogoAnimation from "@/assets/lottie/top_logo.json";

export default function TopLogo() {
  return (
    <Lottie
      animationData={topLogoAnimation}
      style={{ width: 40, height: 40 }}
    />
  );
}
