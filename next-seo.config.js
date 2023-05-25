/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "nextjs-starter",
  titleTemplate: "%s | nextjs-starter",
  defaultTitle: "nextjs-starter",
  description: "Next.js + chakra-ui + TypeScript template",
  canonical: "https://github.com/KurumiRin",
  openGraph: {
    url: "https://github.com/KurumiRin",
    title: "nextjs-starter",
    description: "Next.js + chakra-ui + TypeScript template",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/52448921?v=4",
        alt: "nextjs-starter image",
      },
    ],
    site_name: "nextjs-starter",
  },
  twitter: {
    handle: "@KurumiRin",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
