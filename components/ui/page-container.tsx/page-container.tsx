import Head from "next/head";
import React, { FC } from "react";

type PageContainerProps = {
  children?: React.ReactNode;
  title: string;
};

const PageContainer: FC<PageContainerProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="An internal feedback board for product managers."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default PageContainer;
