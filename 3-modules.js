//CommonJs--> every file is Module
//Modules -->encapsulated code (only sharing minimum)

const names = require('./4-names_module');
const sayHi = require('./5-utils-module')
const data = require('./6-alternative-flavour')

require('./7-mind-granade');



sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
