import { HtmlHead } from "../components/HtmlHead";
import Beranda from "../components/Home";

export default function Home() {
  return (
    <>
      <HtmlHead
        title="Beranda"
        decription="[insert page description]"
        link="/"
      />
      <Beranda />
    </>
  );
}
