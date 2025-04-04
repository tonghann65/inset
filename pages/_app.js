import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-Y5C5C7S6XH`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Y5C5C7S6XH');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
