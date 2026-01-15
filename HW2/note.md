1. What is CSS?
CSS (Cascading Style Sheets) is a language used to describe the presentation of HTML elements on a webpage, including layout, colors, fonts, and spacing. It separates content from design, making websites easier to maintain and style consistently.

2. How do you link a CSS file to an HTML document?
using the <link> tag inside the <head> section of your HTML: <link rel="stylesheet" href="style.css">. This tells the browser to load and apply the styles from the external file.

3. What is a block element? How is it different from inline and inline-block elements?
A block element occupies the full width of its parent and starts on a new line (e.g., <div>, <p>). 
Inline elements only take up as much width as their content and do not start on a new line (e.g., <span>), while inline-block elements behave like inline elements but allow setting width and height.

4. What is the difference between pseudo-class and pseudo-element?
A pseudo-class (e.g., :hover, :first-child) targets elements in a specific state. A pseudo-element (e.g., ::before, ::after) targets and styles a part of an element, like its first line or content before/after it.

5. What is the difference between the child combinator and the descendant combinator?
The child combinator (>) selects only direct children of an element, while the descendant combinator (space) selects all nested elements at any level inside a parent. 
For example, div > p selects only direct <p> children of a <div>.

6. What are two ways that we can make an element invisible? What is the difference?
You can use display: none or visibility: hidden. 
display: none removes the element from the layout entirely, while visibility: hidden keeps its space but makes it invisible.

7. What is the CSS Box Model? Describe each part.
The Box Model describes the layout of HTML elements as a rectangle with content, padding (space inside around content), border (edge of the element), and margin (space outside the border). Each part affects the element’s total size and spacing.

8. What is the usage of !important? What are some use cases?
The !important rule forces a style to override any other conflicting rules. It’s often used to fix overriding issues or temporarily force a style, but should be used sparingly to avoid specificity conflicts.

9. What does z-index do?
z-index controls the stacking order of elements along the z-axis (front-to-back). Elements with higher z-index appear above those with lower values, but it only works on positioned elements (relative, absolute, fixed, sticky).

10. Can padding and margin be negative?
Padding cannot be negative because it represents space inside the element. 
Margins can be negative, which pulls the element closer to or overlaps other elements.

11. How do you center a block element with CSS?
by setting a width and using margin: 0 auto. This creates equal left and right margins, centering it horizontally in its container.

12. What are grid items? Can you explain some grid item properties?
Grid items are the child elements inside a Grid container. 
Properties like grid-column, grid-row, justify-self, and align-self control their placement, spanning, and alignment within the grid.

13. What is a flex container? Can you explain some flex container properties?
A flex container is an element with display: flex that arranges its child elements (flex items) along a main axis. 
Properties like justify-content, align-items, and flex-wrap control spacing, alignment, and wrapping of the items.

14. Assume a parent element has width = 200px and one child element. If the child element’s width is set to ‘auto’, what are the values of its width, left-margin, & right-margin?
If width: auto and margins are not set, the child’s width will expand to fill the parent (200px minus padding/borders), and left and right margins will default to 0. 
If margin: auto is used, the element is centered, and left and right margins share the remaining space equally.

15. Can you explain the difference between px, em and rem as they relate to font sizing?
px is an absolute unit representing fixed pixels. 
em is relative to the font-size of the parent element, 
rem is relative to the root element’s font-size, allowing more predictable scaling across the page.

16. What is responsive web design? How do we achieve this?
Responsive web design ensures a website adapts to different screen sizes and devices. It’s achieved using flexible layouts, relative units, media queries, and CSS techniques like Flexbox or Grid.
