import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const links = [
  { to: '/', label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const navBg = scrolled || !isHome
    ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/60'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-neutral-900' : 'text-white';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 lg:h-20">
            <Logo light={!scrolled && isHome} size="md" />

            <nav className="hidden md:flex items-center gap-8">
              {links.map((link) => {
                const active = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`relative text-[13px] uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${
                      active
                        ? scrolled || !isHome ? 'text-neutral-900' : 'text-white'
                        : scrolled || !isHome ? 'text-neutral-500 hover:text-neutral-900' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.div
                        layoutId="nav-underline"
                        className={`absolute -bottom-1 left-0 right-0 h-px ${scrolled || !isHome ? 'bg-neutral-900' : 'bg-white'}`}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 -mr-2 transition-colors ${textColor}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.1 }}
                >
                  <Link
                    to={link.to}
                    className={`text-2xl font-serif tracking-wide ${
                      location.pathname === link.to ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-900'
                    } transition-colors`}
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
