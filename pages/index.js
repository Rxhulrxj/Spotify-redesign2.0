import { useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Dashboard from "../components/Dashboard";
import Loader from "../components/Loader";

export default function Home() {
  const router = useRouter();
  const { status, data: session } = useSession({
    onUnauthenticated() {
      router.push("/auth/signin");
    },
  });
  if (status === "loading") {
    return <Loader />;
  }
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
