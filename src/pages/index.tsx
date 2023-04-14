import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import { PageLayout } from '@/components/layout';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <div className="flex-wrap justify-center gap-10 items-center flex border flex-col w-full h-full">
          <div className="flex flex-row flex-nowrap">
            <Image src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
            <div className={styles.thirteen}>
              <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
            </div>
          </div>

          <div className="text-slate-800 font-bold text-xl w-full h-10 text-center">
            Benchmark Web Application
          </div>
        </div>
      </PageLayout>
    </>
  );
}
