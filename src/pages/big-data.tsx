import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import fs from 'fs/promises'

type Person = {
  id: number
  first_name: string
  last_name: string
  gender: string
  email: string
}

export const PersonCard = (props: Person) => {
  const { first_name, last_name, email, gender } = props

  return (
    <div className='flex flex-col rounded-md bg-slate-600 p-4 mt-2 w-72'>
      <h1>
        {first_name} {last_name}
      </h1>
      <span>{email}</span>
      <span>{gender}</span>
    </div>
  )
}

export default function BigData({
  people
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
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
  )
}

export const getServerSideProps: GetServerSideProps<{ people: Person[] }> = async () => {
  const bigData = await fs.readFile('src/data/big-data.json', 'utf-8')
  const people = JSON.parse(bigData) as Person[]

  return {
    props: {
      people
    }
  }
}
