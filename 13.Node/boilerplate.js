const fs = require('fs');

const folderName = process.argv[2] || 'Project';

// console.log(fs);

// Async version
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//   console.log('In the Callbakc');
//   if (err) throw err;
// });

// Sync version
try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, '');
  fs.writeFileSync(`${folderName}/app.js`, '');
  fs.writeFileSync(`${folderName}/styles.css`, '');
} catch (e) {
  console.log('Something went wrong...');
  console.log(e);
}
