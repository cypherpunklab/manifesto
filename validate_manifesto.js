const fs = require('fs');
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
        console.log('Manifesto is valid.');

        // Check if the inscriptionId is already in collection.json
        const collection = JSON.parse(fs.readFileSync('collection.json', 'utf8'));
        const existingInscription = collection.find(item => item.inscriptionId === inscriptionId);

        if (existingInscription) {
          console.log(`InscriptionId ${inscriptionId} is already submitted. Please inscribe your own manifesto.`);
        } else {
          console.log(`InscriptionId ${inscriptionId} is not found in the collection.`);
        }
      } else {
        console.log('Manifesto is not valid.');
      }
    })
    .catch((err) => console.error('Error:', err));
}

// Get the inscriptionId from the console
const inscriptionId = process.argv[2];
validateManifesto(inscriptionId);
