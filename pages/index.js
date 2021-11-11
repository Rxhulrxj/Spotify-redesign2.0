import Head from "next/head";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Spotify 2.0</title>
        <link rel="icon" href="https://rb.gy/xkacau" />
      </Head>
      <Dashboard />
    </div>
  );
}
