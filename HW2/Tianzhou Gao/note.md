# CSS Interview Questions – Oral English Answers 
## 1. What is CSS? 
CSS stands for Cascading Style Sheets. It’s used to control how HTML elements look on the page, like colors, layout, spacing, and fonts. Basically, HTML gives structure, and CSS makes the website look good. --- 
## 2. How do you link a CSS file to an HTML document? 
You link a CSS file using the `<link>` tag inside the `<head>` section of the HTML file. The browser then loads the styles and applies them to the page. 

--- 
## 3. What is a block element? How is it different from inline and inline-block elements? 

A block element takes up the full width of its parent and starts on a new line, like a `<div>`. An inline element only takes up as much width as its content and stays on the same line, like a `<span>`. Inline-block is kind of a mix: it stays inline but allows you to set width and height. 

---
## 4. What is the difference between pseudo-class and pseudo-element? 
A pseudo-class describes a special state of an element, like when you hover over it. A pseudo-element targets a specific part of an element, like the first letter or content before it. 

--- 
## 5. What is the difference between the child combinator and the descendant combinator? 

The child combinator selects only direct children of an element. The descendant combinator selects all matching elements inside another element, no matter how deeply nested. 

--- 
## 6. What are two ways that we can make an element invisible? What is the difference? 
You can use `display: none` or `visibility: hidden`. `display: none` removes the element completely from the layout. `visibility: hidden` hides the element but still keeps its space on the page. 

--- 
## 7. What is the Box Model? Describe each part. 
The Box Model describes how elements are sized and spaced. It includes content, padding, border, and margin. Content is the actual text or image, padding adds space inside the element, border wraps around padding, and margin adds space outside the element. 

--- 

## 8. What is the usage of !important? What are some use cases? 
`!important` forces a CSS rule to override other rules. It’s usually used as a last resort, for example when overriding third-party styles or fixing very specific conflicts. It’s generally better to avoid it when possible. 

--- 

## 9. What does z-index do? 
`z-index` controls the stacking order of positioned elements. Elements with a higher z-index appear in front of elements with a lower one. 

--- 

## 10. Can padding and margin be negative? 
Margin can be negative, which pulls elements closer together or overlaps them. Padding cannot be negative. 

--- 

## 11. How do you center a block element with CSS? 
A common way is to set a width and then use `margin: 0 auto`. This centers the block element horizontally inside its parent. 

---
 
## 12. What are grid items? Can you explain some grid item properties? 
Grid items are the direct children of a CSS Grid container. Some common properties are `grid-column`, `grid-row`, and `justify-self`, which control where the item is placed and how it aligns inside the grid. 

--- 

## 13. What is a flex container? Can you explain some flex container properties? 
A flex container is an element with `display: flex`. Some common properties are `flex-direction`, `justify-content`, `align-items`, and `flex-wrap`, which control layout direction, spacing, and alignment of items. 

--- 

## 14. If a parent is 200px wide and a child’s width is auto, what happens? 
The child element will take up the available width of the parent, so its width will be 200px. The left and right margins will both be 0 by default. 

--- 

## 15. What is the difference between px, em, and rem for font sizing? 
`px` is a fixed unit and does not scale. `em` is relative to the font size of the parent element. `rem` is relative to the root element’s font size, which makes it more predictable for scaling. 

--- 

## 16. What is responsive web design? How do we achieve this? 
Responsive web design means building websites that work well on all screen sizes. We achieve this using flexible layouts, media queries, responsive units, and modern layout systems like Flexbox and Grid.

![css quiz](/HW2/Tianzhou%20Gao/css%20quiz.png)