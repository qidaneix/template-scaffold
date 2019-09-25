import { ArrayBi } from "./foo";
import { write, ArrayBi as ArrayBiFromJS } from "./baz";
import { ArrayNiu } from "./bar";

const aBi = new ArrayBi(4);
const aBiQQQ = new ArrayBiFromJS(4);
const aNiu = new ArrayNiu(4);
write("this one");
console.log("hello world");
console.log(aBi.noSame());
console.log(aBiQQQ.noSame());
console.log(aNiu.noSame());
