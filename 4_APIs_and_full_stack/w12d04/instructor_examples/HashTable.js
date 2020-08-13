// Hash table implemented using linear probing:
// https://en.wikipedia.org/wiki/Linear_probing
// This is often not a great strategy in practice, but it's relatively simple.
// For example, Python 3.8 uses a more sophisticated probing method:
// https://github.com/python/cpython/blob/dfa645a/Objects/dictobject.c#L134

// Use different values for an empty table entry vs. an entry that's been removed
const EMPTY_ENTRY = undefined;
const DUMMY_ENTRY = null;

class HashTable {
    // Initialize an array for our table, and a length of actual items stored
    constructor(size) {
        this.table = [];
        for (let i = 0; i < size; i++) {
            this.table.push(EMPTY_ENTRY);
        }
        this.length = 0;
    }

    // Takes a string key and turns it into an index we can use in our table
    hash(key) {
        let index = 0;
        for (let i = 0; i < key.length; i++) {
            index += key.charCodeAt(i);
        }
        return index % this.table.length;
    }

    set(key, value) {
        let i = this.hash(key);
        // See if the key already exists, in which case we can just update its value
        // Keep probing while the current space is non-empty, but doesn't contain our key
        while (this.table[i] !== EMPTY_ENTRY &&
               (this.table[i] === DUMMY_ENTRY || this.table[i][0] !== key)) {
            i = (i + 1) % this.table.length;
        }
        // If we found a space that already has this key, update its value
        if (this.table[i] !== EMPTY_ENTRY) {
            this.table[i][1] = value;
            return;
        }

        // If we didn't find an existing key, find an empty or dummy space
        i = this.hash(key);
        while (this.table[i] !== EMPTY_ENTRY && this.table[i] !== DUMMY_ENTRY) {
            i = (i + 1) % this.table.length;
        }
        this.table[i] = [key, value];
        this.length++;
        //TODO resize the table if it's getting too full
        // make sure to re-hash all keys when we do this!
    }

    get(key) {
        let i = this.hash(key);
        // Keep probing while the current space is non-empty, but doesn't contain our key
        while (this.table[i] !== EMPTY_ENTRY &&
               (this.table[i] === DUMMY_ENTRY || this.table[i][0] !== key)) {
            i = (i + 1) % this.table.length;
        }

        // If we got to an empty space, the key isn't here
        if (this.table[i] === EMPTY_ENTRY) {
            return null;

        // Otherwise, we found the key we're looking for, so return the value
        } else {
            return this.table[i][1];
        }
    }

    delete(key) {
        let i = this.hash(key);
        // Keep probing while the current space is non-empty, but doesn't contain our key
        while (this.table[i] !== EMPTY_ENTRY &&
               (this.table[i] === DUMMY_ENTRY || this.table[i][0] !== key)) {
            i = (i + 1) % this.table.length;
        }
        // Turn the space into a dummy entry, removing the key-value pair
        if (this.table[i] !== EMPTY_ENTRY) {
            this.table[i] = DUMMY_ENTRY;
        }
    }
}

// Test that simple set and get work
let ht = new HashTable(7);
ht.set('Ben', 1);
ht.set('Brandon', 2);
ht.set('Deja', 3);
ht.set('James', 4);
ht.set('John', 5);
console.log(ht.get('Ben'));
console.log(ht.get('Brandon'));
console.log(ht.get('Deja'));
console.log(ht.get('James'));
console.log(ht.get('John'));
console.log(ht.table);

// Test that delete works
ht.delete('Brandon');
console.log(ht.get('Brandon'));
console.log(ht.get('Deja'));
ht.set('Deja', 6);
console.log(ht.get('Brandon'));
console.log(ht.get('Deja'));
console.log(ht.table);
