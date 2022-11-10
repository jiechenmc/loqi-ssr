import { Head } from "$fresh/runtime.ts";
import MessageBox from "../islands/MessageBox.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <Header />
      <MessageBox />
      <Footer />
    </>
  );
}
