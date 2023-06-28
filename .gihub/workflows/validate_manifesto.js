// Node.js script to validate the manifesto

const crypto = require('crypto');

function validateManifesto(inscriptionId) {
  const explorer = 'https://ordinals.com';
  const url = `${explorer}/content/${inscriptionId}`;
  const manifestoHash = 'c2392fd77747c3c3bbf124d6b3d5e60ce5a255768bcf3212aa4a5ba9f2633097';

  fetch(url)
    .then((res) => res.text())
    .then((text) => {
      const hash = crypto.createHash('sha256').update(text).digest('hex');
      if (hash === manifestoHash) {
        console.log("Manifesto Is Valid");
      } else {
        console.log("Manifesto Not Valid");
        process.exit(1);  // Exit with error
      }
    })
    .catch((err) => {
      console.error('error:' + err);
      process.exit(1);  // Exit with error
    });
}

// Get the inscriptionId from the console argument
const inscriptionId = process.argv[2];
validateManifesto(inscriptionId);
