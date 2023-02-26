import { type NextComponentType } from "next";
import Head from "next/head";

const Header: NextComponentType = () => {
  return (
    <Head>
      <title>Auth App</title>
      <meta name="description" content="Created for exercising with authentication" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;
