import { PageLayout } from '../../components/layout';
import { getPostData } from '../../lib/posts';
import Head from 'next/head';
import { GetServerSideProps, GetStaticPaths } from 'next';

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <PageLayout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="flex flex-col w-full items-center center text-slate-800 p-2">
        <h1>{postData.title}</h1>
        <div>{postData.date}</div>
        <div
          className="flex flex-col items-center w-full prose pb-20"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </PageLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
