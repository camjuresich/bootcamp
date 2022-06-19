
// const langs = require("langs");

import { langs, colors } from './common.cjs';
import { argv } from 'process';
import { franc, francAll } from 'franc';
 
// print process.argv

const message = argv[2];

const identify = langs.where('3', franc(message))
let answer
if (!identify) {
  answer = 'something went wrong... perhaps your sample is too small'.red
} else {
  answer = identify['name'].green
}
console.log(answer)

// identifyLang(identify)