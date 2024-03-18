const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

function checkFile(file) {
  const content = fs.readFileSync(file, 'utf8');
  const yamlContent = content.split('---')[1];
  try {
    yaml.load(yamlContent);
  } catch (e) {
    console.error(`Error in file ${file}:`, e);
  }
}

function checkDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      checkDirectory(fullPath);
    } else if (path.extname(fullPath) === '.md') {
      checkFile(fullPath);
    }
  }
}

checkDirectory('src/content/post');
