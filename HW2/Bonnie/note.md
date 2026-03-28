1. What is CSS?
CSS is a stylesheet language used to describle the presentation of HTML documents, including layout, colors, fonts, and responsiveness.  

2. What is a block element? How is it different from inline and inline-block elements?
Block elements
  - Start on a new line
  - Take up the full width by default  

Inline elements
  - Do not start on a new line
  - Width and height cannot be set  
  - Example: `span`, `a`

Inline-block elements
  - Stay on the same line
  - Width and height can be set  

3.What is the difference between pseudo-class and pseudo-element?
pseudo-class: Selects an element based on its state  
like: :hover, :focus

Pseudo-element: Selects a specific part of an element  
Example: ::before, ::after

 4. What is the difference between the child combinator and the descendant combinator?
Child combinator (`>`)
  - Selects only all direct children  
Descendant combinator (space)
  - Selects all descendants at any level

5. What is the attribute selector? Give some examples.
Attribute selectors select elements based on attributes.
like input[type="text"] { }

6. What are two ways to make an element invisible? What is the difference?

display: none
-Element is removed from the layout

visibility: hidden
-Element is invisible but still takes up space

7. What is the CSS Box Model?

The box model consists of:
Content – actual content
Padding – space between content and border
Border – surrounds padding
Margin – space outside the border\

8. What is the usage of !important? What are some use cases?

!important forces a CSS rule to override others, ignoring specificity.
Use cases:
Overriding third-party library styles
Overuse is discouraged because it breaks CSS cascade rules.

9. What does z-index do?
z-index controls the vertical stacking order of positioned elements.
A higher value appears on top.
Conditions:
Element must be positioned (relative, absolute, fixed, or sticky)

10. Can padding and margin be negative?
Margin: Yes, can be negative
Padding: No, cannot be negative

11. How do you center a block element with CSS?
Using margin:
div {
  margin: 0 auto;
}

Using flexbox:
.parent {
  display: flex;
  justify-content: center;
}

12. What are grid items? Explain some grid item properties.

Grid items are the direct children of a grid container.
Common properties:

    grid-column
    grid-row
    align-self
    justify-self

13. What is a flex container? Explain some flex container properties.

A flex container is an element with display: flex.

    Common properties:

        flex-direction

        justify-content

        align-items

        flex-wrap

14. What is responsive web design? How do we achieve this?
    Responsive web design allows layouts to adapt to different screen sizes.
    Techniques:
        Media queries
        Flexible layouts (Flexbox, Grid)
        