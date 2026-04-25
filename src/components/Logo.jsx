import { Link } from 'react-router-dom';

export default function Logo({ light = false, size = 'md' }) {
  const sizes = {
    sm: { main: 'text-lg', sub: 'text-[8px] tracking-[0.35em]', gap: 'gap-0' },
    md: { main: 'text-xl lg:text-2xl', sub: 'text-[9px] tracking-[0.4em]', gap: 'gap-0.5' },
    lg: { main: 'text-2xl lg:text-3xl', sub: 'text-[10px] tracking-[0.45em]', gap: 'gap-1' },
  };

  const s = sizes[size] || sizes.md;
  const mainColor = light ? 'text-white' : 'text-neutral-900';
  const subColor = light ? 'text-white/70' : 'text-neutral-400';
  const accentColor = light ? 'text-amber-200' : 'text-[#b8956a]';

  return (
    <Link to="/" className={`flex flex-col items-start ${s.gap} group transition-opacity hover:opacity-80`}>
      <span className={`font-serif font-medium ${s.main} ${mainColor} leading-none transition-colors duration-300`}>
        <span className={`${accentColor} italic font-normal transition-colors duration-300`}>M</span>AHELET
      </span>
      <span className={`font-light uppercase ${s.sub} ${subColor} leading-none transition-colors duration-300`}>
        Studio
      </span>
    </Link>
  );
}
