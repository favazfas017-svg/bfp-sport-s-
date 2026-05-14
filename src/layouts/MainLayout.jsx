import { Link, Outlet } from 'react-router-dom';
import { pages } from '../data/mockData';

const slug = (name) => (name === 'Home' ? '/' : '/' + name.toLowerCase().replace(/\s+/g, '-'));

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-cyan-400/20 bg-slate-950/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-4 py-3 text-sm">
          {pages.map((p) => <Link key={p} className="whitespace-nowrap hover:text-cyan-300" to={slug(p)}>{p}</Link>)}
        </nav>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8"><Outlet /></main>
    </div>
  );
}
