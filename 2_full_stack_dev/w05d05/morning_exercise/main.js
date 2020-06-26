

let findWordFrequencies = (str) => {
    let strArr = str.toLowerCase().split(' ')
    let freq = {}

    for (const i in strArr) {
        if (freq.hasOwnProperty(strArr[i])) {
            freq[strArr[i]] += 1

        } else {
            freq[strArr[i]] = 1
        }
    }
    
    console.log(strArr);
    console.log(freq);
    return freq
}

let findHighestFrequency = (objParam) => {
    let max = Object.keys(objParam)[0]
    
    for (const key in objParam) {
        if (objParam[key] > objParam[max]) {
            max = key
        }
    }
    
    console.log(`${max}: ${objParam[max]}`);
}

let obj = findWordFrequencies('That that is is that that is not is not')
findHighestFrequency(obj)