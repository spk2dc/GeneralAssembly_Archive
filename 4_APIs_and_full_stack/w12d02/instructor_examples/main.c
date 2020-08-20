// Compile from the command line with
// $ gcc main.c
// And run the resulting file with
// $ ./a.out

#include <stdio.h>

// When you run a program in C, it starts at the "main" function
int main() {
    // // When you declare variables, you must designate their types
    // int distance = 14;
    // int time = 3;
    // int speed = distance / time;
    // // "speed" is an integer, since distance and time were integers
    // printf("speed: %i miles per hour, %i miles in %i hours\n", speed, distance, time);

    // // These variables are designated as floating-point numbers, so the
    // // division will also result in a float
    // float distance = 14.0;
    // float time = 3.0;
    // float speed = distance / time;
    // // This checks if the division resulted in a whole number, by converting
    // // the floats to ints
    // if (((int)speed) == speed) {
    //     printf("speed: %i mph, %i miles in %i hours\n", (int)speed, (int)distance, (int)time);
    // } else {
    //     printf("speed: %f mph, %f miles in %f hours\n", speed, distance, time);
    // }

    // // Types in C have specific sizes. "int" is 32 bits by default, "char" is 8
    // char myChar = -1;
    // // Types can be "signed" or "unsigned", which determines how the bits are
    // // interpreted by your program:
    // //  1 -> 0000 0001 (signed or unsigned)
    // // -1 -> 1111 1111 (255 unsigned)
    // printf("%u\n", (unsigned char)myChar);

    // // Strings are just arrays of 8-bit integers. That's why 8-bit ints are
    // // called chars (short for characters).
    // char myString[] = "James GK";
    // printf("myString is: %s\n", myString);

    // "Pointers" give you the address in memory where a variable is being stored.
    // You can think of memory as one really big array of numbers, and pointers as indexes
    // into that array (remember, everything on a computer is really just binary numbers).
    int myInt1 = 42;
    int myInt2 = 84;
    int* myPointer1 = &myInt1;
    int* myPointer2 = &myInt2;
    printf("address of myInt1: %p\n", myPointer1);
    printf("address of myInt2: %p\n", myPointer2);
    printf("address before myInt1: %p\n", myPointer1 - 1);

    // // Get a value from a pointer
    // int myNewInt = *myPointer1;
    // printf("myNewInt: %i\n", myNewInt);

    // Set a value at a pointer
    *myPointer1 = 20;
    printf("myInt1: %i\n", myInt1);

    // You can set values at arbitrary locations in memory, using pointer arithmetic.
    // This is very powerful / dangerous!!
    *(myPointer1 - 1) = 21;
    printf("myInt2: %i\n", myInt2);
}
