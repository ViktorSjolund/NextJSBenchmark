import Head from 'next/head';
import { PageLayout } from '../components/layout';

export default function Home() {
  const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <PageLayout>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="flex grow-0 w-full flex-col p-2 gap-2">
        {collection.map((item) => (
          <div
            key={item}
            className="h-[60px] grow-0 shrink-0 rounded-md border border-slate-400 bg-slate-300"
          >
            <h2>Title</h2>
            <h3>date</h3>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
