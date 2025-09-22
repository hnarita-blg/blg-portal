# BLG Portal Site

BLG（Business Logic Group）のポータルサイトです。静的サイトとしてGitHub Pagesで公開されています。

## 🌐 サイトURL
https://hnarita-blg.github.io/blg-portal/

## 🛠 技術スタック

### フロントエンド
- **HTML5** - マークアップ
- **CSS3** - スタイリング
- **JavaScript** - インタラクティブ機能
- **jQuery 1.9.1** - DOM操作とイベント処理
- **ExtJS 3.4.0** - UIコンポーネントとアプリケーション基盤

### ワークフロー統合
- **SateraitoWF** - 承認ワークフロー統合

### デプロイメント
- **GitHub Actions** - 自動デプロイ
- **GitHub Pages** - ホスティング

## 📁 プロジェクト構成

```
/
├── src/                   # 開発用ソースコード
│   ├── js/               # JavaScript開発用
│   │   └── portal.js     # メインJSファイル
│   └── css/              # CSS開発用
│       └── portal.css    # メインCSSファイル
├── public/               # 公開対象ディレクトリ
│   ├── index.html        # メインページ
│   └── assets/           # 圧縮されたアセット
│       ├── css/          # 圧縮スタイルシート
│       ├── js/           # 圧縮JavaScript
│       └── img/          # 画像ファイル
├── scripts/              # ビルド・デプロイスクリプト
│   ├── build.js         # 圧縮ビルドスクリプト
│   └── deploy.js        # デプロイスクリプト
├── .github/workflows/    # GitHub Actions設定
├── package.json         # npm設定
└── README.md            # このファイル
```

## 🚀 開発・デプロイ

### 開発フロー
```bash
# 1. src/ でファイル編集
# 2. ビルドして圧縮版を生成
npm run build

# 3. ローカルプレビュー
npm run dev

# 4. デプロイ（ビルド + プッシュ）
npm run deploy
```

### 利用可能なコマンド
```bash
npm run build       # src/ → public/assets/ 圧縮ビルド
npm run dev         # ビルド + ローカルプレビュー
npm run deploy      # ビルド + インタラクティブデプロイ
npm run quick-deploy # ビルド + 素早いデプロイ
npm run preview     # ローカルサーバーでプレビュー
```

### 自動デプロイ
mainブランチにプッシュすると、GitHub Actionsが自動的にサイトを更新します。

## 📝 ライセンス
MIT License