const r1 = /hello/;
const regexp = new RegExp(r1); // what (old way)

const res1 = regexp.test("hello"); // where
const res2 = regexp.exec("hello22"); // where

console.log(res1, "res1");
console.log(res2, "res2");

const r2 = /xxxxx/;
const res3 = r2.test("xxxxx");
const res4 = r2.exec("xxxxxxxxxxxxxxxxxxxx");

console.log(res3, "res3");
console.log(res4, "res4");

// end operator $
const r5 = /end$/;
const r52 = /ABC$/;
const res5 = r5.test("end");
const res52 = r52.test("abc");

console.log(res5, "res5");
console.log(res52, "res52");

// start operator ^
const r7 = /^start/;

const res7 = r7.test("start end");
console.log(res7, "res7");

// parametrical character
const r6 = /colou?r/; //color
const res62 = r6.test("color");
const res63 = r6.test("colour");

console.log(res62, "res62");
console.log(res63, "res63");

// not stable
// *, + cases matches quantity
const r8 = /a*/; // zero or more
const r81 = /([a-z])/i; // one or more

const res8 = r8.test("aaaaaa");
const res81 = r81.exec("aaaaaaaaaaaaaAsasasafdefregtyazr");
console.log(res81, "res81!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
console.log(res8, "res8");

// Quantificators

const r9 = /a{2}/g;
const r92 = /(a{1,3})/g;

const res9 = r92.test("Maaama");
const res92 = r9.exec("Maamaa");

console.log(res92, "res9!!!!!!!!!!!!!!!!!!");

// Selection tools

const r10 = /[^0-9]/g;

const res10 = r10.test("aaaa111");
console.log(res92, "res92");

const str = "aaaaaaaaaaaaaaaaa";
const matches = str.match(/a/g).length;
console.log(matches, "!!!!");

const str1 = "aaaaaa";

for (let i = 0; i < str1.length; i++) {
  if (i === "a") {
  }
}

str1.split("").every((el) => el.includes("a"));

const re = /(a)(b)(c)(d)/;
const result = re.exec("abcd, abcd");

console.log(result, "!!!");
