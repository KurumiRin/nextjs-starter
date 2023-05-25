import customTheme from "@/lib/styles/theme"
import { ColorModeScript } from "@chakra-ui/react"
import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <ColorModeScript
          initialColorMode={customTheme.config?.initialColorMode}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
