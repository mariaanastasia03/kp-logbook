import { HtmlHead } from '../components/HtmlHead';
import UpdateComponent from '../components/Update';

export default function Home() {
  return (
    <>
      <HtmlHead
        title="Update"
        decription="[insert page description]"
        link="/"
      />
      <UpdateComponent />
    </>
  );
}
