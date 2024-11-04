import Image from "next/image";
import { HomePage, AboutPage }  from "@/app/pages";

export default function Home() {
  return (
    <div className="mt-10">
      <HomePage />
      <AboutPage />
    </div>
  );
}
