# Q & A

## 1. What is CSS?

CSS stands for **Cascading Style Sheets** . It's used to **control how HTML looks** , like colors, layout, spacing, and fonts. CSS can make websites more **flexible** and easier to **maintain**.

## 2. What is block element? How is it different from inline, and inline-block elements?

- **Inline** elements (e.g., `<span>`, `<a>`) **do not start on a new line** and only **take up as much width as their content** . They do _not_ accept width/height directly, and vertical margins usually don't apply.
- **Block** elements (e.g., `<div>`, `<p>`, `<section>`) **start on a new line** and expand to **full width of their parent** by default. They support width, height, padding, and margin on all sides.
- **Inline-block** elements flow inline with text **but behave like block elements for sizing** . You can apply width/height and vertical margins/padding. Useful for custom buttons, badges, small cards, aligned icons, etc.

## 3. What is the difference between pseudo-class and pseudo-element?

A CSS pseudo-element (::) defines **specific parts** of the selected element (first letter/line insert content before/after element content)

A pseudo-class (:) is used to defined **a special state of an elemen**t like hover, focus.

## 4. What is the difference between the child combinator and the descendant combinator?

The **child combinator (`>`)** selects **direct children only** .

The **descendant combinator (space)** selects **all nested elements** , no matter how deep.

## 5. What is the attribute selector? Give some examples.

Attribute selectors allow you to select elements based on attributes and their values.

- **`[attr]`** : Selects all elements that have an attribute named `attr`.
- **`[attr="value"]`** : Selects elements where `attr`’s value is exactly `"value"`.
- **`[attr^="value"]`** : Selects elements whose `attr` value **starts with** `"value"`.
- **`[attr$="value"]`** : Selects elements whose `attr` value **ends with** `"value"`.
- **`[attr*="value"]`** : Selects elements whose `attr` value **contains** `"value"` anywhere.
-

## 6. What are two ways that we can make an element invisible? What is the difference?

You can use `display: none` or `visibility: hidden`. `display: none` removes the element completely from the layout, and **doesn't take up space** on the page while `visibility: hidden` just makes it invisible but still **occupies space** .

## 7. What is the CSS Box Model? Describe each part.

The CSS box model describes the **rectangular boxed** that are generated for elements in the document tree and laid out according to the visual formatting model. It consist of 4 parts, content, padding, border, and margin.

1. **Content** is the content of the element, where **text and images** usually appear;
2. **Padding** is the **transparent space surrounding the content** ;
3. **Border** surrounds the **padding and the content** ;
4. **Margin** is the **transparent space outside the border** , separating an element from other HTML elements.

## 8. What is the usage of !important? What are some use cases?

`!important` rule in CSS is used to **prioritize** a particular style. Some use cases would be **overriding** inline styles, overriding third-party libraries, **ensuring specificity** in complex layouts and overriding user-defined styles. But we need to void using it if possible, because this may result in fail of applying styles, since a style was set elsewhere with `!import` .

## 9. What does z-index do?

Z-index specifies the **stack** order of an element, which element is placed in front of or behind others. Higher values of z-index will appear in front. It only works on **position elements** (position: absolute/relative/fixed/sticky) and **flex items.**

## 10. Can padding and margin be negative?

Margin is the **space outside** an element's border while padding is the **space inside** an element's border, between the content and the border. **Padding** **cannot** be negative but **margin can be negative** . Positive lengths of margin are like adding space to that outside of the element, and negative lengths are like removing space from that side.

## 11. How do you center a block element with CSS?

There are **three common cases** .

First, for **horizontal centering only** , I use **`margin: 0 auto`** , as long as the element has a **fixed width** .

Second, if I’m using **Flexbox** , I center it by setting **`display: flex`** and **`justify-content: center`** on the parent.

Third, if I need **both horizontal and vertical centering** , **CSS Grid** with **`place-items: center`** is the simplest solution.

## 12. What are grid items? Can you explain some grid item properties?

**Grid items** are the **direct children** of a **grid container** .

Common grid item properties include **`grid-column`** and **`grid-row`** , which control **where the item is placed** in the grid. **`justify-self`** and **`align-self`** control how an item is **aligned inside its grid cell** .

So grid items let us **precisely position and align individual elements** inside a grid layout

## 13. What is a flex container? Can you explain some flex container properties?

A **flex container** is an element with **`display: flex`** , and its **direct children become flex items** .

Common flex container properties include **`flex-direction`** , which controls the **main axis** , **`justify-content`** , which aligns items along the **main axis** , and **`align-items`** , which aligns items along the **cross axis** . I also use **`flex-wrap`** to control whether items **wrap onto multiple lines**

## 14. What is responsive web design? How do we achieve this?

Responsive web design is a design approach that uses HTML and CSS to make the **UI look great** on all devices and screen sizes. It allows layouts to adapt to smaller screens, often using vertical scrolling.

To achieve this, wen can use **Mobile-first approach** , like designing for mobile devices before any other devices. Layout should be change from single-column to multi-column. We can also utilized **viewport** from `<meta>` for page to recognize device size.

Some implements can be using the **Flexbox and Grid** to define the layout, using **`<picture>`** to provide multiple `<source>` elements, using **`@media` query** to define the different layout or style for different size of screen and set the min/max length. font-size and so on

> W3School CSS Quiz

![W3School-css-quiz](https://image.lei-xue.com/vic-icc/W3S-css-quiz.png)
