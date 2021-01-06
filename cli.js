#!/usr/bin/env node

var wikis = require('./App'),
chalk = require('chalk'),
figlet = require('figlet'),
options =  require('minimist')(process.argv.slice(2));
(async () => {
var outp = await wikis(options.f || options.find || 'github')
figlet(outp.title, (data,err) => {
if(err) throw err
console.log(chalk.green(data))
console.log(outp.desc)
console.log(outp.lang)
})
})();
