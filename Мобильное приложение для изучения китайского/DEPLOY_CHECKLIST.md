# ✅ Чек-лист для деплоя на Vercel

## Перед загрузкой на GitHub

- [ ] Файл `index.html` в корне проекта
- [ ] Файл `package.json` в корне проекта  
- [ ] Папка `/src` с файлом `main.tsx`
- [ ] Папка `/src/app` с файлом `App.tsx`
- [ ] Файл `vite.config.ts` в корне проекта
- [ ] Файл `.gitignore` (чтобы не загружать node_modules)

## Загрузка на GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ваш-username/название-репозитория.git
git push -u origin main
```

## В Vercel Dashboard

1. New Project → Import Git Repository
2. Выбрать ваш репозиторий
3. **НЕ МЕНЯТЬ настройки** - Vercel сам определит Vite
4. Нажать Deploy
5. Ждать 2-3 минуты

## Если показывает 404

### Вариант 1: Проверьте настройки в Vercel

1. Зайдите в ваш проект в Vercel
2. Settings → General → Build & Development Settings
3. Убедитесь что:
   - Framework Preset: **Vite**
   - Build Command: **`npm run build`** (или оставьте пустым)
   - Output Directory: **`dist`**
   - Install Command: **`npm install`** (или оставьте пустым)

### Вариант 2: Пересоздайте проект

1. Удалите проект в Vercel
2. Создайте заново через Import Git Repository
3. Не трогайте настройки - пусть Vercel определит автоматически

### Вариант 3: Проверьте логи билда

1. Deployments → последний деплой
2. Вкладка "Build Logs"
3. Ищите ошибки красным цветом
4. Пришлите мне текст ошибки

## Важно! 

Структура проекта ДОЛЖНА быть такой:

```
ваш-репозиторий/
├── index.html          ← в корне!
├── package.json        ← в корне!
├── vite.config.ts      ← в корне!
└── src/
    ├── main.tsx        ← точка входа
    └── app/
        └── App.tsx
```

Если index.html лежит в папке (например /public/), Vercel его НЕ найдет!
