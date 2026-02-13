import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&family=Poppins:wght@400;600;700&family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
          overflow-x: hidden;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
