import Head from "next/head";

export default function SEO(props) {
  const { title, img, desc, keywords } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords} />
      <meta name="og:image" content={img} />
    </Head>
  );
}
