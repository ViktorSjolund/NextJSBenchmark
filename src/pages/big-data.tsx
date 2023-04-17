import { PageLayout } from '@/components/layout'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function BigData() {
  const router = useRouter()

  return (
    <PageLayout>
      <div className='w-full'>
        <Link href={router.pathname + '/people'}>
          <div className='bg-slate-600 w-full p-4 flex flex-col'>
            <h1 className='text-lg font-bold'>People Big Data</h1>
            <p>A data collection of 1000 fake people</p>
          </div>
        </Link>
      </div>
    </PageLayout>
  )
}
