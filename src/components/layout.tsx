import type { PropsWithChildren } from 'react';
import Link from 'next/link';

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="overflow-none flex flex-col h-screen bg-slate-200">
      <nav className="flex items-center h-12 justify-center bg-slate-400 border-b border-slate-800">
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
        <div className="justify-self-center w-full flex flex-grow bg-slate-300 md:border-x border-slate-800 md:max-w-2xl">
          {props.children}
        </div>
      </div>
    </main>
  );
};
