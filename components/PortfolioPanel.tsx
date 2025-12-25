'use client';

import { useState } from 'react';
import { profile } from '../data/profile';

const tabs = [
  { id: 'projects', label: 'Проекты', icon: '🎁' },
  { id: 'experience', label: 'Опыт', icon: '⭐' },
  { id: 'skills', label: 'Навыки', icon: '❄️' },
  { id: 'contact', label: 'Контакты', icon: '🎄' }
] as const;

type TabId = (typeof tabs)[number]['id'];

export default function PortfolioPanel() {
  const [activeTab, setActiveTab] = useState<TabId>('projects');

  return (
    <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-frost backdrop-blur-md">
      <div className="garland garland-panel" aria-hidden="true" />
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`tab ${activeTab === tab.id ? 'tab-active' : ''}`}
            data-snow="true"
          >
            <span aria-hidden="true">{tab.icon}</span>
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
                  <span aria-hidden="true">🎁</span>
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
                  <span aria-hidden="true">⭐</span>
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
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {profile.skills.map((skill) => (
              <div key={skill} className="panel-card" data-snow="true">
                <span className="text-lg">❄️ {skill}</span>
              </div>
            ))}
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
