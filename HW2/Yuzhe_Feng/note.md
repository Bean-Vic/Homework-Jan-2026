# HW1 Q&A

### 1. What is CSS?

CSS stands for Cascading Style Sheets. It is a is a stylesheet language used to control the presentation of web pages, such as layout, colors, fonts, and spacing. CSS separates visual styling from HTML structure, making websites easier to maintain, more consistent, and responsive across different devices.

### 2. How do you link a CSS file to an HTML document?

You link a CSS file to an HTML document using the `<link>` tag inside the `<head>` section, setting the "rel" attribute to stylesheet and the "href" pointing to the CSS file.`<link rel="stylesheet" href="styles.css">`

### 3. What is block element? How is it different from inline, and inline-block elements?

A block element takes up the full available width of its container and starts on a new line, such as `<div>` or `<p>`.
An inline element flows within text, does not start on a new line, and its width and height are determined by its content, like `<span>` or `<a>`.
An inline-block element behaves like inline element but allows width, height, margin, and padding to be set, combining characteristics of both block and inline elements.

### 4. What is the difference between pseudo-class and pseudo-element?

A pseudo-class is used to define a special state of an element, such as when it is hovered, focused, or selected as the first child.
A pseudo-element is used to style a specific part of an element, such as the first line, first letter, or content added before or after an element.
In short, pseudo-classes describe an element’s state, while pseudo-elements describe parts of an element.

### 5. What is the difference between the child combinator and the descendant combinator?

The child combinator `>` selects elements that are direct children of a parent element.
The descendant combinator `a space` selects elements that are any level of descendants, including nested elements.

### 6. What are two ways that we can make an element invisible? What is the difference?

Two common ways to make an element invisible are using display: none and visibility: hidden.
display: none removes the element completely from the layout, so it does not take up any space.
visibility: hidden hides the element visually but still preserves its space in the layout.

### 7. What is the Box Model? Describe each part.

The CSS Box Model describes every HTML element as a rectangular box with four nested layers, from inside out, they are: content, which contains the actual content; padding, which creates space between the content and the border; border, which surrounds the padding and content; and margin, which defines the space outside the element and separates it from other elements. Together, these layers determine an element’s size, spacing, and layout on the page.

### 8. What is the usage of !important? What are some use cases?

!important is a keyword in CSS that gives the declaration it is applied to the highest priority, overriding all other conflicting declaration, regardless of specificity or source order.
It is commonly used to override styles from third-party libraries or in utility classes where styles must always apply.
However, it should be used sparingly, as overusing !important can make CSS harder to maintain and override. It should be a last resort rather than a default solution.

### 9. What does z-index do?

The z-index property controls the stacking order of elements along the z-axis, determining which elements appear in front of or behind others.
A higher z-index value places an element above other elements, and it only works on positioned elements, such as those with relative, absolute, or fixed positioning. It is commonly used for overlays, modals, and dropdown menus.

### 10. Can padding and margin be negative?

Margin can be negative, allows elements to overlap or be pulled closer together and is sometimes used for layout adjustments.
Padding, cannot be negative, because it represents the internal space between the content and the border, and negative values are not valid.

### 11. How do you center a block element with CSS?

A block element can be centered horizontally by giving it a fixed width and setting its left and right margins to auto. In modern layouts, Flexbox is commonly used, set justify-content: center for horizontal centering and also set align-items: center for vertical centering.

(.parent-container {
display: flex;
justify-content: center;
align-items: center;  
})

### 12: What are grid items? Can you explain some grid item properties?

Grid items are the direct children of a grid container. Grid item properties control how an item is positioned and aligned within the grid.
For example, grid-row and grid-column define where an item is placed and how many rows or columns it spans. And align-self and justify-self control the item’s alignment within its grid cell.
In more complex layouts, grid-area can be used together with grid-template-areas to place items by name, makes layouts easier to read and maintain.

### 13. What is a flex container? Can you explain some flex container properties?

A flex container is an element that has display: flex or inline-flex applied to it, and its direct children become flex items.
Flex container properties control how these items are laid out, such as flex-direction for defining the main axis, justify-content and align-items for alignment along the main axis or the cross axis, and flex-wrap for controlling whether items wrap onto multiple lines.

### 14. Assume a parent element has width = 200px and one child element*.* If the child element’s width is set to ‘auto’, what are the values of its width, left-margin, & right-margin?

If a block-level child element has its width set to auto, it will expand to fill the available width of its parent.
Given a parent width of 200px, the child’s width will be 200px, and both the left and right margins will be 0 by default.

### 15. Can you explain the difference between px, em and rem as they relate to font sizing?

px is an absolute unit that defines a fixed font size and does not scale relative to other elements.
em is a relative unit that scales based on the font size of its parent element, which can compound in nested elements.
rem is also a relative unit, but it is based on the root element’s font size, making it more predictable and commonly used in modern layouts. It allows consistent scaling across the entire page.

### 16. What is responsive web design? How do we achieve this?

Responsive web design is an approach where a website adapts its layout and content to different screen sizes and devices like mobile, tablet, and desktop devices.
It is achieved by using fluid layouts with relative units, media queries to apply styles at specific screen width breakpoints, flexible images, and modern layout techniques such as Flexbox and CSS Grid.

### Quiz_Result

![alt text](quiz_result.png)
