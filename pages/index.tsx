import { Link, Navbar } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar
        variant={"sticky"}
        disableShadow
        disableBlur
        css={{
          $$navbarBackgroundColor: "transparent",
          $$navbarBlurBackgroundColor: "transparent",
        }}
      >
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
          <Image
            src={"/img/logo.svg"}
            alt={"logo"}
            height={48}
            width={48}
            style={{ marginLeft: 24, borderRadius: 16 }}
          />
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          hideIn={"xs"}
          activeColor="primary"
        >
          <Navbar.Link href="/" isActive color={"primary"}>
            Kezdőlap
          </Navbar.Link>
          <Navbar.Link href="/downloads" color={"primary"}>
            Letöltés
          </Navbar.Link>
          <Navbar.Link href="/premium" color={"primary"}>
            Premium
          </Navbar.Link>
          <Navbar.Link href="https://github.com/filc/naplo" color={"primary"}>
            GitHub
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content></Navbar.Content>
        <Navbar.Collapse>
          <Navbar.CollapseItem isActive activeColor={"primary"}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="/"
            >
              Kezdőlap
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="/downloads"
            >
              Letöltés
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="/premium"
            >
              Premium
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="https://github.com/filc/naplo"
            >
              GitHub
            </Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
      <div
        className="flex flex-col gap-4 items-center justify-center h-full"
        style={{ marginTop: -76 }}
      >
        <Image
          src={"/img/iphonecropped 2.png"}
          alt={"Filc"}
          width={584 / 2}
          height={702 / 2}
        />
      </div>
    </>
  );
}
