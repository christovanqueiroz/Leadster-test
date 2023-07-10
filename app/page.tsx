'use client';

import Header from "../src/components/Header";
import Main from "../src/components/Main"
import GlobalStyles from "../src/styles/GlobalStyles"

export default function Page() {
    return (
      <div>
        <Header/>
        <Main />
        <GlobalStyles />
      </div>
    )
  }