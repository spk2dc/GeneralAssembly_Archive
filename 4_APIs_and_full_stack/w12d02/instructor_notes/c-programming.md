# C Programming

## Learning Objectives

* Learn basic C syntax.
* Compare C with very high-level languages like Javascript, Python or Ruby.
* Discuss the value and dangers of pointers.

## Prerequisites

* Basic programming in another language
* Binary numbers

## Context

C is a programming language used (along with C++) for all sorts of applications: [web browsers](https://github.com/chromium/chromium), [operating systems](https://github.com/torvalds/linux), [media players](https://github.com/GNOME/rhythmbox), [video games](https://github.com/godotengine/godot), and [other](https://github.com/v8/v8) [programming](https://github.com/python/cpython) [languages](https://github.com/ruby/ruby). You wouldn't have Javascript or Python without C!

While languages like Javascript can allow you to develop software faster by hiding details of what your code is doing, C is often necessary for applications that have high preformance requirements or that interact with hardware in specific ways. The tradeoff is that writing good C typically does require some knowledge of what's happening behind the scenes.

## What is a Compiler? What is the difference between a compiled and interpreted language?

The biggest difference between C and Javascript, Python or Ruby is that C is a **compiled** language and the other three are **interpreted** languages.

Computers can't understand the code that we write -- they can only really understand numbers like 1's and 0's! The code that we write aka "source code" needs to be translated to binary. We call that code "machine code". Once our source code is in that format, its processed by the CPU or central processing unit. There are two ways of translating code from source code to machine code: interpreters and compilers.

Compilers are programs that take high level languages and converts it to machine code. Then you get an executable file that you can run. You can run it over and over again, but if you change the code, you have to recompile the code! You may see `.exe` files, these are executables.

Compiling example:
```bash
$ cd /home/jdoe/code/hello
$ ls
main.c
$ cc main.c  # compile "main.c"
$ ls  # "a.out" is a compiled, executable file
a.out  main.c
```

On the other hand, an interpreter is a program that takes a high level language and then runs the code immediately. It runs the code line by line rather than compiling all of it at once. Every time you rerun the code, it re interprets it to machine code line by line.

## Hello, World in C

The traditional program to start with in any language is one that simply prints the text "Hello, world". Let's see how that looks in C. Go ahead and create a `main.c` file somewhere on your computer. Make sure you know where it is so that you can compile and run it!

First of all, any C program must contain a `main` function, which is the entry point for your code:

> main.c
```c
int main() {

}
```

Like in Javascript, a function contains a name (`main`), a list of parameters in parentheses (empty in this case), and curly braces to demark lines of code within the function. Unlike Javascript, you also have to designate the *return type* of the function. `main` should always return an integer in C, which can serve as an error code for your program if you need it. We won't worry about that here.

On MacOS or Linux, you should be able to compile this code with:

```bash
$ gcc main.c
```

If all goes well, this should generate a file `a.out` without giving you any errors. But, the code won't do anything yet.

Just like Javascript has `console.log()`, and Python has `print()`, C has a built-in function to print to the console, called `printf()`. You can call it like so:

```c
int main() {
    printf("Hello, world!");
}
```

A couple of things to note:
* You must use double quotes for strings. Single quotes won't work here.
* You must end lines with semicolons.

You can try compiling this code again, but you'll probably see an error like this:

```
main.c: In function ‘main’:
main.c:2:5: warning: implicit declaration of function ‘printf’ [-Wimplicit-function-declaration]
     printf("Hello, world!");
```

Essentially, this is saying that we never defined the functin "printf". In fact, to use this built-in function, we have to include the library where it's defined. This looks somewhat similar to `import` in Python or `require` in Javascript:

```c
#include <stdio.h>

int main() {
    printf("Hello, world!");
}
```

Roughly speaking we have a statement telling our code that we're including something (`#include`), and the name of the library that we're including (`<stdio.h>`, short for "standard input / output").

Now you should be able to compile and run the code:

```bash
$ gcc main.c
$ ./a.out
Hello, world!$
```

One last issue you'll likely notice is that your prompt starts again on the same line as the "Hello, world" text that you printed out. This is because we didn't include a *newline* character in our printed string.

You may have seen the newline character in other languages. If for example you wanted to print out a message with multiple lines in Javascript, you could do:

```javascript
console.log('Hello,\nworld!');
```

which would print out:

```
Hello,
world!
```

We want to use this same `\n`, the newline character, to make sure that any subsequent console output after our program's output is on a new line. So we end up with:

```c
#include <stdio.h>

int main() {
    printf("Hello, world!\n");
}
```

## Variables and Static Typing

In C, every time you declare a new variable, you must specify its type. Imagine we have values for distance and time, from which we want to calculate a speed. The distance and time can be defined as variables like this:

```c
    int distanceInMiles = 14;
    int timeInHours = 3;
```

Like in other languages, we have a variable name, an equals sign, and a value to store in the variable. Unlike dynamically-typed languages like Javascript, we also give the type for the variable. Since C is a **statically-typed** language, the type of these variables cannot change! You can try to assign non-integer values to `distanceInMiles`, but the value will either a) be automatically converted to an `int`, or b) cause a compilation error if that conversion is not possible.

C supports many of the basic math operators that we have in other languages. To calculate a speed from our distance and time variables, we can do:

```c
    int speedInMph = distanceInMiles / timeInHours;
```

To test this, unfortunately we can't just do `printf(speedInMph)`. Instead, we need to print a **formatted string** that contains the speed value. That's what the `f` in `printf` stands for.

Formatted strings contain tokens like `%i`, `%f`, etc. into which integers, floats and other types can be interpolated, somewhat similar to the `${}` syntax for string interpolation in Javascript. To print out our `speedInMph` integer with `printf`, we can do:

```c
    printf("speed: %i mph\n", speedInMph);
```

and the value contained in variable `speedInMph` will replace the `%i` in our printed string. Printing multiple values in the same statement follows the same pattern:

```c
    printf("speed: %i mph, distance: %i miles, time: %i hours\n",
           speedInMph, distanceInMiles, timeInHours);
```

(Like in Javascript, whitespace isn't very important here.)

If you compile and run this code again, you should see something strange:

```bash
$ gcc main.c
$ ./a.out
speed: 4 mph, distance: 14 miles, time: 3 hours
```

How did we get 4 from 14 / 3? Well, remember that all of our variables store strictly integers. When we calculate `distanceInMiles / timeInHours`, we're essentially calculating how many times 3 goes into 14, as an integer, and that's what we store in `speedInMph`.

If we wanted to calculate a more accurate speed, we can use floating-point numbers instead of integers:

```c
    float distanceInMiles = 14.0;
    float timeInHours = 3.0;
    float speedInMph = distanceInMiles / timeInHours;
    printf("speed: %f mph, distance: %f miles, time: %f hours\n",
           speedInMph, distanceInMiles, timeInHours);
```

Note that we changed `%i` to `%f` in our `printf` call -- this is very important! Otherwise C will interpret the bits in your floating-point numbers as bits representing integers, and print out some wild values.

## Other Types: Characters, Arrays and Strings

All types in C have specific sizes. `int` is 32 bits by default. We also have `char` which is an 8 bit integer.

In addition, types are intepreted as being "signed" (in which case they can be positive or negative) or "unsigned" (in which case they are strictly positive).

So if we have 8 binary 1s stored in a `char`, that can be interpreted as 255, as an unsigned integer, or -1, as a signed integer with two's compliment:

```c
    unsigned char myChar = 255;
    printf("%u\n", myChar);  // "%u" for "unsigned", prints 255
    printf("%i\n", (char)myChar);  // converts myChar to a signed char, prints -1
```

An **array** in C can be defined and used like so:

```c
    int myArr[3] = {3, 5, 8};  // defines an array of 3 ints
    printf("%i\n", myArr[0]);  // prints 3
    myArr[1] = 13;  // edits the array at index 1
    printf("%i\n", myArr[1]);  // prints 13
```

A **string** is just an *array* of *chars*. That's why they're called "char" (short for "character"). You can define them with double quotes, as we've been doing with `printf`:

```c
    char myString[4] = "ABC";
    printf("%s\n", myString);  // "%s" for "string", prints "ABC"
```

Note that we gave our string a length of 4. This is because all strings in C must end with the null character, `'\0'`, which is literally the integer value 0. If you don't give enough room for the null character (by saying `char myString[3] = "ABC"`), C won't know where your string ends while printing and your program may output some random data as text:

```bash
$ ./a.out
ABC`!umU
```

## Control Flow

If-statements and loops in C look very similar to those in Javascript:

```c
    int myNum = 5;
    if (myNum % 2 == 0) {
        printf("myNum is even\n");
    } else {
        printf("myNum is odd\n");
    }

    for (int i = 0; i < myNum; i++) {
        printf("looped %i times\n", i);
    }
```

A couple of notes:
* There is no `===`, just `==`
* There are no `for ... of` or `for ... in` loops

Returning to our earlier example, if we wanted to print out `speedInMph` as an integer if it's a whole number, we could convert it to an `int` and compare it to the original `float`:

```c
    if (((int)speedInMph) == speedInMph) {
        printf("speed: %i mph\n", (int)speedInMph);
    } else {
        printf("speed: %f mph\n", speedInMph);
    }
```

## Pointers

Perhaps the most important concept in C is the **pointer**. A pointer gives you the address in memory where a variable is being stored. You can think of memory as one really big array of numbers, and pointers as indexes into that array. Remember, everything on a computer is really just binary numbers.

```c
    int myInt1 = 42;
    int *myPtr1 = &myInt1;  // "myPtr1" holds the memory address of "myInt1"
    printf("pointer to myInt1: %p\n", myPtr1);  // "%p" for "pointer"
    // prints some hexadecimal number like 0x7ffdc834c63c
```

You can read from and write to pointers using the asterisk:

```c
    int myNewInt = *myPtr1;
    printf("myNewInt: %i\n", myNewInt);  // prints 42
    *myPtr1 = 20;
    printf("myInt1: %d\n", myInt1);  // prints 20
```

You may notice that if you declare two `int`s one after another, they'll have addresses that are exactly 4 bytes (32 bits) apart:

```c
    int myInt1 = 42;
    int myInt2 = 82;
    int *myPtr1 = &myInt1;
    int *myPtr2 = &myInt2;
    printf("pointer to myInt1: %p\n", myPtr1);
    printf("pointer to myInt2: %p\n", myPtr2);
    // might print values like 0x7ffc1b56ce2c, 0x7ffc1b56ce28
    // and note that counting 4 values from 8 in hex is 9, a, b, c
```

If so, you can actually alter the value of one variable from another's pointer:

```c
    *(myPtr1 - 1) = 30;
    printf("myInt2: %i\n", myInt2);  // would print 30
```

Indeed, it's possible in C to change arbitrary values in the memory owned by your program. As you can imagine, this is very powerful, and very dangerous! Accidentally changing the wrong memory locations can cause your program to behave in ways wildly different than you intended.

Arrays (and by extension, strings) are actually pointers to sequences of numbers. Strings are commonly defined like this:

```c
    const char *myName = "Jane Doe";
```

The string's characters can still be accessed with bracket syntax. `myName[1]` does the same thing as `*(myName + 1)`:

```c
    printf("second letter's ASCII code: %i\n", myName[1]);  // prints 97
```

Pointers allow us to do things in C that are simply not possible in other languages. For example, the [Game Boy Advance](https://www.coranac.com/tonc/text/) has memory-mapped I/O, which means that lighting up pixels on the screen requires writing to specific memory locations. So for example on a GBA this would make a pixel at the top-left of the screen red:

```c
    // "short int" is 16 bits, each pixel is 5 bits per color
    short int *screenPtr = 0x06000000;
    // the last five bits are set to 1, to make the pixel red
    screenPtr[0] = 0x001F;
```

(Note that this code will only work if you run it on an actual Game Boy; on your computer your program doesn't have access to that memory address, so your computer will raise a [segmentation fault](https://en.wikipedia.org/wiki/Segmentation_fault).)

## Bonus: Structs and Functions

### Structs

C does not have classes. The closest thing it has is the **struct**, which is essentially just structured data. You can defined a struct for a student (outside of the `main` function):

```c
struct Student {
    const char *name;
    int course;
};
```

though this requires referencing the struct as `struct Student`, so it's common to use a `typedef` that allows you to reference the struct simply as `Student`.

```c
typedef struct Student {
    const char *name;
    int course;
} Student;
```

Now you can create students in your code:

```c
    Student student1 = {
        "Alice",
        28,
    };
    Student student2 = {
        "Bob",
        28,
    };
```

and access their properties using dot syntax:

```c
    printf("%s\n", student1.name);
    printf("%i\n", student2.course);
```

### Functions

You can define other functions outside of `main`. You need to specify the type of the parameters, and the return type. If the function doesn't return anything, the return type is `void`:

```c
void printSum(int a, int b) {
    printf("%i\n", a + b);
}

int getStudentCourse(Student student) {
    return student.course;
}

...

    printSum(1, 2);
    int myCourse = getStudentCourse(student1);
```

Any time a struct like `Student` is used as a parameter, the whole struct is copied when the function is called. If the struct is very large, this can mean copying a lot of data!

Another useful purpose of pointers is to avoid this copy. If a function has a pointer as a parameter type, only the pointer and not the whole struct is passed into the function:

```c
int getStudentCourse(Student *student) {
```

This is so common that accessing data in a struct pointer has special syntax. Instead of saying `(*student).course`, you can say `student->course`:

```c
int getStudentCourse(Student *student) {
    return student->course;
}
```

And now when you call `getStudentCourse`, you have to provide a pointer instead of the actual struct:

```c
    int myCourse = getStudentCourse(&student1);
```

# Contributors

Adapted from https://git.generalassemb.ly/ga-wdi-lessons/binary-and-how-computers-work, originally by [@aspittel](https://git.generalassemb.ly/aspittel).
