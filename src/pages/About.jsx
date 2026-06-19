import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import FadeIn from '../components/FadeIn';

export default function About() {
  return (
    <PageTransition>
      <section className="pt-32 lg:pt-36 pb-16 px-6 lg:px-10 max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#6b6560] mb-4">About</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-medium tracking-tight max-w-xl">
            Hi, I'm Mahelet.
          </h1>
        </FadeIn>
      </section>

      <section className="px-6 lg:px-10 max-w-6xl mx-auto pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <FadeIn>
            <div className="aspect-[3/4] overflow-hidden bg-[#e8e4df]">
              <img
                src="/images/about-me.jpg"
                alt="Mahelet"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="lg:pt-6 space-y-6 text-[#6b6560] font-light leading-[1.8]">
              <p className="font-serif text-xl text-[#141414] font-medium leading-snug">
                I am so excited to meet you.
              </p>
              <p>
                Photography began as something I simply loved doing, and over time it became a way for me to connect with people and the world around me. I'm drawn to real moments — the kind that aren't forced — and to the way light, seasons, and emotion come together to tell a story.
              </p>
              <p>
                I love photographing people in a way that feels natural and true to who they are. Boston is a big part of my inspiration — the character of its streets, the charm of its cafés and bookstores, and the details in its architecture all influence how I see and capture images.
              </p>
              <p>
                When we work together, my goal is to keep things relaxed and genuine. I'll guide you when needed, pay attention to the small details, and create a space where you can feel comfortable just being yourself.
              </p>
              <p>
                More than anything, I want you to leave with images that feel real to you — and an experience that felt easy, meaningful, and memorable.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-4 text-sm text-[#141414] border-b border-[#141414]/30 pb-0.5 hover:border-[#141414] transition-colors"
              >
                Say hello
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
