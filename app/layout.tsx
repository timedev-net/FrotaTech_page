import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
const geist = Geist({ variable: "--font", subsets: ["latin"] });
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const metadata: Metadata = { title: "FrotaTech Soluções em Tecnologia", description: "Sistemas, automações com IA, portais e experiências digitais que transformam resultados.", other: { "codex-preview": "development" }, icons: { icon: `${basePath}/favicon.svg`, shortcut: `${basePath}/favicon.svg` } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><body className={geist.variable}>{children}<Script id="chatwoot-widget" strategy="afterInteractive">{`(function(d,t) {
  var BASE_URL="https://chatwoot.frotatech.com";
  var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
  g.src=BASE_URL+"/packs/js/sdk.js";
  g.async=true;
  s.parentNode.insertBefore(g,s);
  g.onload=function(){
    window.chatwootSDK.run({
      websiteToken:"tWwvHSKsjp74jAFaT4TFv8Qt",
      baseUrl:BASE_URL
    });
  };
})(document,"script");`}</Script></body></html> }
