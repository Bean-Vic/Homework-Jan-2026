# HTML Interview Questions – Answers

## 1. What is HTML?
HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the web. It defines elements such as headings, paragraphs, images, links, and forms, which browsers interpret to display web pages.

## 2. What is the minimal structure of an HTML5 document?
The minimal structure of an HTML5 document includes the document type declaration, the root `<html>` element, and the `<head>` and `<body>` sections.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <!-- Page content goes here -->
  </body>
</html>
```

## 3. What is the purpose of the <meta> tag?

The <meta> tag is used to provide metadata about an HTML document. This metadata is not displayed on the page but is used by browsers, search engines, and other web services. Common purposes include:

Defining the character encoding (e.g., UTF-8)

Setting the viewport for responsive design

Providing SEO-related information such as description and keywords

Specifying author, refresh behavior, or compatibility settings

## 4. What is the difference between <head> and <header>?
```
<head>
Contains metadata and resources related to the document, such as <title>, <meta>, <link>, and <style>. It is not visible to users and appears before the <body> tag.

```
```
<header>

A semantic HTML element used within the <body> to represent introductory content or navigational links. It is visible on the page and may contain headings, logos, or menus.
```

## 5. What is the ```<form> ```tag used for in HTML?

The ```<form>``` tag is used to collect user input and submit it to a server for processing. It can contain various form controls such as text inputs, password fields, radio buttons, checkboxes, dropdown lists, and submit buttons.

## 6. Explain the following code
```
<a>: Defines a hyperlink.

href: Specifies the URL the link points to.

rel="noreferrer": Prevents the browser from sending the referring page’s URL to the target site.

rel="nofollow": Instructs search engines not to follow or pass ranking credit to the linked page.

Link: The clickable text displayed to the user.
```

## 7. How do you serve your page in multiple languages?

A web page can be served in multiple languages by:

Using the lang attribute (e.g., <html lang="en">)

Creating separate pages or URLs for each language (e.g., /en/, /fr/)

Using server-side or client-side language detection

Using translation files and internationalization (i18n) frameworks

Providing language switchers for users

## 8. What are semantic HTML tags and why are they important?

Semantic HTML tags clearly describe their meaning and purpose in the document. Examples include ```<header>, <footer>, <article>, <section>, <nav>, and <main>```.

They are important because they:

Improve accessibility for screen readers

Enhance SEO by helping search engines understand content structure

Make code more readable and maintainable

Provide better structure and meaning to web pages


![html quiz](/HW1/Tianzhou%20Gao/html%20quiz.png)