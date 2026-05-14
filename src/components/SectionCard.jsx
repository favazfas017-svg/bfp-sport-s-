export default function SectionCard({ title, children }) {
  return (
    <section className="neon-card p-6 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
      <h2 className="mb-4 text-xl font-semibold text-cyan-300">{title}</h2>
      {children}
    </section>
  );
}
