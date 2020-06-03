![](/ga_cog.png)

---
Title: Introduction to Flexbox<br>
Type: Morning Exercise <br>
Duration: "0:45"+<br>
---



# Flexbox
![Flexbox logo](https://i.ytimg.com/vi/JVYVDpdvdMo/maxresdefault.jpg)




## Intro

### A Very Brief History
Once upon a time, monitors were square and monochrome. As display technology advanced, monitors got bigger, more colorful, and wider. Browser technology also improved, allowing browsers to be resized to nearly any size the monitor would allow. Finally, mobile devices came on the market, providing not only new sizes and proportions but also for the display to rotate and change orientation. This provided new challenges for layouts with CSS.

Flexbox was introduced as part of CSS3, it has been around since ~2008. Despite being a technology that has been around for nearly ten years, it lacked consistent browser support (until recently) and thus developers have often had to fall back on floats and relative positioning to solve the kind of layout challenges that Flexbox was built to solve.

### Can I use flexbox?
Flexbox, currently has near universal support from all major modern browsers. You can find out what browsers support by going to [caniuse.com](http://caniuse.com/) , this website also documents support for just about anything else you might want to put in the browser, including HTML and JavaScript. If you are wondering if you should be using `vendor prefixes` (looks like the code below) and how to write them, a great resource is [shouldiprefix](http://shouldiprefix.com/):

```
.page-wrap {
  display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox;  /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
  display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
}
```

In this course we are only worrying about modern browsers (we don't worry about supporting any version of IE, and currently Safari is in version 10.1+, so you would only need the vendor prefixes above **IF** you needed to support older browsers).

TLDR; - we don't need to write any vendor prefixes for flexbox for this lesson because everything we are going to do is supported by Chrome.

### Flexbox is its own thing
Flexbox is built with its own logic, separate from floats and other layout properties. Rather than noodling around with numbers, flexbox properties are more descriptive like `justify-content: space-between;` or `flex-direction: column;` with the spacing and resizing being calculated under the hood for you. This resizing happens live on browser resizing or even rotating a mobile device. See the section [Basics & Terminology](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

Flexbox has just two types of elements. Parent, or better known as `flex container` elements and children, or better known as `flex items`. Each have their own properties.



### Use Case for Flexbox
One great use case for Flexbox is a layout pattern that is often referred to as `cards`. Cards are often used for online shopping.


Wide:
![cards in online shopping cole haan large example](https://i.imgur.com/56uik0T.png)

Narrow:
![cards in online shopping cole haan small example](https://i.imgur.com/LwYtndU.png)

Here are some commonly desired layout patterns:
- even spacing between cards
- The number of cards wraps to another row if it doesn't fit the width
- The cards are all the same size
- The first and last element align with other elements on the page to provide uniformity and overall page layout cohesion. No matter the width, the cards behave in a certain way that is expected and generally desired.



### Exercise
We will be playing Flexbox Froggy, a Flexbox tutorial. As we run through the tutorial we will learn about some properties of Flexbox and their behaviors.

![Flexbox Froggy](https://flexboxfroggy.com/)



#### Final Thoughts
Flexbox's intuitive design and descriptive properties are both powerful and easy to learn.

There are a handful of things this lesson did not cover. Below is the CSS-Tricks `A Complete Guide` - indeed, it is complete and quite short which is a beautiful reflection of the elegance and utility of Flexbox.

#### References

CSS-Tricks: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Flexplorer: http://bennettfeely.com/flexplorer/

#### Hungry for More (choose any):
- Read the three articles in this README.md
- Continue to experiment with Flexbox properties and update the cards to something that suits your taste
- Check out Flexbox's other great solves like sticky footer: https://philipwalton.github.io/solved-by-flexbox/
