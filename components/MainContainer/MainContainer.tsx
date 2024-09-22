import Head from "next/head";
import React from "react";

export interface MainContainerProps {
  children: React.ReactNode,
  title_page: string
};

export default function MainContainer ({children, title_page}: MainContainerProps) {
  return (
    <>
    <Head>
      <title>{title_page}</title>
    </Head>
    {children}
    </>
  )
};