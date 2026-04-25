import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import FadeIn from '../components/FadeIn';

export default function About() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 lg:pt-40 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-medium mb-3">About</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-medium">Hi, I'm Mahelet</h1>
        </FadeIn>
      </section>

      {/* Bio */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <FadeIn direction="left">
            <div className="aspect-[4/5] rounded-sm overflow-hidden sticky top-28">
              <img
                src="/images/photo-06.jpg"
                alt="Mahelet"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <div className="lg:pt-8">
              <h2 className="font-serif text-2xl lg:text-3xl font-medium mb-6 leading-snug">
                I am so excited to meet you.
              </h2>

              <div className="space-y-5 text-neutral-600 font-light leading-relaxed">
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
              </div>

              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-800 transition-colors rounded-sm"
                >
                  Say Hello
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
