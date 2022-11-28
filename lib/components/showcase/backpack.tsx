import Rive, { useRive } from "rive-react";

export default function Backpack() {
  const { rive, RiveComponent } = useRive({
    src: "/animations/backpack.riv",
    autoplay: false,
  });

  return <RiveComponent />;
}
