const fs = require('fs');
const path = require('path');

const dirs = ['app', 'components', 'lib'];
const root = path.join(__dirname, '..');

const regex = /\s*—\s*/g;
const replacement = ', ';

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      if (content.match(regex)) {
        let newContent = content.replace(regex, ', ');
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log('Modified: ' + fullPath);
      }
    }
  }
}

for (const dir of dirs) {
  const targetDir = path.join(root, dir);
  if (fs.existsSync(targetDir)) {
    processDirectory(targetDir);
  }
}
