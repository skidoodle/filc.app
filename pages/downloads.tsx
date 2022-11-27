import { GetStaticProps } from "next";
import FilcNavBar from "lib/components/navbar";
import Head from "next/head";
import DownloadIcon from "../lib/components/icons/download.svg";
import AppleIcon from "../lib/components/icons/apple.svg";
import { motion as m } from "framer-motion";
import LatestReleaseCard from "lib/components/latest_release";
import ReleaseCard from "lib/components/release";

interface DownloadsProps {
  releases: any[];
}

export default function Downloads({ releases }: DownloadsProps) {
  return (
    <>
      <Head>
        <title>Letöltések</title>
      </Head>
      <FilcNavBar />
      <div
        style={{ background: "linear-gradient(#FFFFFF00, #0DE3B533)" }}
        className="h-full pb-6"
      >
        <div className="flex justify-center w-full lg:w-4/5 m-auto mt-12 lg:mt-24 gap-16">
          <m.div
            className="flex flex-col gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
              },
            }}
          >
            <h1
              className="text-4xl lg:text-7xl font-extrabold"
              style={{ lineHeight: 1 }}
            >
              Szerezd meg a Filcet
            </h1>
            <div className="flex gap-2">
              <div
                className="noselect flex items-center px-6 py-2 rounded-2xl text-xl font-semibold text-white cursor-pointer shadow-md"
                style={{ background: "#278076", fontSize: 18, fontWeight: 600 }}
              >
                <div style={{ height: 20, marginRight: 12 }}>
                  <AppleIcon />
                </div>
                iOS
              </div>
              <div
                className="noselect flex items-center px-6 py-2 rounded-2xl text-xl font-semibold text-white cursor-pointer shadow-md"
                style={{ background: "#278076", fontSize: 18, fontWeight: 600 }}
              >
                <div style={{ height: 20, marginRight: 12 }}>
                  <DownloadIcon />
                </div>
                APK
              </div>
            </div>
            <div className="block lg:hidden">
              <LatestReleaseCard latest={releases[0]} />
            </div>
            <div>
              <span className="font-bold">Régebbi verziók</span>
              <div>
                {releases.slice(1).map((release: any) => {
                  return (
                    <ReleaseCard release={release} key={release.tag_name} />
                  );
                })}
              </div>
            </div>
          </m.div>
          <m.div
            className="hidden lg:block"
            style={{ width: "50%" }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
              },
            }}
          >
            <LatestReleaseCard latest={releases[0]} />
          </m.div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const releaseRes = await fetch(
    "https://api.github.com/repos/filc/naplo/releases"
  );

  const releases = await releaseRes.json();

  return {
    props: {
      releases,
    },
  };
};
