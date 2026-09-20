# AI Roleplay Generator — тестовый лендинг

Визуальная копия лендинга [ourdream.ai/generate/ai-roleplay-generator](https://ourdream.ai/generate/ai-roleplay-generator) на **Next.js (App Router) + TypeScript + Tailwind**. Навигация и CTA **никуда не ведут** — только макет. Ручной UI-тест пройден.

## Что сделано

- Sticky-хедер (лого + Login / Join Free) с `backdrop-blur: 24px`
- Сайдбар + контент под хедером; на мобилке меню выезжает слева
- Все секции референса: hero, how-to, сценарии, NSFW, сравнение, отзывы, FAQ, related, футер на всю ширину
- Базовая семантика: `header` / `nav` / `main` / `article` / `section` / `h1–h3` / `table` / FAQ
- Клики — `DeadLink` / `InlineDeadLink` (без роутинга)
- Static export под **GitHub Pages** (`output: 'export'`, `basePath=/AI-Landing` в CI)

## Скорость

- Локальные **WebP** (~150 KB hero / generate) + мелкие PNG аватаров
- `next/image` + `sizes`; `priority` у LCP (hero + logo)
- `images.unoptimized` для static export (нет Image Optimization Server)
- Geist через `next/font` (`display: swap`)
- Минимум JS: хедер/меню (включая slide-in) и FAQ-аккордеон
- Статический `out/` без Node runtime на хостинге

## SEO

- Title, description, canonical, Open Graph, Twitter card
- `robots: index, follow`
- Один `h1`, иерархия заголовков, landmark-секции
- Meaningful `alt` у контентных картинок
- Таблица сравнения с `scope`
- FAQ: `h3` + раскрываемый текст

## Стек

| | |
|---|---|
| Framework | Next.js 16 (App Router), static export |
| Language | TypeScript |
| Styles | Tailwind CSS 4 |
| Lint / format | ESLint + Prettier |
| Package manager | yarn |
| Deploy | GitHub Pages (Actions) |

## Локально

```bash
yarn install
yarn dev
```

Проверки:

```bash
yarn lint
yarn build
```

Сборка как на Pages (с `basePath`):

```bash
yarn build:gh-pages
```

## Структура

```
app/                  # layout, page, globals
components/
  AppShell.tsx        # sticky header + sidebar + mobile drawer
  LandingPage.tsx     # секции лендинга
  SiteFooter.tsx      # футер на всю ширину
  DeadLink.tsx        # кнопки без навигации
  …
lib/content.ts        # тексты и данные
public/images|logos   # ассеты
.github/workflows/    # GH Pages deploy
```
