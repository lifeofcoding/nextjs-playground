import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta
          name="description"
          content="Created by Jimmy Rousseau @lifeofcoding"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        Logged In
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      requiresLogin: true,
    },
  };
};

export default Dashboard;
