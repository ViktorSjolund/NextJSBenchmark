import Link from 'next/link'
import { useRouter } from 'next/router'
import { PageLayout } from '@/components/layout'
import people from '@/data/big-data.json'

type Person = typeof people[0]

export const PersonCard = (props: Person) => {
  const router = useRouter()
  const { first_name, last_name, id } = props

  return (
    <Link href={router.pathname + '/' + id}>
      <div className='flex rounded-md bg-slate-600 p-2 mt-2 w-48'>
        <span className='text-sm font-semibold'>
          {first_name} {last_name}
        </span>
        <span className='ml-auto text-xs text-slate-400'>{id}</span>
      </div>
    </Link>
  )
}

export default function People() {
  return (
    <PageLayout>
      <div>
        <div className='flex flex-wrap justify-evenly'>
          {people.map((person) => {
            return (
              <PersonCard
                {...person}
                key={person.id}
              />
            )
          })}
        </div>
      </div>
    </PageLayout>
  )
}
