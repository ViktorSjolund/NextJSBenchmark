import type { PropsWithChildren } from 'react';
import Link from 'next/link';

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="overflow-hidden flex items-center flex-col h-screen bg-gradient-to-r from-slate-300 via-slate-50 to-slate-300">
      <nav className="flex w-full items-center shrink-0 grow-0 h-10 justify-center bg-slate-700 border-b border-slate-600">
        <div className="flex gap-4 w-full p-2 md:max-w-2xl">
          <Link href="/">
            <span>Home</span>
          </Link>
          <Link href="/blog">
            <span>Blog</span>
          </Link>
          <Link href="/bigdata">
            <span>Big Data</span>
          </Link>
        </div>
      </nav>
      <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-slate-500 scrollbar-thumb-rounded-md scrollbar-track-slate-300 flex justify-self-center shadow-xl w-full flex flex-grow bg-slate-200 md:border-x md:border-slate-300 md:max-w-2xl">
        {props.children}
      </div>
    </main>
  );
};
