import Head from "next/head";
import { useSigninCheck } from "reactfire";
import Login from "../login";

function Auth({ children }: { children: JSX.Element }) {
  const { status, data: signInCheckResult } = useSigninCheck();

  if (status === "loading") {
    return (
      <div className="mx-auto mt-20 min-h-screen w-full rounded-md border-2">
        <div className="flex min-h-screen animate-pulse flex-row items-center justify-center space-x-5">
          <div className="rounded-50 min-h-screen w-full bg-gray-300 "></div>
        </div>
      </div>
    );
  }

  if (signInCheckResult.signedIn === true) {
    return children;
  } else {
    return (
      <>
        <Head>
          <title>Error Unauthorized</title>
          <meta
            name="description"
            content="Created by Jimmy Rousseau @lifeofcoding"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Login />
      </>
    );
  }
}

export default Auth;
