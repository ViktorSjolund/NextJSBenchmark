import { PageLayout } from '../../components/layout'
import { getPostData } from '../../lib/posts'
import Head from 'next/head'
import { GetServerSideProps, GetStaticPaths } from 'next'

export default function Post({
  postData,
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  return (
    <PageLayout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="center flex w-full flex-col items-center p-2 text-slate-800">
        <h1 className="text-4xl font-bold">{postData.title}</h1>
        <div className="py-6">{postData.date}</div>
        <div
          className="prose flex w-full flex-col items-center pb-20"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </PageLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string)
  return {
    props: {
      postData,
    },
  }
}
