# HW1 - HTML
1. What is HTML?
2. What is the purpose of the <meta> tag?
3. What is the minimal structure of an HTML5 document?
4. What is the difference between <head> and <header> ?
5. What element can we use to create a dropdown list?
6. What is the <form> tag used for in HTML?
7. Explain the rel="noreferrer nofollow" attribute in <a> tag? How can we open
the link in a new tab?
8. How do you serve your page in multiple languages?
9. What are semantic HTML tags, and why are they important?
10. What’s the difference between SVG and Canvas?


1. What is HTML?
HTML, or HyperText Markup Language, is the standard markup language used to create and structure content on the World Wide Web. 

3. What is the minimal structure of an HTML5 document?
a standard, practical minimal template includes <!DOCTYPE html>, 
<meta charset="utf-8">, <meta name="viewport" ...>, 
and <title> within <html>, <head>, and <body> for robust rendering. 

2. What is the purpose of the meta tag?
The purpose of the HTML <meta> tag is to provide metadata (data about data) about an HTML document.
1) Specifying Character Encoding
2) Define Page Description and Keywords
3) Control the Viewport (Responsive Design)
4) Set Author Information

4. What is the difference between `<head>` and `<header>` ?
The <head> tag holds invisible metadata for browsers/search engines, placed within <html> but before <body>.
while the <header> tag defines a visible, introductory content area within the <body> of a webpage, often at the top. 


6. What is the <form> tag used for in HTML?
The <form> tag is used to create a section in a web page that collects user input and sends it to a server for processing. It acts as a container for various interactive controls like text fields, checkboxes, radio buttons, and buttons, enabling interaction between the user and the application. 

7. Explain the following code
    
    ```html
    <a href="http://example.com/sample_page/" rel="noreferrer nofollow">Link</a>
    ```
    It creates a clickable element that directs user's browser to the specified URL when activated.
    noreferrer hides referrer information when the link is clicked
    nofollow prevent vouching for, any of the links displayed here

8. How do you serve your page in multiple languages?
1) By applying the lang attribute to element.
    <p>The title is "<span lang="fr">Le Bon Usage</span>" in French.</p>
2) Use UTF-8 encoding to support all characters.
    <meta charset="UTF-8">

8. What are semantic HTML tags and why are they important?
Semantic HTML tags use descriptive tags (like <article>, <nav>, <footer>) to give meaning and structure to web content, which improves accessibility, and enhances code readability/maintainability for developers. 


