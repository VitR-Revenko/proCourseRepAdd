const arr = new Array();

function arrCreate() {
  let mainArray = prompt("Type amount of arrays");
  for(let i = 0; i < mainArray; i++) {
      arr.push([]);
      let addArray = prompt("Type amount of data fields " + i);
      for(let ind = 0; ind < addArray; ind++) {
          let data = prompt("Type smthng " + ind);
          arr[i].push([data]);
      }
  }
  return console.log(arr);
}

arrCreate()