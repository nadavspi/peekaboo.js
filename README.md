# peekaboo.js

A jQuery plugin for showing and hiding content in an accessible way.

[View demos](https://nadavspi.github.io/peekaboo.js/).

## Features 

- Flexible for most cases where you need to show/hide stuff, such as menus,
  accordions, tabs.
- Simple by default, and customizable for more complex uses.
- Adds ARIA attributes and a `<button>` element (when necessary) for keyboard and screen reader accessibility.

## Installation

With npm:

```bash
npm install --save peekaboo-toggle
```

With npmcdn:

```html
<script src="https://npmcdn.com/peekaboo-toggle/lib/index.js"></script>
```

## How to use

By default, a peekaboo toggle will show/hide the next element in the DOM. Let's
say we have a button that should show/hide a menu when clicked:

```html
<button class="peekaboo">Menu</button>
<nav>
  <ul>
    <li><a href="breakfast.html">Breakfast</a></li>
    <li><a href="lunch.html">Lunch</a></li>
    <li><a href="dinner.html">Dinner</a></li>
  </ul>
</nav>
```

We bind peekaboo to the button like this:

```js
// If you're using npm
import $ from 'jquery';
import peekaboo from 'peekaboo-toggle';

$('.peekaboo').peekaboo();
```

Peekaboo will add the [`hidden` attribute] to the `<nav>`, so let's add some
CSS to make sure hidden means hidden:

```css
[hidden] {
  display: none !important;
}
```

Peekaboo will add the `aria-expanded` and `aria-controls` attributes to the
`<button>` and will &emdash; since we didn't specify one &emdash; generate an
ID for the `<nav>`. The nav will be hidden by default, and the DOM will look something like this:

```html
<button class="peekaboo" aria-expanded="false" aria-controls="peekaboo-c4tlipic9">Menu</button>
<nav id="peekaboo-c4tlipic9" hidden="hidden">
  <ul>
    <li><a href="breakfast.html">Breakfast</a></li>
    <li><a href="lunch.html">Lunch</a></li>
    <li><a href="dinner.html">Dinner</a></li>
  </ul>
</nav>
```

### Toggling some other element

You can specify the ID of the content you'd like to toggle using the `data-toggle-target` or `aria-control` attributes. This is useful if the content doesn't immediately follow the toggle button in your document.

```html
<button class="peekaboo" aria-controls="menu">Menu</button>
<h2>We have many beautiful things on our menus.</h2>
<nav id="menu">
  <ul>
    <li><a href="breakfast.html">Breakfast</a></li>
    <li><a href="lunch.html">Lunch</a></li>
    <li><a href="dinner.html">Dinner</a></li>
  </ul>
</nav>
```
### Options

The following options are available, shown with the default values:

```javascript
$('.peekaboo').peekaboo({
  // Prefix for generated IDs and namespace the event listener
  namespace: 'peekaboo',

  // Class name(s) added to generated button (if applicable)
  buttonClassname: 'button--transparent',

  // Called after the event.
  // Receives the event object as an argument.
  callback: () => {},

  // When true, the click event will be removed
  // If a <button> was generated, it'll also be removed
  destruct: false
});
```
