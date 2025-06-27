import fs  from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

  // 读取现有 README.md 内容
  let readmeContent = '';
  if (fs.existsSync('README.md')) {
    readmeContent = fs.readFileSync('README.md', 'utf8');
  }

  // 检查是否有"## 概述"标题
  let hasOverview = /## 概述/.test(readmeContent);
  let overviewHasContent = false;
  if (hasOverview) {
    // 检查概述下方是否有内容（不是空行）
    const match = readmeContent.match(/## 概述\n([\s\S]*?)(\n## |$)/);
    if (match && match[1].trim().length > 0) {
      overviewHasContent = true;
    }
  }

  let content = '';
  if (!hasOverview) {
    content += '## 概述\n';
  } else {
    // 保留原有概述部分
    const match = readmeContent.match(/## 概述\n([\s\S]*?)(\n## |$)/);
    if (match) {
      content += '## 概述\n' + match[1];
      if (!content.endsWith('\n')) content += '\n';
    }
  }

  // 笔记部分
  content += '\n\n\n## 笔记\n';
  const notes = getNotesList(notesDir);
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

  // 教案部分
  content += '\n\n\n## 教案\n';
  const docs = getDocsList(docsDir);
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

  return content;
}

fs.writeFileSync('README.md', generateReadme(), 'utf8');
console.log('README.md 已生成 🎉');