const crypto = require('crypto');

// Function to validate the manifesto
function validateManifesto(inscriptionId) {
  const explorer = 'https://ordinals.com';
  const url = `${explorer}/content/${inscriptionId}`;
  const manifestoHash = 'c2392fd77747c3c3bbf124d6b3d5e60ce5a255768bcf3212aa4a5ba9f2633097';

  fetch(url)
    .then((res) => res.text())
    .then((text) => {
      const hash = crypto.createHash('sha256').update(text).digest('hex');
      const isValid = hash === manifestoHash;
      if (isValid) {
        console.log("Manifesto Is Valid");
      } else {
        console.log("Not Valid");
      }
    })
    .catch((err) => console.error('error:' + err));
}

// Get the inscriptionId from the console
const inscriptionId = process.argv[2];
validateManifesto(inscriptionId);
