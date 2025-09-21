#!/usr/bin/env node

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 BLG Portal Site Auto Deploy');
console.log('================================');

// コミットメッセージの入力
rl.question('コミットメッセージを入力してください (空白の場合は自動生成): ', (message) => {
  const commitMessage = message.trim() || `Update site content - ${new Date().toLocaleString('ja-JP')}`;

  try {
    console.log('\n📝 変更をステージング中...');
    execSync('git add .', { stdio: 'inherit' });

    console.log('💾 コミット中...');
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });

    console.log('🌐 GitHubにプッシュ中...');
    execSync('git push origin main', { stdio: 'inherit' });

    console.log('\n✅ デプロイ完了！');
    console.log('🔗 サイトURL: https://hnarita-blg.github.io/blg-portal/');
    console.log('⏳ GitHub Actionsによる反映まで数分お待ちください');

  } catch (error) {
    console.error('\n❌ デプロイエラー:', error.message);
    process.exit(1);
  }

  rl.close();
});