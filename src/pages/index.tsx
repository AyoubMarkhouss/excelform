import Image from "next/image";
import { Inter } from "next/font/google";
import Form from "@/components/Form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <Image
          className="bg-cover h-screen"
          alt="jeep"
          src="/jeepcar.jpg"
          height={2500}
          width={2500}
        />
        <Form />
      </div>
    </>
  );
}
