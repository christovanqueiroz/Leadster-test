'use client';

import Header from "../src/components/Header";
import Main from "../src/components/Main"
import GlobalStyles from "../src/styles/GlobalStyles"

import { handlePage } from "../src/components/Videos";

export default function Page() {
    return (
      <div onLoad={() => handlePage()}>
        <Header/>
        <Main />
        <GlobalStyles />
      </div>
    )
  }