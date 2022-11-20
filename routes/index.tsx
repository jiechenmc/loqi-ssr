import { Head } from "$fresh/runtime.ts";
import MessageBox from "../islands/MessageBox.tsx";
import Header from "../components/Header.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <Header />
      <MessageBox />
    </>
  );
}
