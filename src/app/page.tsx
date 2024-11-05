import Image from "next/image";
import { HomePage, AboutPage }  from "@/app";

export default function Home() {
  return (
    <div>
      <HomePage />
      <AboutPage />
    </div>
  );
}
