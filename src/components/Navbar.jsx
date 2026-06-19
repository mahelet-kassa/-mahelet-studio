import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const links = [
  { to: '/gallery', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const solid = scrolled || !isHome;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid ? 'bg-[#f7f5f2]/90 backdrop-blur-md border-b border-[#e8e4df]/80' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
            <Logo light={!solid && isHome} size="md" />

            <nav className="hidden md:flex items-center gap-10">
              {links.map((link) => {
                const active = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`text-[11px] uppercase tracking-[0.2em] font-medium transition-colors ${
                      active
                        ? solid ? 'text-[#141414]' : 'text-white'
                        : solid ? 'text-[#6b6560] hover:text-[#141414]' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 -mr-2 transition-colors ${solid ? 'text-[#141414]' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#f7f5f2] flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-10">
              <Link to="/" className="font-serif text-2xl text-[#141414]" onClick={() => setMobileOpen(false)}>Home</Link>
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={link.to}
                    className="text-xl font-serif text-[#6b6560] hover:text-[#141414] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
