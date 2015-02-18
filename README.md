# peekaboo.js

A jQuery plugin for accessible content toggles. Inspired by Heydon Pickering's
[progressive
collapsibles](http://heydonworks.com/practical_aria_examples/#progressive-collapsibles) and toggleSingle() from Magento's RWD theme.

## Example markup

```html
<button>Navigation</button>
<nav>
  <!-- stuff -->
</nav>

<h2 class="toggle-next">What happens next?</h2>
<p>Surprise!</p>

<script src="jquery.peekaboo.js">
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
