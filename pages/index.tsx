import FilcNavBar from "lib/components/navbar";
import Image from "next/image";
import styles from "styles/Home.module.scss";
import { motion as m } from "framer-motion";

export default function Home() {
  return (
    <>
      <FilcNavBar />
      <div
        className="flex flex-col gap-12 items-center justify-center min-h-full"
        style={{ marginTop: -76 / 2 }}
      >
        <div className={styles.container}>
          <m.img
            className="z-20"
            src={"/img/iphonecropped 2.png"}
            alt="Filc"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
                marginTop: 12,
              },
              visible: {
                opacity: 1,
                marginTop: 0,
              },
            }}
          />
          <m.div
            className={`z-10 ${styles.title}`}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                top: "calc(50% + 4em)",
                opacity: 0,
              },
              visible: {
                top: "50%",
                opacity: 1,
                transition: { delay: 0.2 },
              },
            }}
          >
            <h1>Egy nem hivatalos alkalmazás az eKréta rendszerhez</h1>
          </m.div>
          <m.div
            className={`z-30 ${styles.title}`}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                top: "calc(50% + 4em)",
                opacity: 0,
              },
              visible: {
                top: "50%",
                opacity: 1,
                transition: { delay: 0.2 },
              },
            }}
          >
            <h1 className={styles.highlight}>
              Egy nem hivatalos alkalmazás az eKréta rendszerhez
            </h1>
          </m.div>
        </div>
      </div>
    </>
  );
}
