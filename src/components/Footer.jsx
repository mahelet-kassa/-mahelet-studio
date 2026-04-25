import { Link } from 'react-router-dom';
import { Camera, AtSign, Mail, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <Logo size="lg" />
            <p className="mt-4 text-sm text-neutral-500 leading-relaxed max-w-sm">
              Graduation, portrait & couples photography rooted in real moments. Based in Boston.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-medium mb-5">Navigate</h4>
            <ul className="space-y-3">
              {[{ label: 'Gallery', path: 'gallery' }, { label: 'Services', path: 'pricing' }, { label: 'About', path: 'about' }, { label: 'Contact', path: 'contact' }].map((item) => (
                <li key={item.label}>
                  <Link
                    to={`/${item.path}`}
                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-medium mb-5">Connect</h4>
            <div className="flex gap-4 mb-6">
              {[
                { icon: Camera, href: 'https://www.instagram.com/mahelet_studio', label: 'Instagram' },
                { icon: Mail, href: 'mailto:hello@maheletstudio.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:border-neutral-900 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <a
              href="mailto:hello@maheletstudio.com"
              className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              hello@maheletstudio.com
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-400">&copy; {new Date().getFullYear()} Mahelet Studio. All rights reserved.</p>
          <p className="text-xs text-neutral-400">Crafted with passion for the art of photography.</p>
        </div>
      </div>
    </footer>
  );
}
