import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import GenericPage from './pages/GenericPage';
import { fixtures, notifications, points, prizes } from './data/mockData';

const TeamRegistration = () => (
  <GenericPage title="Team Registration System">
    <form className="grid gap-3 md:grid-cols-2">
      {['Team Name', 'Captain Name', 'Email', 'Phone', 'Logo URL', 'Players CSV URL'].map((i) => <input key={i} placeholder={i} className="rounded bg-slate-800 p-3" />)}
      <button className="rounded bg-cyan-500 px-4 py-2 font-semibold text-slate-950">Submit for Approval</button>
    </form>
  </GenericPage>
);

const Fixtures = () => <GenericPage title="Match Schedule & Fixtures"><div className="space-y-3">{fixtures.map((f) => <div key={f.match} className="rounded border border-slate-700 p-3">{f.match} • {f.date} {f.time} • {f.venue} • {f.status} • {f.score}</div>)}</div></GenericPage>;
const LeagueFixtures = () => <GenericPage title="League Fixtures"><p className="mb-4">Round-robin league matches before knockout stage.</p><div className="space-y-3">{fixtures.map((f) => <div key={f.match} className="rounded border border-slate-700 p-3">{f.match} • {f.date} • {f.venue}</div>)}</div></GenericPage>;
const Live = () => <GenericPage title="Live Scoreboard"><p>Admin-controlled real-time scores with Firebase listeners and match timers.</p></GenericPage>;
const Table = () => <GenericPage title="Points Table"><table className="w-full text-left"><thead><tr><th>Team</th><th>W</th><th>L</th><th>D</th><th>GD/NRR</th><th>Pts</th></tr></thead><tbody>{points.map((p)=><tr key={p.team}><td>{p.team}</td><td>{p.w}</td><td>{p.l}</td><td>{p.d}</td><td>{p.gd}</td><td>{p.pts}</td></tr>)}</tbody></table></GenericPage>;
const Admin = () => <GenericPage title="Admin Dashboard"><ul className="list-disc pl-5"><li>Secure login (Firebase Auth)</li><li>Manage teams, players, fixtures</li><li>Live score editing</li><li>Gallery and notifications management</li></ul></GenericPage>;
const Notifications = () => <GenericPage title="Notifications"><div className="space-y-3">{notifications.map((n) => <div key={n.title} className="rounded border border-slate-700 p-3"><p className="font-semibold">{n.title}</p><p className="text-slate-300">{n.message}</p><span className="text-xs text-cyan-300">{n.type}</span></div>)}</div></GenericPage>;
const PrizePool = () => <GenericPage title="Prize Pool"><div className="space-y-3">{prizes.map((p) => <div key={p.title} className="rounded border border-slate-700 p-3"><p className="font-semibold">{p.title}</p><p>{p.reward}</p></div>)}</div></GenericPage>;

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-tournament" element={<GenericPage title="About Tournament"><p>Professional dark sports branding, smooth animations, and optimized load performance.</p></GenericPage>} />
        <Route path="/team-registration" element={<TeamRegistration />} />
        <Route path="/teams" element={<GenericPage title="Teams"><p>Roster cards with logos, captain details, approvals, and contact info.</p></GenericPage>} />
        <Route path="/players" element={<GenericPage title="Player Profiles"><p>Player image, jersey number, team details, and statistics.</p></GenericPage>} />
        <Route path="/fixtures" element={<Fixtures />} />
        <Route path="/league-fixtures" element={<LeagueFixtures />} />
        <Route path="/live-scores" element={<Live />} />
        <Route path="/points-table" element={<Table />} />
        <Route path="/knockout-brackets" element={<GenericPage title="Knockout Brackets"><p>Auto-generated quarter-finals, semi-finals, and finals bracket visualization.</p></GenericPage>} />
        <Route path="/sponsors" element={<GenericPage title="Sponsors & Prize Pool"><p>Sponsor logos, banners, ad slots, and prize pool highlights.</p></GenericPage>} />
        <Route path="/prize-pool" element={<PrizePool />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/gallery" element={<GenericPage title="Gallery"><p>Match gallery uploads by admins with optimized responsive image grid.</p></GenericPage>} />
        <Route path="/contact" element={<GenericPage title="Contact & Social"><p>WhatsApp CTA, social media links, and organizer support forms.</p></GenericPage>} />
        <Route path="/admin-panel" element={<Admin />} />
      </Route>
    </Routes>
  );
}
