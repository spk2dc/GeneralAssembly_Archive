

let greatestSum = (arr) => {
    let max = 0
    let rowSum = [0, 0, 0]
    let colSum = [0, 0, 0]
    let diagSum = 0, revDiagSum = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            rowSum[i] += arr[i][j]
            colSum[j] += arr[i][j]

            if (j == i) {
                diagSum += arr[i][j]
            }
            if ((i + j) == (arr.length - 1)) {
                revDiagSum += arr[i][j]
            }
        }

        rowSum = 0

    }

    for (let x = 0; x < arr.length; x++) {
        if (colSum[x] > max) {
            max = colSum[x]
        }
        if (rowSum[x] > max) {
            max = rowSum[x]
        }

    }
    if (diagSum > max) {
        max = diagSum
    }
    if (revDiagSum > max) {
        max = revDiagSum
    }
    console.log(max)
}


const arr = [[10, 20, 30],
[40, 50, 60],
[70, -80, 90]];

greatestSum(arr); //180

const bigArray =
    [[887, -541, -430, -590, 117, 172, -319, -18],
    [-269, 964, 209, 840, -456, 156, 365, -568],
    [289, -41, 488, 198, 240, 124, -427, 214],
    [452, 894, 968, -149, 683, 977, 741, -805],
    [181, -714, -950, 107, 800, 751, -143, 380],
    [152, 493, 707, 914, 37, 356, -625, 608],
    [-345, 906, 83, 676, 723, 381, 557, -183],
    [199, -943, -710, 565, 193, 315, 281, 245]];

greatestSum(bigArray) //4148