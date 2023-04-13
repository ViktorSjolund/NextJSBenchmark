import type { PropsWithChildren } from 'react';
import Link from 'next/link';

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="overflow-none flex flex-col h-screen bg-gradient-to-r from-slate-300 via-slate-50 to-slate-300">
      <nav className="flex items-center h-12 justify-center bg-slate-500 border-b border-slate-600">
        <div className="flex gap-4 w-full md:max-w-2xl">
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
      <div className="flex w-full h-full justify-center">
        <div className="justify-self-center shadow-xl w-full flex flex-grow bg-slate-200 md:border-x md:border-slate-300 md:max-w-2xl">
          {props.children}
        </div>
      </div>
    </main>
  );
};
