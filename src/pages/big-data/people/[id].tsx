import { PageLayout } from '@/components/layout'
import people from '@/data/big-data.json'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

type Person = typeof people[0]

export default function PersonDetails({
  person
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageLayout>
      <div className='bg-slate-600 w-full flex flex-col p-4 gap-3 h-max'>
        <span><span className='bg-slate-500 rounded-md p-1 font-semibold text-slate-800'>Full Name</span> {person.first_name} {person.last_name}</span>
        <span><span className='bg-slate-500 rounded-md p-1 font-semibold text-slate-800'>Email</span> {person.email}</span>
        <span><span className='bg-slate-500 rounded-md p-1 font-semibold text-slate-800'>Gender</span> {person.gender}</span>
      </div>
    </PageLayout>
  )
}

export const getServerSideProps: GetServerSideProps<{ person: Person }> = async ({ params }) => {
  if (!params?.id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const id = parseInt(params?.id?.toString())
  const person = people.find((person) => {
    return person.id === id
  })

  if (!person) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      person
    }
  }
}
