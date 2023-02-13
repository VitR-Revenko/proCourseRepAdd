// 1)
const mainArr = prompt("Main array length");
const addArr = prompt("Additional array length");

const arr = new Array(+mainArr).fill(0)
  .map((_, mainInd) => new Array(+addArr).fill(0)
  .map((_, addInd) => prompt(`Element ${addInd} in array ${mainInd}`))
  );

console.log("Result: " + arr);
alert("2 завдання в консолі");

// 2)
function del(str, [p1, p2]) {
  let splitString = str.split("");
  let delParam = [p1, p2];

  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] === delParam[0]) {
      delete splitString[i];
    }
    if (splitString[i] === delParam[1]) {
      delete splitString[i];
    }
  }

  return splitString.join("");
}

console.log(del("hello world", ["l", "d"])); // heo wor