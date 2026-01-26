# Q&A

## 1. What is HTML?

HTML stands for **HyperText Markup Language**, and it’s basically the **structure of the web**. When a browser loads a webpage, HTML tells it what each part of the page is — like headings, paragraphs, images, links, and forms. HTML is the **skeleton**, CSS is the **style**, and JavaScript is the **behavior**. HTML itself doesn’t handle logic or styling, but without it, the browser wouldn’t know how to organize or display the content.



## 2. What is the purpose of the `<meta>` tag?

The `<meta>` tag provides **metadata** about the HTML document for the **browser and search engines**, not for direct display.

For example, **charset** defines the **character encoding**, so text renders correctly.

The **name** and **content** attributes describe things like **description**, **keywords**, or **author**.

The **viewport meta tag** is especially important for **responsive design**, because it controls how the page scales on different screen sizes.

Overall, meta tags help with **SEO**, **responsiveness**, and correct rendering across devices.



## 3. What is the minimal structure of an HTML5 document?

A minimal HTML5 document starts with the <!DOCTYPE html> declaration, which tells the browser we’re using **HTML5**. Then we have the <html> element, inside it a <head> for metadata like title and meta tags, and a <body> where all the visible content lives. 

This structure is important because it gives the browser a **clear and predictable layout** to render the page correctly across different devices and browsers.



## 4. What is the difference between `<head>` and `<header>` ?

The <head> element contains **metadata**, like the page title, stylesheets, scripts, and meta tags — things users don’t see. 

The <header> element, on the other hand, is part of the **visible content** and usually contains things like a logo, navigation, or page title. A simple way to remember it is: <head> is for the **browser**, <header> is for the **user**.



## 5. What element can we use to create a dropdown list?

In HTML, a dropdown list is created using the `<select>` element along with multiple `<option>` elements. The `<select>` defines the dropdown itself, and each `<option>` represents a selectable value. 

This is commonly used in forms for things like choosing a country, language, or category, and it works well with form submission and accessibility by default.



## 6. What is the `<form>` tag used for in HTML?

The `<form>` tag is used to **collect user input** and send it to a server for processing. It can include inputs like text fields, checkboxes, radio buttons, dropdowns, and buttons. 

The form defines how data is submitted using attributes like **action** and **method**, such as GET or POST. Basically, anytime you’re logging in, signing up, or submitting data, it’s usually handled by an HTML form.



## 7. Explain the  `rel= "noreferrer nofollow"` attribute in `<a>` tag? How can we open the link in a new tab?

The `noreferrer` attribute prevents the browser from sending **referrer information** to the target site, which improves privacy and security. 

`nofollow` tells **search engines** not to pass SEO ranking or authority to the linked page. 

To open a link in a new tab, we use target="_blank", and in real projects, it’s best practice to combine it with rel="noopener noreferrer" to avoid security risks like tab hijacking.



## 8. How do you serve your page in multiple languages?

There are a few common approaches. At the HTML level, we can use the **lang attribute** to tell the browser what language the content is in. 

On the application side, we usually rely on **internationalization**, or i18n, where text is stored in translation files and loaded based on user preference or browser settings. 

In real-world apps, language switching is often handled dynamically using JavaScript or backend logic.



## 9. What are semantic HTML tags, and why are they important?

Semantic HTML tags are elements like <header>, <nav>, <main>, <section>, <article>, and <footer> that clearly describe their **meaning and purpose**. 

They make the code more **readable**, improve **accessibility** for screen readers, and help **search engines** better understand the page structure. Using semantic tags is considered a best practice because it leads to cleaner, more maintainable, and more accessible code.



## 10. What’s the difference between SVG and Canvas?

SVG is **vector-based**, meaning graphics are defined using XML and stay sharp at any resolution. Each element in SVG is part of the DOM, so it’s easy to style or interact with using CSS and JavaScript. 

Canvas, on the other hand, is **pixel-based** and works more like drawing on a bitmap. It’s better for **high-performance graphics**, animations, or games, but once something is drawn, it’s not directly accessible as an individual element.

## 2. Screenshot of W3 schools HTML Quiz

![w3school-html-quiz](https://image.lei-xue.com/vic-icc/W3S-html-quiz.png)
