# BLG Portal Site

BLG（Business Logic Group）のポータルサイトです。静的サイトとしてGitHub Pagesで公開されています。

## 🌐 サイトURL
https://hnarita-blg.github.io/blg-portal/

## 🛠 技術スタック

### フロントエンド
- **HTML5** - マークアップ
- **CSS3** - スタイリング
- **JavaScript** - インタラクティブ機能
- **jQuery 1.7.1** - DOM操作とイベント処理
- **ExtJS 3.4.0** - UIコンポーネントとアプリケーション基盤

### ワークフロー統合
- **SateraitoWF** - 承認ワークフロー統合

### デプロイメント
- **GitHub Actions** - 自動デプロイ
- **GitHub Pages** - ホスティング

## 📁 プロジェクト構成

```
/
├── public/                 # 公開対象ディレクトリ
│   ├── index.html         # メインページ
│   └── assets/            # アセット
│       ├── css/           # スタイルシート
│       ├── js/            # JavaScript
│       └── img/           # 画像ファイル
├── .github/workflows/     # GitHub Actions設定
└── README.md              # このファイル
```

## 🚀 開発・デプロイ

### 自動デプロイ
mainブランチにプッシュすると、GitHub Actionsが自動的にサイトを更新します。

### ローカル開発
```bash
# ローカルサーバーでプレビュー（Python 3が必要）
python3 -m http.server 8000 --directory public

# ブラウザで http://localhost:8000 にアクセス
```

## 📝 ライセンス
MIT License