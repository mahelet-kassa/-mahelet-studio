import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-[#e8e4df] bg-[#f7f5f2]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-14 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <div>
            <Logo size="md" />
            <p className="mt-4 text-sm text-[#6b6560] font-light max-w-xs leading-relaxed">
              Graduation, portrait & couples photography in Boston.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6 text-sm">
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#6b6560]">Explore</p>
              {[
                { label: 'Work', path: '/gallery' },
                { label: 'About', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <Link key={item.path} to={item.path} className="block text-[#141414]/70 hover:text-[#141414] transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#6b6560]">Connect</p>
              <a href="https://www.instagram.com/mahelet_studio" className="block text-[#141414]/70 hover:text-[#141414] transition-colors">
                Instagram
              </a>
              <a href="mailto:hello@maheletstudio.com" className="block text-[#141414]/70 hover:text-[#141414] transition-colors">
                hello@maheletstudio.com
              </a>
            </div>
          </div>
        </div>

        <p className="mt-12 pt-8 border-t border-[#e8e4df] text-xs text-[#6b6560]">
          &copy; {new Date().getFullYear()} Mahelet Studio
        </p>
      </div>
    </footer>
  );
}
