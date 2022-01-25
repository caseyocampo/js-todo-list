# To Do List Project

What would a web developer portfolio be without a To Do List project?

In my To Do List, users can add a new list item(s). They can also remove default and new list items.

## Cool CSS Tricks

The `clamp` value for the `h1` tag. I learned about the clamp value for the font size property from CSS legend Kevin Powell.

The following is copied directly from MDN Web Docs:

    clamp(MIN, VAL, MAX) is resolved as max()(MIN, min()(VAL, MAX))

So, as I understand it, font size will be responsive in a way.

Here's how I use `clamp` for my `h1` tag:

`h1 { font-size: clamp(1rem, 7vw, 2rem); }`

## JavaScript
