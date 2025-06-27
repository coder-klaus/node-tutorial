const fs = require('fs');
const path = require('path');

const readmePath = path.join(__dirname, 'README.md');
const repoUrl = 'https://github.com/coder-klaus/node-tutorial/tree/';

let content = fs.readFileSync(readmePath, 'utf-8');

// 只处理表格数据行，且不处理分隔线
content = content.replace(
  /^(\|\s*)([a-zA-Z0-9_\-\/]+)(\s*\|)/gm,
  (match, p1, branch, p3) => {
    // 跳过分隔线
    if (branch.replace(/-/g, '').trim() === '') {
      return match;
    }
    // 如果已经是超链接，直接返回
    if (/^\[.+\]\(.+\)$/.test(branch)) {
      return match;
    }
    // 否则加上超链接
    return `${p1}[${branch}](${repoUrl}${branch})${p3}`;
  }
);

fs.writeFileSync(readmePath, content, 'utf-8');
console.log('✅ 分支名已自动加上超链接！');