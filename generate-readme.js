const fs = require('fs');
const path = require('path');

// 递归获取 docs 目录下所有 md 文件（带子目录）
function getDocsList(dir, base = 'vaults/docs') {
  let result = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (item.isDirectory()) {
      result = result.concat(getDocsList(path.join(dir, item.name), base));
    } else if (item.isFile() && item.name.endsWith('.md')) {
      const relDir = path.relative(base, dir);
      result.push({
        dir: relDir,
        file: item.name
      });
    }
  }
  return result;
}

// 递归获取 notes 目录下所有 md 文件（带子目录）
function getNotesList(dir, base = 'vaults/notes') {
  let result = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (item.isDirectory()) {
      result = result.concat(getNotesList(path.join(dir, item.name), base));
    } else if (item.isFile() && item.name.endsWith('.md')) {
      const relDir = path.relative(base, dir);
      result.push({
        dir: relDir,
        file: item.name
      });
    }
  }
  return result;
}

// 生成 README 内容
function generateReadme() {
  const docsDir = path.join(__dirname, 'vaults', 'docs');
  const notesDir = path.join(__dirname, 'vaults', 'notes');

  const docs = getDocsList(docsDir);
  const notes = getNotesList(notesDir);

  let content = '## 概述\n数据库基础知识概览\n\n';

  content += '## 教案\n';
  // 按子目录分组
  const docsByDir = {};
  docs.forEach(doc => {
    if (!docsByDir[doc.dir]) docsByDir[doc.dir] = [];
    docsByDir[doc.dir].push(doc.file);
  });
  Object.keys(docsByDir).forEach(dir => {
    if (dir && dir !== '.') {
      content += `  + ${dir}\n`;
      docsByDir[dir].forEach(file => {
        content += `    - [${file.replace(/\.md$/, '')}](./vaults/docs/${dir}/${file})\n`;
      });
    } else {
      docsByDir[dir].forEach(file => {
        content += `  + [${file.replace(/\.md$/, '')}](./vaults/docs/${file})\n`;
      });
    }
  });

  content += '\n## 笔记\n';
  // 按子目录分组
  const notesByDir = {};
  notes.forEach(note => {
    if (!notesByDir[note.dir]) notesByDir[note.dir] = [];
    notesByDir[note.dir].push(note.file);
  });
  Object.keys(notesByDir).forEach(dir => {
    if (dir && dir !== '.') {
      content += `  + ${dir}\n`;
      notesByDir[dir].forEach(file => {
        content += `    - [${file.replace(/\.md$/, '')}](./vaults/notes/${dir}/${file})\n`;
      });
    } else {
      notesByDir[dir].forEach(file => {
        content += `  + [${file.replace(/\.md$/, '')}](./vaults/notes/${file})\n`;
      });
    }
  });

  return content;
}

fs.writeFileSync('README.md', generateReadme(), 'utf8');
console.log('README.md 已生成 🎉');