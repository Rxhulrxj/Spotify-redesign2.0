import Head from "next/head";
import { getProviders, signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import Loader from "../../components/Loader";

function Signin({ providers }) {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);
  if (session) return <Loader />;
  return (
    <div className="bg-black h-screen flex flex-col items-center pt-40 space-y-8">
      <Head>
        <title>Login || Spotify 2.0</title>
        <link rel="icon" href="https://rb.gy/xkacau" />
      </Head>
      <Image
        src="https://rb.gy/y9mwtb"
        height={250}
        width={600}
        objectFit="contain"
        className="animate-pulse"
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="text-white py-4 px-6 rounded-full bg-[#1db954] 
          transition duration-300 ease-out border border-transparent uppercase font-body
          text-xs md:text-base tracking-wider hover:scale-105 hover:bg-[#0db146]"
            onClick={() => signIn(provider.id)}
          >
            Sign In with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Signin;
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
