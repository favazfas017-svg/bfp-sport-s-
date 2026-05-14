import SectionCard from '../components/SectionCard';

export default function GenericPage({ title, children }) {
  return (
    <div className="space-y-6">
      <SectionCard title={title}>{children}</SectionCard>
    </div>
  );
}
