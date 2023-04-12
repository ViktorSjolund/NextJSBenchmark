import Head from 'next/head';
import { PageLayout } from '../components/layout';

export default function Home() {
  return (
    <PageLayout>
      <Head>
        <title>Blog</title>
      </Head>
      <p>Hello</p>
    </PageLayout>
  );
}
