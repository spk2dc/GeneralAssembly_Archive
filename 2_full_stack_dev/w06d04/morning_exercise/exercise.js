let arr = [[10, 20, 30],
           [40, 50, 60],
           [70, -80, 90]];

function largestSum(arr) {
  let rows = [];
  let columns = [];
  let diagnol =[];
  let sumDiagDown = 0;
  let sumDiagUp = 0;
  for (let i = 0; i < arr.length ; i++){
    let sumRow = 0;
    let sumCol = 0;
    for (let j = 0; j < arr[i].length ; j++){
      sumRow += arr[i][j];
      sumCol += arr[j][i];
    }
    sumDiagDown += arr[i][i];
    sumDiagUp   += arr[i][arr.length-1 -i];
    rows.push(sumRow);
    columns.push(sumCol);
  }
  diagnol.push(sumDiagDown);
  diagnol.push(sumDiagUp);

  console.log(rows, columns, diagnol);
  //console.log(Math.max(Math.max(...rows), Math.max(...columns),Math.max(...diagnol)));
  return Math.max(Math.max(...rows), Math.max(...columns),Math.max(...diagnol))

}

console.log(largestSum(arr));

// function makeArray(size) {
//   let outerArray = [];
//   for(let i = 0; i < size ; i++){
//     let innerArray = [];
//     let holdMe;
//     for (let j = 0; j < size; j++){
//       holdMe = Math.floor(Math.random()*1000)
//       if (beNegative()){
//         holdMe = holdMe * -1 ;
//       }
//       innerArray.push(holdMe)
//     }
//     outerArray.push(innerArray)
//   }
//   console.log(outerArray);
//   return outerArray;
// }

// function beNegative(){
//   let theOdds = Math.random();
//   if (theOdds > .7){
//     return true;
//   } else {
//     return false;
//   }
//
// }
//
// var bigArray = [ [ 887, -541, -430, -590, 117, 172, -319, -18 ],
//   [ -269, 964, 209, 840, -456, 156, 365, -568 ],
//   [ 289, -41, 488, 198, 240, 124, -427, 214 ],
//   [ 452, 894, 968, -149, 683, 977, 741, -805 ],
//   [ 181, -714, -950, 107, 800, 751, -143, 380 ],
//   [ 152, 493, 707, 914, 37, 356, -625, 608 ],
//   [ -345, 906, 83, 676, 723, 381, 557, -183 ],
//   [ 199, -943, -710, 565, 193, 315, 281, 245 ] ]
