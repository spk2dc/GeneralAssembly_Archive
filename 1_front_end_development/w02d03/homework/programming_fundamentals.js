/*
* **DRY**
Don't repeat yourself, it's inefficient.

* **KISS**
Keep it simple stupid, no need to make unnecessarily complex code. 

* **Avoid creating a YAGNI**
You aren't going to need it, don't add things you don't need.

* **Do the simplest thing that could possibly work**
No need for complexity if simple things work.

* **Don't make me think**
Make things easy to understand.

* **Write code for the maintainer**
Make sure people in the future can maintain your code.

* **Single responsibility principle**
Things should only do 1 thing and do it well.

* **Avoid premature optimization**
Get your code to work first.

* **Separation of concerns**
Separate things into their functions, don't combine too much into one.


None of these surprise me.
Single responsibility principle is most difficult for me, hard to know when to separate things.

*/


const f = l => {                    //Create function
    let es = 0, p = 0, c = 1, n = 0 //assign variables
    while (c <= l) {                //loop while c less than equal to 1
        n = c + p;                  //n is c plus p
        [c, p] = [n, c]             //assign n and c to old c to p
        es += (c % 2 === 0) ? c : 0 //add c to es value if c is even, 0 if c is odd
    }
    return es                       //return es
}

console.log(f(55))                  //print result of function with input 55


const f2 = (limit) => {
    let evenSum = 0;
    let previous = 0;
    let current = 1;
    while (current <= limit) {
        let next = current + previous;
        previous = current;
        current = next;
        if (current % 2 === 0) {
            evenSum += current;
        }
    }
    return evenSum;
}


console.log(f2(55))
//Better name: Sum of even numbers
//f2
//Yes, it's the else condition