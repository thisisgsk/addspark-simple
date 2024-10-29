import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Add Spark Solutions",
  description: "Are you ready to elevate your brand? At Add Spark, we specialize in creating exceptional websites, executing targeted marketing campaigns, and delivering effective PR strategies that make your brand stand out. Let us help you shine in the digital landscape!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Add Spark Solutions" />
        <meta property="og:description" content="Are you ready to elevate your brand? At Add Spark, we specialize in creating exceptional websites, executing targeted marketing campaigns, and delivering effective PR strategies that make your brand stand out. Let us help you shine in the digital landscape!" />
        <meta property="og:image" content="/onlylogo.png" />
        <meta property="og:url" content="https://addspark.in/" />
        <meta property="og:type" content="website" />

        <Script src="https://cdn.lordicon.com/lordicon.js" strategy="lazyOnload" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Shanti&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
