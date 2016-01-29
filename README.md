# peekaboo.js

A jQuery plugin for accessible content toggles. Inspired by Heydon Pickering's
[progressive
collapsibles](http://heydonworks.com/practical_aria_examples/#progressive-collapsibles) and toggleSingle() from Magento's RWD theme.

Peekaboo is written in ES6, so you'll probably need to use [Babel](https://babeljs.io/) or some other transpiler.


## Example use

### CommonJS module


```js
import $ from 'jquery';
import peekaboo from 'peekaboo-toggle';

$('.toggle-next').peekaboo();
```

```html
<button class="toggle-next">Navigation</button>
<nav>
  <!-- stuff -->
</nav>
```

```css
[aria-hidden="true"] {
  display: none;
}

[aria-hidden="false"] {
  display: block;
}
```

### Script tag

```html
<button class="toggle-next">Navigation</button>
<nav>
  <!-- stuff -->
</nav>

<h2 class="toggle-next">What happens next?</h2>
<p>Surprise!</p>

<script src="jquery.peekaboo.js"></script>
<script>
  $('.toggle-next').peekaboo();
</script>
```

```css
[aria-hidden="true"] {
  display: none;
}

[aria-hidden="false"] {
  display: block;
}
```

### Toggling some other element

You can specify the ID of the content you'd like to toggle using the `data-toggle-target` attribute. This is useful if the content doesn't immediately follow the toggle button in your document.

```html
<button class="toggle-next" data-toggle-target="nav">Navigation</button>
<!-- stuff -->
<nav id="nav">
  <!-- stuff -->
</nav>
```
