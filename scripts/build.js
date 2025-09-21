#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔨 Building assets for production...');

// ディレクトリ作成
function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

// CSS圧縮処理
function minifyCSS(css) {
    return css
        .replace(/\/\*[\s\S]*?\*\//g, '') // コメント削除
        .replace(/\s+/g, ' ')            // 複数の空白を1つに
        .replace(/;\s*}/g, '}')          // 最後のセミコロン削除
        .replace(/{\s+/g, '{')           // 開始括弧後の空白削除
        .replace(/}\s+/g, '}')           // 終了括弧後の空白削除
        .replace(/:\s+/g, ':')           // コロン後の空白削除
        .replace(/,\s+/g, ',')           // カンマ後の空白削除
        .trim();
}

// JavaScript圧縮処理（ES5準拠）
function minifyJS(js) {
    return js
        .replace(/\/\*\*[\s\S]*?\*\//g, '') // JSDocコメント削除
        .replace(/\/\*[\s\S]*?\*\//g, '')   // ブロックコメント削除
        .replace(/\/\/.*$/gm, '')           // 行コメント削除
        .replace(/const\s+/g, 'var ')       // const → var (ES5準拠)
        .replace(/let\s+/g, 'var ')         // let → var (ES5準拠)
        .replace(/`([^`]*)`/g, function(match, content) {
            // テンプレートリテラルを文字列連結に変換
            return "'" + content.replace(/\$\{([^}]+)\}/g, "' + $1 + '") + "'";
        })
        .replace(/\s+/g, ' ')               // 複数の空白を1つに
        .replace(/;\s*}/g, '}')             // 最後のセミコロン削除
        .replace(/{\s+/g, '{')              // 開始括弧後の空白削除
        .replace(/}\s+/g, '}')              // 終了括弧後の空白削除
        .replace(/,\s+/g, ',')              // カンマ後の空白削除
        .trim();
}

try {
    // 出力ディレクトリ作成
    ensureDir('public/assets/css');
    ensureDir('public/assets/js');

    // CSS処理
    const cssPath = 'src/css/portal.css';
    if (fs.existsSync(cssPath)) {
        const css = fs.readFileSync(cssPath, 'utf8');
        const minifiedCSS = minifyCSS(css);
        fs.writeFileSync('public/assets/css/portal.css', minifiedCSS);
        console.log('✅ CSS minified: portal.css');
    }

    // JavaScript処理
    const jsPath = 'src/js/portal.js';
    if (fs.existsSync(jsPath)) {
        const js = fs.readFileSync(jsPath, 'utf8');
        const minifiedJS = minifyJS(js);
        fs.writeFileSync('public/assets/js/portal.js', minifiedJS);
        console.log('✅ JS minified: portal.js (ES5 compatible)');
    }

    console.log('🎉 Build completed successfully!');

} catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
}