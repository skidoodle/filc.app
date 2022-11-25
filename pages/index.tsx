import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <Image
        src={"/img/iphonecropped 2.png"}
        alt={"Filc"}
        width={584 / 2}
        height={702 / 2}
      />
      <b>Soon™️</b>
    </div>
  );
}
