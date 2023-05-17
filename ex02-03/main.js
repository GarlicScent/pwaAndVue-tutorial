import { conHello, fnPlusNumbers } from "./library_named.js";
console.log(conHello, "export with names");
console.log(fnPlusNumbers(1, 2));

import * as myLibrary from "./library_named.js";
console.log(myLibrary.conHello, "using * to import");
console.log(myLibrary.fnPlusNumbers(3, 4));

import fnMyPlusNumbers from "./library_default.js";
console.log(fnMyPlusNumbers(5, 6));
