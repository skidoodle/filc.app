import FilcNavBar from "lib/components/navbar";
import Image from "next/image";
import styles from "styles/Home.module.scss";
import { motion as m } from "framer-motion";
import ShowcaseSlide from "lib/components/showcase/showcase";
import Backpack from "lib/components/showcase/backpack";

export default function Home() {
  return (
    <>
      <FilcNavBar />
      <div
        style={{
          background: "linear-gradient(#FFFFFF00, #0DE3B533 100vh, #0DE3B533)",
        }}
        className="h-full pb-6"
      >
        <div
          className="flex flex-col gap-12 items-center justify-center min-h-full"
          style={{ marginTop: -76 / 2 }}
        >
          <div className={styles.container}>
            <m.img
              className="noselect z-20"
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
              className={`noselect z-30 ${styles.title}`}
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
        <div className="flex flex-col">
          <ShowcaseSlide
            title={<span>Minden, ami kell</span>}
            description="Használtad már a Kollaborációs Tér funkciót a Krétában? Mi sem. Éppen ezért nem találod meg nálunk."
            asset="home"
            arrangement="left"
          />
          <ShowcaseSlide
            title={<span>Gyors információ</span>}
            description="A kezdőlapodon könnyen leolvashatod a jelenlegi órád időtartamát, helyét, és a következő órádat is."
            asset="livecard"
            arrangement="left"
          />
          <ShowcaseSlide
            title={<span>Statisztikus álom</span>}
            description="Sok féle hasznos statisztikát láthasz nálunk, például a jegyeid száma, sőt akár havi, és heti átlagokat is."
            asset="gradesgraph"
            arrangement="right"
          />
          <ShowcaseSlide
            title={
              <span className="flex items-center gap-4">
                Szabd <img className="h-12" src="/img/showcase/customize.svg" />
              </span>
            }
            description="A te filced, a te színeid. Válassz saját színt, sőt, akár követheted a telefonod színeit is. Még bővebb személyre szabás elérhető a Kupak csomaggal."
            asset="customtheme"
            arrangement="left"
          />
          <ShowcaseSlide
            title={<span>Meglepetés jegyek</span>}
            description="Néha olyan, mintha egy szerencsejáték lenne, hogy hányasra sikerül a dolgozatod? A Filccel ez valóság lehet."
            customAsset={<Backpack />}
            arrangement="right"
          />
        </div>
      </div>
    </>
  );
}
