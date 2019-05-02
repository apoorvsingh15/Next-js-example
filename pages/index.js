import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
const Home = () => {

    const onClick = () => {

        console.log("click works")
    }
    return(
  <div>
    <Head>
      <title>My styled page</title>
      <link href="/static/css/style.css" rel="stylesheet" />
    </Head>
    <p className="example">
      Hello world!
    </p>
    <button onClick={onClick}>this button</button>
    <Link href="/about">
        <a>here</a>
      </Link>
  </div>
)};


export default Home;


