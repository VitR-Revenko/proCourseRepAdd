// 1)
const mainArr = prompt("Main array length");
const addArr = prompt("Additional array length");

const arr = new Array(+mainArr).fill(0)
  .map((_, mainInd) => new Array(+addArr).fill(0)
  .map((_, addInd) => prompt(`Element ${addInd} in array ${mainInd}`))
  );

console.log("Result: " + arr);
