import { HtmlHead } from "../components/HtmlHead";
import AssetComponent from "../components/Asset";

export default function Asset() {
  return (
    <>
      <HtmlHead
        title="Asset"
        decription="[insert page description]"
        link="/"
      />
      <AssetComponent />
    </>
  );
}
