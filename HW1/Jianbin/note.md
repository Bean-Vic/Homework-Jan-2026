# HW1 - HTML Notes

## Part 1: LeetCode Practice
- I practice 1–3 LeetCode problems daily using JavaScript/TypeScript (ongoing).

---

## Part 2: Q&A (HTML Fundamentals)

### 1) What is HTML?
HTML (HyperText Markup Language) is the standard markup language used to structure content on the web. It describes the meaning and hierarchy of content (e.g., headings, paragraphs, lists, forms) so browsers can render pages consistently and tools like screen readers can interpret them.

### 2) What is the purpose of the <meta> tag?
`<meta>` provides metadata about the HTML document, such as character encoding, viewport settings for responsive design, page description, author, and SEO-related information. Metadata is not displayed directly on the page but is used by browsers and search engines.

### 3) What is the minimal structure of an HTML5 document?
A minimal HTML5 document includes the doctype, html root, head (with charset and title), and body:
- `<!doctype html>`
- `<html lang="...">`
- `<head>` (e.g., `<meta charset="utf-8">`, `<title>...</title>`)
- `<body>` (visible content)

### 4) What is the difference between <head> and <header>?
- `<head>` is for document metadata and resources (title, meta tags, CSS links, scripts). It is not rendered as visible page content.
- `<header>` is a semantic element displayed in the page, typically containing introductory content or navigation for a section or the whole page.

### 5) What element can we use to create a dropdown list?
Use the `<select>` element with nested `<option>` elements to create a dropdown list. For example: `<select><option>...</option></select>`.

### 6) What is the <form> tag used for in HTML?
`<form>` groups input controls (text fields, radios, checkboxes, selects, etc.) so the user can submit data to a server or handle it via JavaScript. It defines how data is sent using attributes like `action` and `method`.

### 7) Explain the rel="noreferrer nofollow" attribute in <a> tag? How can we open the link in a new tab?
- `rel="noreferrer"` prevents the browser from sending the referrer (the current page URL) to the destination site.
- `rel="nofollow"` suggests search engines should not pass ranking/SEO credit through that link.
To open a link in a new tab, use `target="_blank"`. For security, it’s common to pair with `rel="noopener noreferrer"`.

### 8) How do you serve your page in multiple languages?
Common approaches:
- Set the document language using `<html lang="en">` (or `zh`, etc.) and use language-specific content.
- Provide separate localized pages/routes (e.g., `/en/`, `/zh/`) or use server-side rendering/i18n frameworks to dynamically serve content.
- Use the `hreflang` attribute in `<link>` tags (or in sitemaps) to inform search engines about language/region variants.

### 9) What are semantic HTML tags, and why are they important?
Semantic tags (e.g., `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) describe the role/meaning of content rather than just appearance. They improve accessibility (screen readers), SEO, maintainability, and make the document structure clearer for developers and browsers.

### 10) What’s the difference between SVG and Canvas?
- **SVG** is vector-based and uses an XML-like DOM structure. Shapes are individual elements that can be styled and interacted with via CSS/JS. It’s great for scalable icons, diagrams, and interactive graphics.
- **Canvas** is raster-based and draws pixels via a JavaScript API. Once drawn, shapes are not separate DOM elements. It’s great for high-performance drawing like games, animations, and large numbers of objects.

---

## Part 2: W3Schools HTML Quiz Result (Screenshot Required)
Please replace the file name below with your real screenshot image name.


<img src="https://github.com/Bean-Vic/Homework-Jan-2026/blob/jianbin_hw1_resubmit/HW1/Jianbin/quiz-result.png?raw=1" alt="W3Schools CSS Quiz Result" width="700">
---

## Part 2: Peer Mock (Audio Uploaded)
- We conducted a group peer mock interview practice.
- Audio recording has been uploaded as required (submission platform/link provided by the instructor).
