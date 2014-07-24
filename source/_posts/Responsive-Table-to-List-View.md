title: Responsive Table to List View With CSS
date: 2014-07-24 07:23:00
tags:
 - Resposive
 - Web
---
This post is related to how to make a responsive table into a List view when the browser width is pretty small.   
Table collapses into a "list" on small screens. Headers are pulled from data attributes.

**You can find the origin post here: http://codepen.io/geoffyuen/pen/FCBEg. And you can download the ZIP package with this link: http://codepen.io/geoffyuen/share/zip/FCBEg/**


<!-- more -->

Core Code: 
```css
.rwd-table td:before {
    content: attr(data-th)": ";
    ont-weight: bold;
    width: 6.5em;
    display: inline-block;
}
```
![Table View](/img/responsiveTable/1.png "Table View")    
![List View](/img/responsiveTable/2.png "List View")    

###The full code is below:

```html
<!DOCTYPE html>
<html>

<head>

    <meta charset="UTF-8">

    <title>Responsive Table - CodePen</title>
    <style type="text/css">
        @import 'http://fonts.googleapis.com/css?family=Montserrat:300,400,700';
        .rwd-table {
            margin: 1em 0;
            min-width: 300px;
        }
        .rwd-table tr {
            border-top: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
        }
        .rwd-table th {
            display: none;
        }
        .rwd-table td {
            display: block;
        }
        .rwd-table td:first-child {
            padding-top: .5em;
        }
        .rwd-table td:last-child {
            padding-bottom: .5em;
        }
        .rwd-table td:before {
            content: attr(data-th)": ";
            font-weight: bold;
            width: 6.5em;
            display: inline-block;
        }
        @media (min-width: 480px) {
            .rwd-table td:before {
                display: none;
            }
        }
        .rwd-table th,
        .rwd-table td {
            text-align: left;
        }
        @media (min-width: 480px) {
            .rwd-table th,
            .rwd-table td {
                display: table-cell;
                padding: .25em .5em;
            }
            .rwd-table th:first-child,
            .rwd-table td:first-child {
                padding-left: 0;
            }
            .rwd-table th:last-child,
            .rwd-table td:last-child {
                padding-right: 0;
            }
        }
        body {
            padding: 0 2em;
            font-family: Montserrat, sans-serif;
            -webkit-font-smoothing: antialiased;
            text-rendering: optimizeLegibility;
            color: #444;
            background: #eee;
        }
        h1 {
            font-weight: normal;
            letter-spacing: -1px;
            color: #34495E;
        }
        .rwd-table {
            background: #34495E;
            color: #fff;
            border-radius: .4em;
            overflow: hidden;
        }
        .rwd-table tr {
            border-color: #46627f;
        }
        .rwd-table th,
        .rwd-table td {
            margin: .5em 1em;
        }
        @media (min-width: 480px) {
            .rwd-table th,
            .rwd-table td {
                padding: 1em !important;
            }
        }
        .rwd-table th,
        .rwd-table td:before {
            color: #dd5;
        }
    </style>

</head>

<body>

    <h1>RWD List to Table</h1>
    <table class="rwd-table">
        <tr>
            <th>Movie Title</th>
            <th>Genre</th>
            <th>Year</th>
            <th>Gross</th>
        </tr>
        <tr>
            <td data-th="Movie Title">Star Wars</td>
            <td data-th="Genre">Adventure, Sci-fi</td>
            <td data-th="Year">1977</td>
            <td data-th="Gross">$460,935,665</td>
        </tr>
        <tr>
            <td data-th="Movie Title">Howard The Duck</td>
            <td data-th="Genre">"Comedy"</td>
            <td data-th="Year">1986</td>
            <td data-th="Gross">$16,295,774</td>
        </tr>
        <tr>
            <td data-th="Movie Title">American Graffiti</td>
            <td data-th="Genre">Comedy, Drama</td>
            <td data-th="Year">1973</td>
            <td data-th="Gross">$115,000,000</td>
        </tr>
    </table>

    <p>&larr; Drag window (in editor or full page view) to see the effect. &rarr;</p>

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

</body>

</html>
```