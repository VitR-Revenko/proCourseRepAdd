function del(str, delArr) {
  let splitString = str.split("");
  let delParam = delArr;
  delParam.forEach((element) => {
    for (let i = 0; i < splitString.length; i++) {
      if (splitString[i] === element) {
        delete splitString[i];
      }
    }
  });
  return splitString.join("");
}

console.log(del("hello world", ["l", "d"])); // heo wor
