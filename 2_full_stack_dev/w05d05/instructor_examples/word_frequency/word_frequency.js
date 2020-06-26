
const findWordFrequencies = (sentence) => {
    // Create an object to keep track of all the word counts
    const frequencies = {};
    // Split the sentence string into an array of words
    const words = sentence.split(' ');
    // Loop over the words. For each word:
    words.forEach((word) => {
        // Make the word lowercase
        const lowerCaseWord = word.toLowerCase();
        // Determine if we've seen the word before
        // If the object has this word as a key:
        if (frequencies.hasOwnProperty(lowerCaseWord)) {
            // Then we've seen the word before
            // So increment the existing value for the word in the object
            frequencies[lowerCaseWord]++;
        } else {
            // Otherwise, this is the first time we've seen the word
            // Add this word as a new key in the object with value 1
            frequencies[lowerCaseWord] = 1;
        }
    });
    // Return the object
    return frequencies;
}

const findHighestFrequency = (frequencies) => {
    // Make variables to track the highest frequency word and its frequency
    let mostFrequentWord = null;
    let highestFrequency = 0;
    // Loop through all the words
    Object.keys(frequencies).forEach((word) => {
        // If this word has a higher frequency than any we've seen so far:
        if (frequencies[word] > highestFrequency) {
            // Then update our variables for the highest frequency word
            mostFrequentWord = word;
            highestFrequency = frequencies[word];
        }
    });
    // Now we have the highest frequency word and its frequency
    // Make a new object to return, with the word as a key and frequency as value
    const result = {};
    result[mostFrequentWord] = highestFrequency;
    // Return the new object
    return result;
}

let freqs = findWordFrequencies('The world is all that is the case');
console.log(freqs);
// => { the: 2, world: 1, is: 2, all: 1, that: 1, case: 1 }
console.log(findHighestFrequency(freqs));
// => { the: 2 }

freqs = findWordFrequencies('That that is is that that is not is not');
console.log(freqs);
// => { that: 4, is: 4, not: 2 }
console.log(findHighestFrequency(freqs));
// => { that: 4 }

freqs = findWordFrequencies('hi');
console.log(freqs);
// => { hi: 1 }
console.log(findHighestFrequency(freqs));
// => { hi: 1 }
