import { Head } from "$fresh/runtime.ts";
import MessageBox from "../islands/MessageBox.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div>ROOM CSE 214</div>
      <label>Message: </label>
      <input type="text" class="border-4"></input>
      <div>Messages: </div>
      <MessageBox />
    </>
  );
}
