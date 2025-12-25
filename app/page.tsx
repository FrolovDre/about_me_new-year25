import Image from 'next/image';
import PortfolioPanel from '../components/PortfolioPanel';
import { profile } from '../data/profile';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#0b1220] via-[#0f1f2e] to-[#0b1220] text-snow">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-14 lg:flex-row lg:items-start lg:gap-12">
        <section className="relative flex w-full flex-col items-start gap-6 lg:w-1/2">
          <div className="relative">
            <span className="bell" aria-hidden="true">🔔</span>
            <Image
              src="/profile.jpg"
              alt="Фото профиля"
              width={220}
              height={220}
              className="relative z-10 rounded-3xl border border-white/20 shadow-frost"
              priority
            />
          </div>
          <div className="space-y-3">
            <h1
              className="text-3xl font-semibold leading-tight md:text-4xl"
              data-snow="true"
            >
              {profile.name}
            </h1>
            <p
              className="text-xl text-white/80"
              data-snow="true"
            >
              {profile.role}
            </p>
            <div className="space-y-2 text-white/70">
              {profile.summary.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
              <p className="mb-1 text-white/60">What I’m looking for</p>
              <p data-snow="true">{profile.lookingFor}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-white/80">
            <div className="flex items-center gap-2">
              <span aria-hidden="true">📍</span>
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <span aria-hidden="true">✉️</span>
              <a
                href={`mailto:${profile.email}`}
                className="link-highlight"
              >
                {profile.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span aria-hidden="true">☎️</span>
              <a href={`tel:${profile.phone}`} className="link-highlight">
                {profile.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span aria-hidden="true">🌐</span>
              <a
                href={profile.website}
                className="link-highlight"
                target="_blank"
                rel="noreferrer"
              >
                {profile.website}
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="chip"
                target="_blank"
                rel="noreferrer"
                data-snow="true"
              >
                {social.label}
              </a>
            ))}
          </div>
          <a
            href={profile.cta.href}
            className="cta" 
            data-snow="true"
          >
            {profile.cta.label}
          </a>
        </section>

        <section className="w-full lg:w-1/2">
          <PortfolioPanel />
        </section>
      </div>
    </main>
  );
}
