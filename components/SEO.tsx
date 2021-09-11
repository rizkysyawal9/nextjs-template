import Head from 'next/head';
import { iSEO } from '@/interface/meta';

function SEO(props: iSEO) {
  const { title, content, meta = [] } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={content} />
      {
          meta.length > 0 && meta.forEach((tag) => (
            <meta name={tag.name} content={tag.content} />
          ))
      }
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default SEO;
