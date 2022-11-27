# Count to 3

3 秒でぴったり止めるゲームです。

PWA Night CONFERENCE 2022 の登壇資料で紹介したサンプルコードです。

## 開発環境

デモサイトの開発には [Astro](https://astro.build) を使用しています。

### Project Structure

```
/
├── public/
│   ├── favicon.ico
│   └── script.js
├── src/
│   ├── components/
│   │   └── Button.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

### Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `npm install`   | Installs dependencies                       |
| `npm run dev`   | Starts local dev server at `localhost:3000` |
| `npm run build` | Build your production site to `./dist/`     |
