const fs = require('fs');
const path = require('path');

const root = __dirname;
const read = (name) => fs.readFileSync(path.join(root, 'assets', name)).toString('base64');

// Every image is inlined: the built bundle must run without extra static assets.
const assets = {
  __GANYU_IMAGE_BASE64__: read('ganyu-bg.webp'),
  __CIV_ICON_40__: read('civ-icon-40.png'),
  __LOTUS_64__: read('lotus.png')
};

let output = fs.readFileSync(path.join(root, 'src', 'client.template.js'), 'utf8');
for (const [placeholder, value] of Object.entries(assets)) {
  if (!output.includes(placeholder)) throw new Error(`placeholder ${placeholder} missing`);
  output = output.split(placeholder).join(value);
}
fs.writeFileSync(path.join(root, 'lib', 'client.js'), output);
console.log(`built ganyu-theme/lib/client.js (${(output.length / 1024).toFixed(1)} KiB)`);
