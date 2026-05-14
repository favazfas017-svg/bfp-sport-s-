import { useTranslation } from 'react-i18next';
import SectionCard from '../components/SectionCard';

export default function HomePage() {
  const { t, i18n } = useTranslation();
  return (
    <div className="space-y-6">
      <SectionCard title={t('title')}>
        <p className="text-slate-300">Manage football, cricket, volleyball, badminton, esports and more with live updates, points table, knockout brackets, and sponsor showcases.</p>
        <div className="mt-4 flex gap-3">
          <button className="rounded bg-cyan-500 px-4 py-2 font-medium text-slate-950">{t('register')}</button>
          <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ml' : 'en')} className="rounded border border-purple-400 px-4 py-2">EN / ML</button>
        </div>
      </SectionCard>
    </div>
  );
}
