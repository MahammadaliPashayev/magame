# Задача для Web — Лендинг MaGame + Privacy Policy

## Цель
Создать статический сайт MaGame: лендинг + страница Privacy Policy. Готовый к деплою на GitHub Pages / Vercel.

## Структура файлов
```
index.html      — главный лендинг
privacy.html    — Privacy Policy (контент из PRIVACY_POLICY.md в этой папке)
style.css       — общие стили
```

## 1. index.html — Лендинг

### Секции:
1. **Hero** — название MaGame, слоган ("Party games for your crew" / "Игры для компании"), кнопки download (App Store / Google Play — пока заглушки "Скоро")
2. **Games** — карточки игр: Шпион 🕵️, Мафия 🎭, Соло режим 🎮 (Sudoku, 2048, Minesweeper и др.)
3. **Features** — почему MaGame: мультиплеер, оффлайн соло игры, лиги/прогрессия (Rookie→Phantom)
4. **Download** — призыв скачать
5. **Footer** — ссылки: Privacy Policy, контакт (mahammadalipashayev@gmail.com), © 2026 MaGame

## 2. privacy.html — Privacy Policy

Преобразуй содержимое `PRIVACY_POLICY.md` (лежит в этой папке) в красивую HTML страницу:
- Тот же тёмный стиль что и лендинг
- Читаемая типографика, отступы
- Якорные ссылки на разделы
- Кнопка "← Back to home"

## Дизайн
- Dark-first: фон #0D0D1A
- Акцент: #7C6AFF
- Glassmorphism на карточках (полупрозрачность + blur + border)
- Шрифт: Inter или системный sans-serif
- Адаптив: mobile-first, корректно на телефоне и десктопе
- Плавные анимации появления при скролле

## Языки
Пока на русском (основная аудитория). Структуру сделай так чтобы потом легко добавить EN/AZ.

## После создания
Напиши инструкцию как задеплоить на GitHub Pages чтобы получить URL вида magame.app/privacy или username.github.io/magame.
