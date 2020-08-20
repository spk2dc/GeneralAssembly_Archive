# Binary Numbers

## Learning Objectives
* Convert between binary and decimal systems.
* Discuss how non-numeric data like strings and colors are represented with binary numbers.
* Discuss how floating-point and negative numbers are represented in binary.

## What is Binary and Why is it Important?

Number Systems are simply a way to represent numbers.  We commonly use **Base-10**, also called **Decimal**, most likely because we have 10 fingers.  If we were crabs with claws, we very likely would have ended up using "Base-4".  If we were octopi, we could have ended up using "Base-8".  At the most basic level, computers use what's called **Binary**, or **Base-2**.  Why might this be?

Computer processors contain millions or billions of tiny "transistors", which is a switch that can either be "on" or "off".  We represent on and off as either 1 or 0, for a total of two possibilities, also known as one bit of information. Little bursts of energy either do or don't pass through circuits based on this on off system. You can also think of on and off like "true" or "false"!

**Hexadecimal**, or **Base-16** is used a lot in programming languages because it converts easily into binary.  Hexadecimal uses digits 0-9 and A-F to represent digits. We use hexes for colors in CSS!

![decimal, hex, binary](binary-hexadecimal-decimal-chart-1.png
)
>http://www.wirebiters.com/wp-content/uploads/2014/01/binary-hexadecimal-decimal-chart-1.png

Let's look at some examples of how base-10 numbers can be stored as binary, but first let's think back to how the decimal system stores numbers.

`138` in decimal is really the same as...
<br>
<code>(1 x 100) + (3 x 10) + (8 x 1)</code>
<br>or ...
<br>
<code>(1 x 10<sup>2</sup>) + (3 x 10<sup>1</sup>) + (8 x 10<sup>0</sup>)</code>

Similarly, `255` in decimal is really...
<br>
<code>(2 x 10<sup>2</sup>) + (5 x 10<sup>1</sup>) + (5 x 10<sup>0</sup>)</code>


Now let's look at ***binary***...

`101` in binary is really
<br>
<code>(1 x 2<sup>2</sup>) + (0 x 2<sup>1</sup>) + (1 x 2<sup>0</sup>)</code>
<br>or ...
<br>
<code>4 + 0 + 1 = 5</code>

`1000 0000` in binary is really
<br>
<code>(1 x 2<sup>7</sup>)</code>
<br>or ...
<br>
<code>128</code>

![How to Convert Binary from BaseCS](https://cdn-images-1.medium.com/max/880/1*502cf-gX4g88uW_T-BPncg.jpeg)

### You do

Convert the following numbers from binary to decimal

1. `11`

2. `1000`

3. `1111`

4. `1000 1001`

5. `1111 1111`

<details>
	<summary>Answers</summary>

	1. 3

	2. 8

	3. 15

	4. 137

	5. 255
</details>

### Bits and Bytes

A computer bit represents a binary digit -- so a zero or a one. The standard unit above a bit is a byte -- made up of 8 bits. These can represent values from 0 to 255. Different computers process different numbers of bits at a time. Most computers are 32 or 64 bit computers.

8 binary digits (one byte) can be represented by 2 hexadecimal digits, since each hex digit can hold one of 16 possible values and 4 binary digits can hold 2^4, or 16 possible values as well.

When we define a CSS color like `#20B2AA`, we're defining values for three bytes -- one for the amount of red in the color, one for green, and one for blue.

### Strings

A **string** in most programming language is basically an array of bytes, with each byte representing an ASCII character (or with subsequent bytes representing Unicode characters outside of the 8-bit range).

In the ASCII standard, each key on a standard US keyboard is assigned a numeric value:

![ASCII table](ascii-table.svg)

> https://simple.wikipedia.org/wiki/ASCII

For example the letter "A" has the value 65, or `01000001` in binary. So the string "ABC" could be stored in your computer as `01000001 01000010 01000011`. Note that lowercase and uppercase letters have different ASCII values! This is why `"ABC" != "abc"` in Javascript, Python, or Ruby.

### Floating-Point Numbers

The binary numbers we've discussed so far have all been whole numbers, or **integers**. But often in your code, you've probably found it necessary to use numbers with fractional parts, like 2.5 or 3.33. The standard way for computers to store these numbers behind the scenes is as **floating-point numbers**.

In floating-point, some bits are used to store a value, and then some bits are used to store a power of a set base by which the value is multiplied. This way we can strictly store integers using binary. For example, consider that the number `2.5` can also be expressed as <code>25 x 10<sup>-1</sup></code>, and `3.33` can be expressed as <code>333 x 10<sup>-2</sup></code>. Following this pattern we can store 2.5 with a 25 and a -1, and 3.33 with 333 and -2, all using binary numbers.

Most all computer systems use the [IEEE Floating-Point Standard](https://en.wikipedia.org/wiki/IEEE_754), which follows this general approach. In Javascript specifically, all numbers are represented as a 64-bit value, with 53 bits as the value and 11 bits as the exponent.

What this means in practice is that any perfectly-accurate, whole integer number you work with in Javascript has to be contained in 53 bits. The largest such number is 53 binary 1s; any larger number must be approximated using the exponent part of the 64-bit floating-point number.

For example, you're fine with `0b11111111111111111111111111111111111111111111111111111` (53 binary 1s):

```javascript
> 0b11111111111111111111111111111111111111111111111111111
9007199254740991
```

but with any larger value, you'll start to see odd behavior since the values are approximations:

```javascript
> 0b11111111111111111111111111111111111111111111111111111 + 1
9007199254740992
> 0b11111111111111111111111111111111111111111111111111111 + 2
9007199254740992
```

Javascript actually defines the largest safe integer for you as `Number.MAX_SAFE_INTEGER`, so you don't have to remember that it has to fit in 53 bits:

```javascript
> Number.MAX_SAFE_INTEGER
9007199254740991
```

This approximation method can cause other odd behavior. For example, the simple values 0.1, 0.2, and 0.3 are actually *impossible* to represent using IEEE floating-point numbers! (Actually, it is possible when you use 10 as the base for the exponent bits, but not when you use 2 as the base, and 2 is much more common.)

As a result, when you assign 0.3 to a variable, the actual approximate value stored is close enough to 0.3 that Javascript will print out what you expect:

```javascript
> let val = 0.3
> console.log(val)
0.3
```

But when you have two values 0.1 and 0.2 -- both approximations -- and you add them together, their slight imprecisions compound and you see this:

```javascript
> let val1 = 0.1
> let val2 = 0.2
> console.log(val1 + val2)
0.30000000000000004
```

This is known as **floating-point error** and it is the impetus for much [academic research](https://en.wikipedia.org/wiki/Floating-point_error_mitigation) and [programmer humor](https://www.smbc-comics.com/?id=2999).

### Negative Numbers

If you had to devise a scheme to represent negative binary numbers, you might come up with a relatively simple method by which one bit was used to designate whether the number is positive or negative, and the rest of the bits are used for the actual number. So for example `-1` with eight bits might be `1000 0001`, `-2` might be `1000 0010`, etc.

However, since the same hardware logic that turns `1000 - 1` into `0111` also turns `00000000 - 1` into `11111111` (as if there were an imaginary `1` on the far left of the original `00000000`), it's actually much more convenient to represent `-1` as all 1s, and count negative numbers down from there.

For example `-1` is `1111 1111`, `-2` is `1111 1110`, `-3` is `1111 1101`, etc.

This approach is known as **two's complement**. Somewhat amazingly, using this apprach it is possible to quickly convert between positive and negative by 1) flipping all the 0s and 1s in the number, and then 2) adding 1 to the number.

(For an intuition on how this works, you might try drawing the numbers on a number line and see where they reflect when you flip the 0s and 1s.)

So for example `1` is `0000 0001`, flipping the 0s and 1s yields `1111 1110`, and adding 1 results in `1111 1111`, which sure enough is `-1`! And the exact same process can be used to convert the number back to `1`.

# Contributors

Adapted from https://git.generalassemb.ly/ga-wdi-lessons/binary-and-how-computers-work, originally by [@aspittel](https://git.generalassemb.ly/aspittel).
