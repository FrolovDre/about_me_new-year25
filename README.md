# Christmas / New Year Portfolio (Next.js + Tailwind)

Праздничный одностраничный лендинг-портфолио на Next.js (App Router) с эффектами снега, огня от курсора и накопления снега на элементах.

## Быстрый старт

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Production сборка

```bash
npm run build
npm start
```

## Деплой на Vercel

1. Загрузите репозиторий в GitHub.
2. В Vercel выберите **New Project** → импортируйте репозиторий.
3. Настройки по умолчанию подойдут: `npm install` и `npm run build`.
4. Нажмите **Deploy**.

## Где менять контент

Весь контент лежит в одном файле:

- `data/profile.ts`

Плейсхолдеры помечены `<<...>>` — замените их своими данными.

Медиа-файлы:

- `public/profile.jpg` — фото профиля (заглушка)
- `public/CV.pdf` — PDF резюме (заглушка)

## Структура

- `app/layout.tsx`, `app/page.tsx` — разметка страницы
- `components/Snowfall.tsx` — снегопад на canvas
- `components/CursorFireTrail.tsx` — огненный след и таяние снега
- `components/PortfolioPanel.tsx` — карточка с табами
- `app/globals.css` — основные стили

---

Собирается командой: `npm install && npm run build`.
