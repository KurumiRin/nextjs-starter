import { Chakra } from "@/lib/components/Chakra"
import Layout from "@/lib/layout"

import defaultSEOConfig from "../../next-seo.config"
import "@/styles/globals.css"
import { DefaultSeo } from "next-seo"
import type { AppProps } from "next/app"
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Chakra>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo {...defaultSEOConfig} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  )
}
