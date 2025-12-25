'use client';

import { useState } from 'react';
import { profile } from '../data/profile';
import Icon from './Icon';

const tabs = [
  { id: 'projects', label: 'Проекты', icon: 'sparkles' },
  { id: 'experience', label: 'Опыт', icon: 'briefcase' },
  { id: 'skills', label: 'Навыки', icon: 'layers' },
  { id: 'education', label: 'Образование', icon: 'graduation' },
  { id: 'contact', label: 'Контакты', icon: 'chat' }
] as const;

type TabId = (typeof tabs)[number]['id'];

export default function PortfolioPanel() {
  const [activeTab, setActiveTab] = useState<TabId>('projects');

  return (
    <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-6 shadow-frost backdrop-blur-xl">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`tab ${activeTab === tab.id ? 'tab-active' : ''}`}
            data-snow="true"
          >
            <Icon name={tab.icon} className="icon-soft" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-6">
        {activeTab === 'projects' && (
          <div className="space-y-5">
            {profile.projects.map((project) => (
              <article
                key={project.title}
                className="panel-card"
                data-snow="true"
              >
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Icon name="sparkles" className="icon-soft icon-lg" />
                  {project.title}
                </div>
                <p className="text-white/70">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="link-highlight"
                  target="_blank"
                  rel="noreferrer"
                >
                  Подробнее
                </a>
              </article>
            ))}
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="space-y-5">
            {profile.experience.map((job) => (
              <article
                key={`${job.company}-${job.period}`}
                className="panel-card"
                data-snow="true"
              >
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Icon name="briefcase" className="icon-soft icon-lg" />
                  {job.role}
                </div>
                <p className="text-white/70">
                  {job.company} · {job.period}
                </p>
                <ul className="list-inside list-disc space-y-1 text-white/70">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="space-y-5">
            <div className="panel-card" data-snow="true">
              <h3 className="text-base font-semibold text-white">Product</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.skills.product.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="panel-card" data-snow="true">
              <h3 className="text-base font-semibold text-white">PM / Process</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.skills.process.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="panel-card" data-snow="true">
              <h3 className="text-base font-semibold text-white">
                Analytics / Research
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.skills.analytics.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="panel-card" data-snow="true">
              <h3 className="text-base font-semibold text-white">Tools</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.skills.tools.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="space-y-5">
            {profile.education.map((item) => (
              <article key={item.title} className="panel-card" data-snow="true">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Icon name="graduation" className="icon-soft icon-lg" />
                  {item.title}
                </div>
                <p className="text-white/70">{item.detail}</p>
                {item.period && (
                  <p className="text-sm text-white/60">{item.period}</p>
                )}
              </article>
            ))}
            <div className="panel-card" data-snow="true">
              <h3 className="text-base font-semibold text-white">Languages</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.languages.map((language) => (
                  <span key={language} className="tag">
                    {language}
                  </span>
                ))}
              </div>
            </div>
            <div className="panel-card" data-snow="true">
              <h3 className="text-base font-semibold text-white">Other studies</h3>
              <ul className="mt-3 list-inside list-disc space-y-1 text-white/70">
                {profile.otherStudies.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="space-y-4">
            <div className="panel-card" data-snow="true">
              <p className="text-white/70">Почта</p>
              <a
                className="link-highlight"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </div>
            <div className="panel-card" data-snow="true">
              <p className="text-white/70">Телефон</p>
              <a className="link-highlight" href={`tel:${profile.phone}`}>
                {profile.phone}
              </a>
            </div>
            <div className="panel-card" data-snow="true">
              <p className="text-white/70">Ссылки</p>
              <div className="flex flex-wrap gap-3">
                {profile.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="chip"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
