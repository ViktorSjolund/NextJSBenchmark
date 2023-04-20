import Head from 'next/head'
import { PageLayout } from '../components/layout'
import { getSortedPostsData } from '@/lib/posts'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    description: string
    id: string
  }[]
}) {
  return (
    <PageLayout>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="flex w-full grow-0 flex-col gap-2 p-2 text-slate-700">
        {allPostsData.map(({ id, date, title, description }) => (
          <div
            className="flex flex-col gap-2 rounded-md border border-slate-300 bg-slate-100 p-3"
            key={id}
          >
            <Link className="font-bold" href={`/blog/${id}`}>
              {title}
            </Link>

            <small>{description}</small>

            <small className="font-light">{date}</small>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
