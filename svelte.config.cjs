const sveltePreprocess = require('svelte-preprocess');
const makeAttractionsImporter = require('attractions/importer.js');


module.exports = {
  preprocess: [sveltePreprocess()],
};