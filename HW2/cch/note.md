1.  What is CSS?

CSS is used to control the layout and visual appearance of web page

2. What is block element? How is it different from inline, and inline-block elements?

✅ 1. 什么是 Block Element（块级元素）

✅ 特点
• ✔️ 独占一整行
• ✔️ 默认从新的一行开始
• ✔️ 可以设置：
• width / height
• margin / padding

✅ 2. Inline Element（行内元素）

✅ 特点
• ❌ 不会换行
• ❌ 不能设置 width / height
• ✔️ 大小由内容决定
• ✔️ margin 只有左右有效（上下基本没用）

✅ 3. Inline-block Element（行内块）

👉 这是个混血儿：
像 inline 一样不换行，像 block 一样能设大小。

✅ 特点
• ✔️ 不换行
• ✔️ 可以设置 width / height
• ✔️ margin / padding 全都生效

Block elements take up the full width of their parent and always start on a new line, and they can have width and height.

Inline elements stay in the same line, their size depends on content, and width/height cannot be set.
Inline-block elements stay inline but also allow setting width and height, combining features of both.

3. What is the difference between pseudo-class and pseudo-element?

✅ 白话版

🎯 Pseudo-class：

当这个元素“变成某种情况”时给它样式

比如：
• :hover 鼠标放上去
• :focus 被选中
• :first-child 排在第一个

元素本身没变，只是状态变了。

🧩 Pseudo-element：

给元素的某一“块”单独加样式，甚至造出一块

比如：
• ::first-line 第一行
• ::first-letter 第一个字母
• ::before / ::after 插入内容

这是在操作元素内部的一部分或虚拟元素。

Pseudo-classes define a special state of an element, such as hover, focus, or first-child.

Pseudo-elements style specific parts of an element or insert virtual content, such as first-line, first-letter, or before and after.

4. What is the difference between the child combinator and the descendant combinator?

Child combinator selects all direct children div > p
descendant combinator selects all nested elements, like div p

5. What is the attribute selector? Give some examples.

input[type="password"] { ... }

Attribute selectors select elements based on their HTML attributes or attribute values, such as selecting all inputs with a specific type or elements that contain a certain attribute.

6. What are two ways that we can make an element invisible? What is the difference?

display: none removes the element from the layout completely, so it does not take up any space.
visibility: hidden hides the element but still keeps its space in the layout.

7. What is the CSS Box Model? Describe each part.

The CSS Box Model describes how every element is represented as a box with content, padding, border, and margin.

[ margin ]
[ border ]
[ padding ]
[ content ]

8. What is the usage of !important? What are some use cases?

!important forces a CSS rule to override all other normal rules, no matter the specificity.

9. What does z-index do?

When element overlap z-index decide who on the top

10. Can padding and margin be negative?

Padding can not negative. Margin can negative
内容和边框之间的“内部空间”

负 margin 的真实用途（加分点）
• 调整组件间距但不改结构

11. How do you center a block element with CSS?

Margin: 0 auto;

.box {
width: 300px;
margin: 0 auto;
}
现代方法
.parent {
display: flex;
justify-content: center;
}
水平 + 垂直都居中

.parent {
display: flex;
justify-content: center;
align-items: center;
}

12. What are grid items? Can you explain some grid item properties?

Grid items are the direct children of a grid container.
Grid item properties control how individual items are placed and aligned within the grid, such as grid-column, grid-row, grid-area, justify-self, and align-self.

13. What is a flex container? Can you explain some flex container properties?

A flex container is an element with display: flex or inline-flex. It controls the layout of its direct children, called flex items.
Common flex container properties include flex-direction to set the main axis, justify-content to align items along the main axis, align-items to align them on the cross axis, and flex-wrap to control whether items wrap onto multiple lines.

14. What is responsive web design? How do we achieve this?
    Responsive web design means a website can adapt to different screen sizes and devices.

We achieve responsive web design using media queries, flexible layouts like Flexbox or Grid, responsive units, and responsive images.
