'use strict';
var fs = require('fs');
fs.createReadStream('.template-env')
    .pipe(fs.createWriteStream('.env'));