const fs = require('fs');
const path = require('path');

const dirs = ['app', 'components', 'lib'];
const root = path.join(__dirname, '..');

const replacements = [
  { regex: /\bSuppliers\b/g, replacement: 'Manufacturers' },
  { regex: /\bsuppliers\b/g, replacement: 'manufacturers' },
  { regex: /\bSupplier\b/g, replacement: 'Manufacturer' },
  { regex: /\bsupplier\b/g, replacement: 'manufacturer' },
  { regex: /\bBuyers\b/g, replacement: 'Clients' },
  { regex: /\bbuyers\b/g, replacement: 'clients' },
  { regex: /\bBuyer\b/g, replacement: 'Client' },
  { regex: /\bbuyer\b/g, replacement: 'client' },
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      for (const r of replacements) {
        if (content.match(r.regex)) {
          content = content.replace(r.regex, r.replacement);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
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
