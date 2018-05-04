const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files =[
      './dist/elementApp/polyfills.js',
      './dist/elementApp/runtime.js',
      './dist/elementApp/styles.css',
      './dist/elementApp/main.js'
    ]

    await fs.ensureDir('elements')

    await concat(files, 'elements/user-poll.js')
    console.info('Elements created successfully!')

})()
